'use client';

import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#f4de53]/20 via-[#c0941a]/10 to-[#b07908]/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          ¿List@ para construir una cultura donde el talento se quede y lidere?
        </h2>
        <a
          href="mailto:fundacionbelong@gmail.com?subject=Agenda%20una%20conversación"
          className="inline-block px-10 py-5 bg-[#c18e98] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#c18e98]/30 transition-all duration-300 hover:-translate-y-1 text-lg"
        >
          Agenda una conversación
        </a>
        <div className="mt-8 text-sm text-gray-500">
          <span>fundacionbelong@gmail.com</span>
          <span className="mx-3">|</span>
          <span>+57 317 513 4506</span>
          <span className="mx-3">|</span>
          <span>@pamelalopez.belong</span>
        </div>
      </div>
    </section>
  );
}
