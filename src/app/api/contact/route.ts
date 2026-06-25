import { NextResponse } from "next/server";
import pool from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const source = String(body.source ?? "contacto").trim().slice(0, 100);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "El correo no es válido." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "El mensaje es demasiado largo." }, { status: 400 });
  }

  await pool.query(
    `INSERT INTO contact_messages (name, email, subject, message, source)
     VALUES ($1, $2, $3, $4, $5)`,
    [name.slice(0, 200), email.slice(0, 200), subject.slice(0, 300) || null, message, source]
  );

  return NextResponse.json({ success: true });
}
