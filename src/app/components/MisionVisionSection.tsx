'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MisionVisionSection() {
  return (
    <section id="mision-vision" className="py-24 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Nuestro propósito</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-8">Misión</h2>
            <p className="text-stone leading-relaxed font-light text-lg">
              Acompañar comunidades, organizaciones e individuos en la construcción de culturas de pertenencia genuina, donde cada persona pueda ser, crecer y liderar con equidad de oportunidades, independientemente de su género.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:text-right"
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Hacia dónde vamos</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-8">Visión</h2>
            <p className="text-stone leading-relaxed font-light text-lg">
              Ser referente en Colombia y Latinoamérica en metodologías de transformación cultural con enfoque de género, reconocida por el impacto medible que genera en personas, organizaciones y comunidades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
