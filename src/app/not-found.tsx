import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe. Vuelve al inicio de Fundación Belong.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <img
        src="/logo-belong.png"
        alt="Fundación Belong"
        className="h-12 w-auto mb-12 opacity-60"
      />

      <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
        Error 404
      </p>

      <h1 className="text-4xl md:text-6xl font-serif font-medium text-charcoal leading-tight mb-6 max-w-xl">
        Esta página no{' '}
        <span className="text-rosewood italic">pertenece</span>{' '}
        aquí
      </h1>

      <div className="w-14 h-0.5 bg-gradient-to-r from-gold/50 via-gold to-gold/50 mx-auto mb-8" />

      <p className="text-stone font-light max-w-md mb-12 leading-relaxed">
        La página que buscas no existe o fue movida. Vuelve al inicio y encuentra lo que necesitas.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="px-8 py-4 bg-charcoal text-white font-medium rounded-full hover:bg-rosewood transition-colors duration-300 text-sm tracking-wide"
        >
          Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="px-8 py-4 border border-charcoal/20 text-charcoal font-medium rounded-full hover:border-gold hover:text-gold transition-all duration-300 text-sm tracking-wide"
        >
          Contactarnos
        </Link>
      </div>

      <p className="mt-16 text-xs text-stone/40 font-serif italic">
        Be. BeU. Belong.
      </p>
    </div>
  );
}
