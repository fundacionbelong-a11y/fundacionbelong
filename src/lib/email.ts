// Sends a notification email via Resend's REST API when a contact
// message arrives. Safe no-op if RESEND_API_KEY isn't configured, and
// never throws — the caller's DB write is the source of truth.

type ContactPayload = {
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  source?: string | null;
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function sendContactNotification(p: ContactPayload): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return; // not configured — skip silently

  const from = process.env.RESEND_FROM || "Belong <onboarding@resend.dev>";
  const to = process.env.CONTACT_NOTIFY_TO || "fundacionbelong@gmail.com";

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#1a1a1a">Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(p.name)}</p>
      <p><strong>Correo:</strong> <a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a></p>
      ${p.subject ? `<p><strong>Asunto:</strong> ${escapeHtml(p.subject)}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p style="white-space:pre-wrap;background:#f7f5f2;padding:16px;border-radius:8px">${escapeHtml(p.message)}</p>
      ${p.source ? `<p style="color:#888;font-size:12px">Origen: ${escapeHtml(p.source)}</p>` : ""}
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: p.email,
        subject: `Nuevo mensaje de contacto: ${p.subject || p.name}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Resend notification failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Resend notification error:", err);
  }
}
