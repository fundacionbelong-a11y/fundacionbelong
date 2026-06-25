import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import pool from "@/lib/db";
import Layout from "../../components/Layout";
import { type AdminUser } from "../../components/AdminUsersClient";
import AdminDashboard, { type ContactMessage, type Subscriber } from "../../components/AdminDashboard";

export const metadata = {
  title: "Administración — Fundación Belong",
  robots: { index: false, follow: false },
};

// Always render fresh — never cache the user list.
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/entrar");

  // Role gate: only admins may see this page. Look up by email (always
  // present in the session) rather than id, which may be absent from the JWT.
  const roleRes = await pool.query("SELECT role FROM users WHERE email = $1", [
    session.user.email,
  ]);
  const role = roleRes.rows[0]?.role;
  if (role !== "admin") redirect("/members");

  // Fetch users, contact messages and newsletter subscribers in parallel.
  const [usersRes, messagesRes, subsRes] = await Promise.all([
    pool.query(`
      SELECT u.name, u.email, u.role,
             CASE WHEN u.password IS NOT NULL THEN 'correo' ELSE 'social' END AS metodo,
             COALESCE(string_agg(a.provider, ', '), '') AS providers,
             to_char(u.created_at, 'YYYY-MM-DD HH24:MI') AS registrado
      FROM users u
      LEFT JOIN accounts a ON a."userId" = u.id
      GROUP BY u.id
      ORDER BY u.created_at DESC
    `),
    pool.query(`
      SELECT id, name, email, subject, message, source,
             to_char(created_at, 'YYYY-MM-DD HH24:MI') AS created_at
      FROM contact_messages
      ORDER BY created_at DESC
    `),
    pool.query(`
      SELECT id, email, source,
             to_char(created_at, 'YYYY-MM-DD HH24:MI') AS created_at
      FROM newsletter_subscribers
      ORDER BY created_at DESC
    `),
  ]);

  const users: AdminUser[] = usersRes.rows;
  const messages: ContactMessage[] = messagesRes.rows;
  const subscribers: Subscriber[] = subsRes.rows;

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">

          {/* Back link */}
          <Link
            href="/members"
            className="inline-flex items-center gap-2 text-sm text-stone/60 hover:text-gold transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a mi espacio
          </Link>

          {/* Header */}
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">Administración</p>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-2">
            Comunidad <span className="text-rosewood italic">Belong</span>
          </h1>
          <p className="text-stone/60 mb-10">
            Usuarios, mensajes de contacto y suscriptores. Solo tú puedes ver esta página.
          </p>

          <AdminDashboard users={users} messages={messages} subscribers={subscribers} />
        </div>
      </div>
    </Layout>
  );
}
