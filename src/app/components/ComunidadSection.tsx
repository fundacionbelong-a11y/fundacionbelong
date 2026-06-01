'use client';

import React from 'react';

const spaces = [
  { icon: '💬', title: 'Género y Sociedad', desc: 'Debates sobre brechas de género, políticas públicas, noticias y tendencias que nos afectan a tod@s.' },
  { icon: '🌱', title: 'Liderazgo y Carrera', desc: 'Conversaciones sobre trayectorias profesionales, negociación, visibilidad y liderazgo con propósito.' },
  { icon: '💻', title: 'Entornos Digitales Seguros', desc: 'Privacidad, bienestar digital y cómo construir espacios tecnológicos más seguros e inclusivos.' },
  { icon: '👩‍👧', title: 'Maternidad y Trabajo', desc: 'Vivencias, estrategias y apoyo mutuo para navegar la doble jornada y construir trayectorias con flexibilidad.' },
  { icon: '🎓', title: 'Niñas y Jóvenes en STEM', desc: 'Para padres, docentes y jóvenes que quieren explorar carreras en ciencia y tecnología sin límites de género.' },
  { icon: '🤝', title: 'Aliad@s', desc: 'Para ayudarnos y compartir historias. Un espacio para construir juntos, aprender y ser parte activa del cambio.' },
];

export default function ComunidadSection() {
  return (
    <section id="comunidad" className="py-20 md:py-32 bg-[#F9F0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Aquí <span className="text-[#c18e98]">perteneces</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una comunidad para compartir, crecer y no estar sol@. La transformación cultural ocurre entre personas que deciden conversar, cuestionarse y construir juntas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-[#c18e98]/20 hover:shadow-xl hover:shadow-[#c18e98]/10 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{space.icon}</div>
              <h3 className="text-xl font-semibold text-[#c18e98] mb-3">{space.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{space.desc}</p>
              <button className="mt-6 px-4 py-2 border border-[#c0941a] text-[#c0941a] rounded-full text-sm font-medium hover:bg-[#c0941a] hover:text-white transition-all opacity-60 cursor-not-allowed">
                Próximamente
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-[#c18e98]/10 to-[#F9F0F3] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#c18e98] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Recibe Belong en tu bandeja de entrada
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Una vez al mes: el dato de género que debes conocer, un recurso educativo, una voz de la comunidad y las próximas actividades. Sin spam. Solo lo que importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-3 rounded-full border border-[#c18e98]/30 focus:outline-none focus:border-[#c18e98] bg-white"
            />
            <button className="px-6 py-3 bg-[#c0941a] text-white font-medium rounded-full hover:bg-[#b07908] transition-colors opacity-60 cursor-not-allowed">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
