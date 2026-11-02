'use client';

import { useEffect, useRef } from 'react';

/**
 * Comentarios vía Giscus (GitHub Discussions) — repo público de Fundación Belong.
 * term = identificador único del artículo (slug del blog legado o "seccion/slug"),
 * así cada artículo tiene su propio hilo de discusión sin depender de la URL.
 * Implementación directa con el cliente oficial de giscus.app (sin wrapper).
 */
export default function GiscusComments({ term }: { term: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'fundacionbelong-a11y/fundacionbelong');
    script.setAttribute('data-repo-id', 'R_kgDOSosyKA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOSosyKM4DKGFY');
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', term);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'es');
    script.setAttribute('data-loading', 'lazy');

    container.innerHTML = '';
    container.appendChild(script);
  }, [term]);

  return (
    <section className="mt-12 pt-8 border-t border-gold/10" aria-label="Comentarios">
      <h2 className="text-lg font-semibold text-charcoal mb-2">Comentarios</h2>
      <p className="text-xs text-stone/50 mb-6">
        Participa con tu cuenta de GitHub. Los comentarios se moderan.
      </p>
      <div ref={containerRef} className="giscus" />
    </section>
  );
}
