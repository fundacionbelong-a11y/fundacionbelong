'use client';

import React from 'react';
import { motion } from 'framer-motion';

const episodes = [
  'Cuando el talento se va: historias de mujeres que dejaron el corporativo',
  'La doble jornada: trabajo remunerado y no remunerado en Colombia',
  'Ingeniera, madre y autónoma: cómo navegar el sistema',
  'Los aliados que cambian culturas: historias de personas que actúan',
  'Dejar huella en la era de la IA',
];

export default function EducacionPodcastSection() {
  return (
    <section id="educacion" className="py-24 md:py-40 bg-soft-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Conocimiento</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            <span className="text-rosewood italic">Aprende.</span>{' '}
            <span className="text-gold">Infórmate.</span>{' '}
            <span className="text-dark-gold">Transfórmate.</span>
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-lift bg-white rounded-2xl p-10 border border-gold/10"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-dark-gold/20 flex items-center justify-center text-2xl mb-6">
              📚
            </div>
            <h3 className="text-2xl font-serif text-charcoal mb-4">Banco de conocimiento</h3>
            <p className="text-stone leading-relaxed mb-6">
              Fuentes verificadas, estudios académicos e informes institucionales sobre brecha de género en Colombia y el mundo.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Salarios', 'Liderazgo', 'Educación', 'Niñez', 'Tecnología'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-cream text-gold text-xs font-medium rounded-full border border-gold/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-lift bg-white rounded-2xl p-10 border border-gold/10"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rosewood/20 to-gold/20 flex items-center justify-center text-2xl mb-6">
              🎬
            </div>
            <h3 className="text-2xl font-serif text-charcoal mb-4">Videos educativos</h3>
            <p className="text-stone leading-relaxed">
              Una selección cuidadosa de contenido audiovisual — producciones propias, charlas, entrevistas y documentales sobre género, liderazgo y pertenencia.
            </p>
          </motion.div>
        </div>

        {/* Podcast */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal rounded-2xl p-10 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Podcast</p>
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              <span className="text-rosewood italic">Voces</span> que Pertenecen
            </h3>
            <p className="text-white/60 max-w-xl mb-10 leading-relaxed">
              Entrevistas en profundidad con líderes, investigadoras, activistas y personas que han navegado la brecha de género en sus propias experiencias.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {episodes.map((episode, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-gold/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-serif">
                      {index + 1}
                    </div>
                    <p className="text-sm text-white/80 leading-snug">{episode}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://open.spotify.com/episode/34ZxHT1N8XT4Pt56eUHCLF?si=mwZeou5sQJe5pwyugl31gg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/5 rounded-full text-xs text-white/40 border border-white/10 hover:bg-gold/20 hover:text-white transition-all"
              >
                Escuchar en Spotify
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
