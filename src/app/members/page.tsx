import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Layout from "../components/Layout";

export const metadata = {
  title: "Mi espacio — Fundación Belong",
  robots: { index: false },
};

const comingSoon = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Contenido exclusivo",
    desc: "Artículos, guías y recursos disponibles solo para la comunidad.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Comunidad",
    desc: "Conecta con otras personas que comparten la misión de Belong.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Eventos y charlas",
    desc: "Acceso prioritario a charlas, talleres y eventos de Belong.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Tu perfil",
    desc: "Personaliza tu experiencia y gestiona tu cuenta.",
  },
];

export default async function MembersPage() {
  const session = await auth();
  if (!session) redirect("/entrar");

  const firstName = session.user?.name?.split(" ")[0] ?? "bienvenida/o";

  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* Welcome hero */}
        <div className="bg-charcoal text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Tu espacio</p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Hola, <span className="text-rosewood italic capitalize">{firstName}</span>
            </h1>
            <p className="text-white/60 text-lg font-light max-w-xl">
              Eres parte de la comunidad Belong. Estamos construyendo este espacio para ti.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* Coming soon grid */}
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">En construcción</p>
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-10">
            Lo que viene para la comunidad
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {comingSoon.map((item, i) => (
              <div key={i} className="bg-cream rounded-2xl p-7 border border-gold/10">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-charcoal text-lg mb-2">{item.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-white text-stone/50 text-xs font-medium rounded-full border border-gold/10">
                  Próximamente
                </span>
              </div>
            ))}
          </div>

          {/* Explore public content */}
          <div className="border-t border-gold/10 pt-12">
            <h3 className="text-xl font-serif text-charcoal mb-6">Mientras tanto, explora</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Conocimiento', href: '/conocimiento' },
                { label: 'Impacto', href: '/impacto' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Comunidad', href: '/comunidad' },
                { label: 'Charlas', href: '/charlas' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 bg-white border border-gold/20 text-stone text-sm font-medium rounded-full hover:border-gold hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
