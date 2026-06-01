'use client';

import React from 'react';
import { motion } from 'framer-motion';

const valores = [
  { icon: '◆', title: 'Pertenencia', desc: 'Creemos que pertenecer es una necesidad humana fundamental. Todo lo que hacemos parte de construirla.' },
  { icon: '◇', title: 'Evidencia', desc: 'Trabajamos con datos, metodologías probadas e investigación académica rigurosa.' },
  { icon: '◈', title: 'Humanidad', desc: 'La transformación cultural empieza en las personas. Nuestro enfoque es siempre profundamente humano.' },
  { icon: '◉', title: 'Impacto medible', desc: 'Diseñamos procesos con métricas y seguimiento porque los resultados importan.' },
  { icon: '✦', title: 'Equidad', desc: 'El punto de partida importa. Construimos desde ahí.' },
];

export default function ValoresSection() {
  return (
    <section id="valores" className="py-24 md:py-40 bg-soft-rose">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Lo que nos guía</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight">
            Nuestros <span className="text-rosewood italic">valores</span>
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-lift bg-white rounded-2xl p-8 border border-gold/10"
            >
              <div className="text-3xl text-gradient-gold mb-4">{valor.icon}</div>
              <h3 className="text-xl font-serif text-charcoal mb-3">{valor.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{valor.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
