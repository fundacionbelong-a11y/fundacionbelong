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

  const email = String(body.email ?? "").trim().toLowerCase();
  const source = String(body.source ?? "newsletter").trim().slice(0, 100);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Ingresa un correo válido." }, { status: 400 });
  }

  // Idempotent: a repeat signup is treated as success, not an error.
  await pool.query(
    `INSERT INTO newsletter_subscribers (email, source)
     VALUES ($1, $2)
     ON CONFLICT (email) DO NOTHING`,
    [email.slice(0, 200), source]
  );

  return NextResponse.json({ success: true });
}
