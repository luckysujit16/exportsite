import { NextResponse } from "next/server";
import { EmailService } from "@/lib/emailService";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Basic in-memory rate limit: max 5 submissions per IP per 10 minutes.
// Resets on server restart/redeploy — fine as a first line of defense,
// swap for a durable store (Redis/Upstash) if abuse becomes an issue.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      message,
      // Honeypot field — real users never fill this in. If it has a
      // value, silently pretend success so the bot moves on.
      website,
    } = body || {};

    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const errors = {};
    if (typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }
    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Please enter a message (at least 10 characters).";
    }
    if (phone !== undefined && phone !== null && typeof phone !== "string") {
      errors.phone = "Invalid phone number.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const submission = {
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      phone: phone ? String(phone).trim().slice(0, 50) : "",
      company: company ? String(company).trim().slice(0, 200) : "",
      message: message.trim().slice(0, 5000),
    };

    // Notify the business inbox, then confirm to the sender. If the
    // confirmation email fails, we still treat the submission as
    // successful since the business already has the enquiry.
    await EmailService.sendContactNotificationEmail(submission);
    try {
      await EmailService.sendContactConfirmationEmail(submission);
    } catch (confirmationError) {
      console.error(
        "Contact confirmation email failed to send:",
        confirmationError,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 },
    );
  }
}
