/**
 * Branded HTML email templates for the contact form.
 * Email clients strip <style> blocks and most CSS, so everything here uses
 * inline styles and table-based layout for maximum compatibility (Outlook,
 * Gmail, Apple Mail, etc.) instead of the Tailwind classes used on the site.
 */

const BRAND_NAME = "SJFK FINTECH PRIVATE LIMITED";
const PRIMARY = "#00B98E";
const PRIMARY_DARK = "#009472";
const SECONDARY = "#FF6922";
const SURFACE = "#EFFDF5";
const WHITE = "#ffffff";
const BORDER_GRAY = "#E2E8DF";
const MUTED_TEXT = "#666565"; // ink-muted
const BODY_TEXT = "#0E2E50"; // ink
const CARD_GRAY = "#F8FAF9";

function layout(content, preheader) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${BRAND_NAME}</title>
  </head>
  <body style="margin:0; padding:0; background-color:${SURFACE}; font-family: Arial, Helvetica, sans-serif;">
    <!-- Preheader (hidden preview text) -->
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
      ${preheader}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${SURFACE};">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="width:100%; max-width:520px;">

            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <img src="cid:logo-icon" width="36" height="36" alt="${BRAND_NAME}" style="display:block; width:36px; height:36px;" />
                    </td>
                    <td style="padding-left:10px; vertical-align:middle;">
                      <span style="font-size:16px; font-weight:bold; color:${BODY_TEXT}; letter-spacing:0.02em;">SJFK FINTECH</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Card -->
            <tr>
              <td style="background-color:${WHITE}; border:1px solid ${BORDER_GRAY}; border-radius:12px; padding:32px 28px;">
                ${content}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding-top: 24px;">
                <p style="margin:0; font-size:12px; color:${MUTED_TEXT}; line-height:18px;">
                  &copy; ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function infoRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid ${BORDER_GRAY};">
        <p style="margin:0; font-size:11px; font-weight:bold; letter-spacing:0.08em; text-transform:uppercase; color:${MUTED_TEXT};">${escapeHtml(
          label,
        )}</p>
        <p style="margin:4px 0 0; font-size:14px; line-height:22px; color:${BODY_TEXT}; white-space:pre-wrap;">${escapeHtml(
          value,
        )}</p>
      </td>
    </tr>`;
}

/**
 * Sent to the business inbox whenever a visitor submits the contact form.
 */
export function contactNotificationEmailTemplate(submission) {
  const { name, email, phone, company, message } = submission;

  const content = `
    <h1 style="margin:0 0 4px; font-size:20px; color:${BODY_TEXT}; text-align:left;">
      New contact form submission
    </h1>
    <p style="margin:0 0 20px; font-size:13px; color:${MUTED_TEXT}; text-align:left;">
      Received via the website contact form.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${infoRow("Name", name)}
      ${infoRow("Email", email)}
      ${phone ? infoRow("Phone", phone) : ""}
      ${company ? infoRow("Company", company) : ""}
      ${infoRow("Message", message)}
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 24px 0 4px;">
      <tr>
        <td align="left" style="border-radius:8px; background-color:${PRIMARY};">
          <a href="mailto:${encodeURIComponent(email)}"
             style="display:inline-block; padding:12px 24px; font-size:14px; font-weight:bold; color:${WHITE}; text-decoration:none; border-radius:8px;">
            Reply to ${escapeHtml(name)}
          </a>
        </td>
      </tr>
    </table>
  `;

  return layout(content, `New contact form submission from ${name}`);
}

export function contactNotificationEmailText(submission) {
  const { name, email, phone, company, message } = submission;
  return [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

/**
 * Sent back to the person who filled out the form, confirming receipt.
 */
export function contactConfirmationEmailTemplate(submission) {
  const { name, message } = submission;

  const content = `
    <h1 style="margin:0 0 12px; font-size:22px; color:${BODY_TEXT}; text-align:center;">
      Thanks for reaching out, ${escapeHtml(name)}
    </h1>
    <p style="margin:0 0 20px; font-size:15px; line-height:24px; color:${BODY_TEXT}; text-align:center;">
      We've received your message and a member of the ${BRAND_NAME} team will get back to you shortly.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${CARD_GRAY}; border:1px solid ${BORDER_GRAY}; border-radius:8px; margin-bottom:8px;">
      <tr>
        <td style="padding:16px 18px;">
          <p style="margin:0 0 6px; font-size:11px; font-weight:bold; letter-spacing:0.08em; text-transform:uppercase; color:${MUTED_TEXT};">Your message</p>
          <p style="margin:0; font-size:14px; line-height:22px; color:${BODY_TEXT}; white-space:pre-wrap;">${escapeHtml(
            message,
          )}</p>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BORDER_GRAY}; margin-top:20px;">
      <tr>
        <td style="padding-top:16px;">
          <p style="margin:0; font-size:12px; line-height:18px; color:${MUTED_TEXT}; text-align:center;">
            If this wasn't you, you can safely ignore this email.
          </p>
        </td>
      </tr>
    </table>
  `;

  return layout(content, `We've received your message — ${BRAND_NAME}`);
}

export function contactConfirmationEmailText(submission) {
  const { name, message } = submission;
  return `Thanks for reaching out, ${name}\n\nWe've received your message and a member of the ${BRAND_NAME} team will get back to you shortly.\n\nYour message:\n${message}\n\nIf this wasn't you, you can safely ignore this email.`;
}

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
