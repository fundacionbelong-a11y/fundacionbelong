'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  { letter: 'E', title: 'Educamos', desc: 'Creamos y compartimos conocimiento sobre género, pertenencia e inclusión.' },
  { letter: 'T', title: 'Transformamos', desc: 'Acompañamos organizaciones, familias y personas con metodologías probadas para cerrar brechas culturales y construir entornos donde todas puedan pertenecer.' },
  { letter: 'C', title: 'Conectamos', desc: 'Construimos comunidad donde las personas encuentran pares, inspiración y soporte.' },
];

export default function QueEsBelongSection() {
  return (
    <section id="que-es" className="py-24 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">¿Qué es Belong?</p>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-8">
              Una fundación colombiana dedicada a construir{' '}
              <span className="text-rosewood italic">entornos inclusivos</span>
            </h2>
            <p className="text-stone text-lg leading-relaxed mb-10 font-light">
              Belong es una fundación colombiana fundada en Bogotá, dedicada a construir entornos donde todas las personas — mujeres, hombres, niñas y jóvenes — puedan desarrollar su potencial con equidad de oportunidades y un sentido genuino de pertenencia.
            </p>
            
            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-light-gold/30 to-gold/30 flex items-center justify-center text-gold font-serif text-xl shrink-0">
                    {pillar.letter}
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">{pillar.title}</h3>
                    <p className="text-stone text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-gold/10">
              <p className="text-rosewood font-serif text-2xl italic">
                "Be. BeU. Belong."
              </p>
              <p className="text-stone/60 text-sm mt-1">Ser. Ser tú. Pertenecer.</p>
            </div>
          </motion.div>
          
          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-pale-rosewood via-white to-cream border border-gold/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="mb-8">
                  <img src="/fundacionbelong/logo-belong.png" alt="Belong" className="w-24 opacity-40 mx-auto" />
                </div>
                <div className="space-y-2 mb-8">
                  <p className="text-4xl md:text-5xl font-serif text-charcoal/20">Be.</p>
                  <p className="text-4xl md:text-5xl font-serif text-gold/40">BeU.</p>
                  <p className="text-4xl md:text-5xl font-serif text-rosewood/40">Belong.</p>
                </div>
                <p className="text-stone/40 text-sm font-light tracking-wide">Ser. Ser tú. Pertenecer.</p>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-2 justify-center">
                    {['E', 'T', 'C'].map(l => (
                      <span key={l} className="w-8 h-8 rounded-full bg-gradient-to-br from-light-gold/30 to-gold/30 flex items-center justify-center text-gold font-serif text-sm">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-rosewood/10 rounded-full blur-2xl" />
            </div>
            
            {/* Stats mini card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-xl p-6 shadow-xl shadow-charcoal/5 border border-gold/10">
              <p className="text-3xl font-serif text-gold">15+</p>
              <p className="text-xs text-stone mt-1">años de experiencia<br/>en tecnología global</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
