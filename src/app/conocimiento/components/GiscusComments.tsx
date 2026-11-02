'use client';

import Giscus from '@giscus/react';

/**
 * Comentarios vía Giscus (GitHub Discussions) — repo público de Fundación Belong.
 * term = identificador único del artículo (slug del blog legado o "seccion/slug"),
 * así cada artículo tiene su propio hilo de discusión sin depender de la URL.
 */
export default function GiscusComments({ term }: { term: string }) {
  return (
    <section className="mt-12 pt-8 border-t border-gold/10" aria-label="Comentarios">
      <h2 className="text-lg font-semibold text-charcoal mb-2">Comentarios</h2>
      <p className="text-xs text-stone/50 mb-6">
        Participa con tu cuenta de GitHub. Los comentarios se moderan.
      </p>
      <Giscus
        repo="fundacionbelong-a11y/fundacionbelong"
        repoId="R_kgDOSosyKA"
        category="General"
        categoryId="DIC_kwDOSosyKM4DKGFY"
        mapping="specific"
        term={term}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="es"
        loading="lazy"
      />
    </section>
  );
}
