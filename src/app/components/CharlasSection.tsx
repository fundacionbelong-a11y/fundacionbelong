'use client';

import React from 'react';
import { motion } from 'framer-motion';

const charlas = [
  {
    num: '01',
    title: 'Dejar Huella',
    subtitle: 'Marca personal, aliados e IA como impulso para crecer con propósito',
    desc: 'Una conferencia de 45 minutos que conecta tres ejes fundamentales del crecimiento profesional: marca personal auténtica, colaboración estratégica y uso inteligente de la inteligencia artificial.',
    format: 'Conferencia 45 min · Presencial o virtual',
    impact: 'Mujeres más seguras, visibles y conectadas',
  },
  {
    num: '02',
    title: 'La Importancia de los Aliados',
    subtitle: 'Cómo los aliados transforman las culturas organizacionales',
    desc: 'Una conferencia sobre uno de los motores más poderosos del cambio cultural: las personas que eligen actuar como aliadas, independientemente de su posición o género. Basada en la experiencia liderando Men as Allies en AWS Latam.',
    format: 'Conferencia 45-60 min · Presencial o virtual',
    audience: 'Equipos mixtos, comités de diversidad, liderazgo ejecutivo',
  },
  {
    num: '03',
    title: 'Guía de Género para Padres',
    subtitle: 'Crianza y educación con perspectiva de género',
    desc: 'Una charla diseñada para padres, madres, docentes y orientadores que quieren acompañar a niñas y niños en el desarrollo de una identidad libre de estereotipos, con equidad de oportunidades desde los primeros años de vida.',
    format: 'Charla 45-60 min o Taller medio día',
    audience: 'Colegios, universidades, jardines infantiles, programas de padres',
  },
];

export default function CharlasSection() {
  return (
    <section id="charlas" className="py-24 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Servicios</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            Charlas que <span className="text-gold">inspiran</span> y <span className="text-rosewood italic">activan</span>
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-stone mt-6 max-w-2xl mx-auto font-light">
            Experiencias de aprendizaje diseñadas para dejar huella. Basadas en 15 años de experiencia en tecnología global.
          </p>
        </motion.div>

        <div className="space-y-12">
          {charlas.map((charla, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group bg-cream rounded-2xl p-8 md:p-12 border border-gold/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="text-6xl md:text-7xl font-serif text-gradient-gold shrink-0 leading-none opacity-80">
                  {charla.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
                    {charla.title}
                  </h3>
                  <p className="text-rosewood italic mb-4">{charla.subtitle}</p>
                  <p className="text-stone leading-relaxed mb-6">{charla.desc}</p>
                  
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-4 py-2 bg-white rounded-full border border-gold/20 text-stone">
                      {charla.format}
                    </span>
                    {charla.impact && (
                      <span className="px-4 py-2 bg-white rounded-full border border-rosewood/20 text-rosewood">
                        Impacto: {charla.impact}
                      </span>
                    )}
                    {charla.audience && (
                      <span className="px-4 py-2 bg-white rounded-full border border-stone/10 text-stone/70">
                        {charla.audience}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={`mailto:fundacionbelong@gmail.com?subject=Solicitud%20de%20charla%20-%20${encodeURIComponent(charla.title)}`}
                      className="inline-flex items-center gap-2 text-gold hover:text-dark-gold transition-colors text-sm font-medium"
                    >
                      Solicitar esta charla
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
