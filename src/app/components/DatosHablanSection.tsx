'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '+8%', label: 'PIB', desc: 'Colombia crecería un 8% adicional al reducir a la mitad la brecha salarial de género', source: 'Banco de la República' },
  { number: '13%', label: 'Brecha salarial', desc: 'diferencia salarial inexplicable entre hombres y mujeres con igual formación y cargo', source: 'Banco de la República' },
  { number: '31.4%', label: 'Sin ingresos', desc: 'de mujeres de 60 años o más en Colombia no tienen ingreso alguno', source: 'Banco de la República' },
  { number: '+15%', label: 'Rentabilidad', desc: 'mayor rentabilidad en empresas con al menos 30% de mujeres en liderazgo', source: 'McKinsey Global Institute' },
  { number: '226%', label: 'Retornos', desc: 'superiores al S&P 500 en empresas Fortune 1000 con CEO mujer', source: 'Fortune 1000' },
  { number: '25.6%', label: 'Juntas directivas', desc: 'participación femenina en juntas directivas en Colombia', source: 'Banco de la República' },
];

export default function DatosHablanSection() {
  return (
    <section id="datos" className="py-24 md:py-40 bg-soft-cream relative overflow-hidden">
      {/* Decorative large number */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] font-serif text-gold/[0.03] select-none leading-none">
        %
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Evidencia</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            Los <span className="text-rosewood italic">datos</span> hablan
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-stone mt-6 max-w-2xl mx-auto font-light">
            La brecha de género es un freno al crecimiento de las organizaciones y la economía. Los datos de Colombia son contundentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-lift bg-white rounded-2xl p-8 border border-gold/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="text-5xl md:text-6xl font-serif text-gradient-gold mb-3 leading-none">
                  {stat.number}
                </div>
                <p className="text-sm font-medium text-rosewood uppercase tracking-wider mb-3">{stat.label}</p>
                <p className="text-stone text-sm leading-relaxed mb-4">{stat.desc}</p>
                <p className="text-xs text-stone/50">{stat.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
