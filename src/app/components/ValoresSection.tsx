'use client';

import React from 'react';

const valores = [
  { icon: '✦', title: 'Pertenencia', desc: 'Creemos que pertenecer es una necesidad humana fundamental. Todo lo que hacemos parte de construirla.' },
  { icon: '◈', title: 'Evidencia', desc: 'Trabajamos con datos, metodologías probadas e investigación académica rigurosa.' },
  { icon: '◉', title: 'Humanidad', desc: 'La transformación cultural empieza en las personas. Nuestro enfoque es siempre profundamente humano.' },
  { icon: '◆', title: 'Impacto medible', desc: 'Diseñamos procesos con métricas y seguimiento porque los resultados importan.' },
  { icon: '◇', title: 'Equidad', desc: 'El punto de partida importa. Construimos desde ahí.' },
];

export default function ValoresSection() {
  return (
    <section id="valores" className="py-20 md:py-32 bg-[#FBF5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nuestros <span className="text-[#c0941a]">valores</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((valor, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 border border-[#c0941a]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-3xl mb-4 bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] bg-clip-text text-transparent">
                {valor.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#c18e98] mb-3">{valor.title}</h3>
              <p className="text-gray-600 leading-relaxed">{valor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
