import nodemailer from "nodemailer";
import path from "path";
import {
  contactNotificationEmailTemplate,
  contactNotificationEmailText,
  contactConfirmationEmailTemplate,
  contactConfirmationEmailText,
} from "./emailTemplates";

// Reuse a single transporter across requests instead of creating one per call
let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const port = parseInt(process.env.EMAIL_PORT || "465", 10);

  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port,
    secure: port === 465, // true for 465, false for other ports (e.g. 587)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
}

function fromAddress() {
  return `"${process.env.EMAIL_NAME || "SJFK Fintech"}" <${process.env.FROM_EMAIL}>`;
}

// Embeds the logo directly in the email via Content-ID (cid) instead of
// linking to a hosted URL, so it renders correctly in every client and
// environment (including local dev). Referenced in templates as
// src="cid:logo-icon".
function logoAttachment() {
  return [
    {
      filename: "logo.png",
      path: path.join(process.cwd(), "public", "images", "logo.png"),
      cid: "logo-icon",
    },
  ];
}

export class EmailService {
  /**
   * Notifies the business inbox (CONTACT_TO_EMAIL) that a new contact form
   * submission came in, and sets replyTo to the visitor's own address so a
   * direct reply from the inbox goes straight to them.
   */
  static async sendContactNotificationEmail(submission) {
    const to = process.env.CONTACT_TO_EMAIL || process.env.FROM_EMAIL;

    const html = contactNotificationEmailTemplate(submission);
    const text = contactNotificationEmailText(submission);

    return getTransporter().sendMail({
      from: fromAddress(),
      to,
      replyTo: submission.email,
      envelope: {
        from: process.env.FROM_EMAIL,
        to,
      },
      subject: `New enquiry from ${submission.name}`,
      html,
      text,
      attachments: logoAttachment(),
    });
  }

  /**
   * Sends an auto-reply confirmation back to whoever filled out the form.
   */
  static async sendContactConfirmationEmail(submission) {
    const html = contactConfirmationEmailTemplate(submission);
    const text = contactConfirmationEmailText(submission);

    return getTransporter().sendMail({
      from: fromAddress(),
      to: submission.email,
      replyTo: process.env.REPLY_TO_EMAIL || process.env.FROM_EMAIL,
      envelope: {
        from: process.env.FROM_EMAIL,
        to: submission.email,
      },
      subject: "We've received your message",
      html,
      text,
      attachments: logoAttachment(),
    });
  }
}
