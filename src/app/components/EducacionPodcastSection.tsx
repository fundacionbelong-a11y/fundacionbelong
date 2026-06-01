'use client';

import React from 'react';

const episodes = [
  'Cuando el talento se va: historias de mujeres que dejaron el corporativo',
  'La doble jornada: trabajo remunerado y no remunerado en Colombia',
  'Ingeniera, madre y autónoma: cómo navegar el sistema',
  'Los aliados que cambian culturas: historias de personas que actúan',
  'Dejar huella en la era de la IA',
];

export default function EducacionPodcastSection() {
  return (
    <section id="educacion" className="py-20 md:py-32 bg-[#F9F0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#c0941a]">Aprende.</span>{' '}
            <span className="text-[#c18e98]">Infórmate.</span>{' '}
            <span className="text-[#b07908]">Transfórmate.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aquí encontrarás contenido educativo riguroso y accesible sobre género, pertenencia y liderazgo inclusivo. Compartimos investigaciones de fuentes confiables, entrevistas a expertas y recursos para que tú y tu organización puedan actuar con más información y convicción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Banco de conocimiento */}
          <div className="bg-white rounded-2xl p-8 border border-[#c0941a]/20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4de53] to-[#b07908] flex items-center justify-center text-white text-xl mb-6">
              📚
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Banco de conocimiento</h3>
            <p className="text-gray-600 mb-4">Fuentes verificadas, estudios académicos e informes institucionales sobre brecha de género en Colombia y el mundo.</p>
            <div className="flex flex-wrap gap-2">
              {['Salarios', 'Liderazgo', 'Educación', 'Niñez', 'Tecnología'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#FBF5E8] text-[#c0941a] text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* Videos educativos */}
          <div className="bg-white rounded-2xl p-8 border border-[#c0941a]/20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4de53] to-[#b07908] flex items-center justify-center text-white text-xl mb-6">
              🎬
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Videos educativos</h3>
            <p className="text-gray-600">Una selección cuidadosa de contenido audiovisual — producciones propias, charlas, entrevistas y documentales — sobre género, liderazgo y pertenencia.</p>
          </div>
        </div>

        {/* Podcast */}
        <div className="bg-gradient-to-br from-[#c18e98]/10 to-[#F9F0F3] rounded-2xl p-8 md:p-12 border border-[#c18e98]/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>Voces que Pertenecen</h3>
            <p className="text-gray-600">Entrevistas en profundidad con líderes, investigadoras, activistas y personas que han navegado la brecha de género.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FBF5E8] flex items-center justify-center text-[#c0941a] font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700">{episode}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">Próximamente en Spotify y Apple Podcasts</p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-[#1DB954] text-white rounded-full text-sm font-medium opacity-60 cursor-not-allowed">
                🎧 Escuchar en Spotify
              </button>
              <button className="px-6 py-3 bg-[#FA243C] text-white rounded-full text-sm font-medium opacity-60 cursor-not-allowed">
                🎵 Escuchar en Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
