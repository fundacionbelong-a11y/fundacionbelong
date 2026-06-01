'use client';

import React from 'react';

const stats = [
  { number: '+8%', label: 'PIB', desc: 'crecería Colombia al reducir a la mitad la brecha salarial de género', source: 'Banco de la República, 2026' },
  { number: '13%', label: 'brecha salarial', desc: 'de brecha salarial inexplicable entre hombres y mujeres con igual formación y cargo', source: 'Banco de la República, 2026' },
  { number: '31.4%', label: 'sin ingreso', desc: 'de mujeres de 60 años o más no tienen ningún ingreso en Colombia', source: 'Banco de la República, 2026' },
  { number: '+15%', label: 'rentabilidad', desc: 'más rentabilidad con 30% de mujeres en liderazgo (22.000 empresas, 91 países)', source: 'McKinsey Global Institute' },
  { number: '226%', label: 'retornos', desc: 'retornos superiores al S&P 500 en empresas Fortune 1000 lideradas por mujeres', source: 'Fortune 1000' },
  { number: '25.6%', label: 'juntas', desc: 'de mujeres en juntas directivas en Colombia', source: 'Banco de la República, 2026' },
];

export default function DatosHablanSection() {
  return (
    <section id="datos" className="py-20 md:py-32 bg-[#FBF5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Los <span className="text-[#c0941a]">datos</span> hablan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La brecha de género es un freno al crecimiento de las organizaciones y la economía. Los datos de Colombia son contundentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-[#c0941a]/20 hover:shadow-xl hover:shadow-[#c0941a]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-[#c18e98] uppercase tracking-wide mb-3">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {stat.desc}
              </p>
              <p className="text-xs text-gray-400 italic">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          Fuentes: Banco de la República de Colombia, ESPE Núm. 111 (marzo 2026); McKinsey Global Institute; DANE Gran Encuesta Integrada de Hogares.
        </p>
      </div>
    </section>
  );
}
