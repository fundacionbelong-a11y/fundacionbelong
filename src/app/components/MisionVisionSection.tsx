'use client';

import React from 'react';

export default function MisionVisionSection() {
  return (
    <section id="mision-vision" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c0941a] to-transparent" />
          
          {/* Mission */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <svg className="w-8 h-8 text-[#c0941a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Misión</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acompañar comunidades, organizaciones e individuos en la construcción de culturas de pertenencia genuina, donde cada persona pueda ser, crecer y liderar con equidad de oportunidades, independientemente de su género.
            </p>
          </div>
          
          {/* Vision */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Visión</h3>
              <svg className="w-8 h-8 text-[#c0941a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ser referente en Colombia y Latinoamérica en metodologías de transformación cultural con enfoque de género, reconocida por el impacto medible que genera en personas, organizaciones y comunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
