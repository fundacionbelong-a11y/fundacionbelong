'use client';

import React from 'react';

export default function QueEsBelongSection() {
  return (
    <section id="que-es" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              ¿Qué es <span className="text-[#c18e98]">Belong</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Belong es una fundación colombiana fundada en Bogotá, dedicada a construir entornos donde todas las personas — mujeres, hombres, niñas y jóvenes — puedan desarrollar su potencial con equidad de oportunidades y un sentido genuino de pertenencia.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4de53] to-[#b07908] flex items-center justify-center text-white font-bold shrink-0">
                  E
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Educamos</h3>
                  <p className="text-gray-600">Creamos y compartimos conocimiento sobre género, pertenencia e inclusión.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4de53] to-[#b07908] flex items-center justify-center text-white font-bold shrink-0">
                  T
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Transformamos</h3>
                  <p className="text-gray-600">Acompañamos organizaciones con metodologías probadas para cerrar brechas culturales.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4de53] to-[#b07908] flex items-center justify-center text-white font-bold shrink-0">
                  C
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Conectamos</h3>
                  <p className="text-gray-600">Construimos comunidad donde las personas encuentran pares, inspiración y soporte.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-[#F9F0F3] rounded-2xl border-l-4 border-[#c18e98]">
              <p className="text-xl italic text-[#c18e98] font-medium" style={{ fontFamily: "'Dancing Script', cursive" }}>
                "Be. BeU. Belong. Ser. Ser tú. Pertenecer."
              </p>
            </div>
          </div>
          
          {/* Right: Image placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f4de53]/20 via-[#c0941a]/20 to-[#b07908]/20 animate-float" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#FBF5E8] to-[#F9F0F3] flex items-center justify-center">
                <svg className="w-32 h-32 text-[#c18e98]/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
