'use client';

import React from 'react';
import Giscus from '@giscus/react';

// IDs resueltos para fundacionbelong-a11y/fundacionbelong (discussions: General)
const GISCUS_REPO = 'fundacionbelong-a11y/fundacionbelong';
const GISCUS_REPO_ID = 'R_kgDOSosyKA';
const GISCUS_CATEGORY = 'General';
const GISCUS_CATEGORY_ID = 'DIC_kwDOSosyKM4DKGFY';

export default function GiscusComments() {
  return (
    <div className="mt-12 pt-8 border-t border-gold/10">
      <h2 className="text-lg font-semibold text-charcoal mb-6">Comentarios</h2>
      <Giscus
        repo={GISCUS_REPO}
        repoId={GISCUS_REPO_ID}
        category={GISCUS_CATEGORY}
        categoryId={GISCUS_CATEGORY_ID}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="es"
        loading="lazy"
      />
    </div>
  );
}
