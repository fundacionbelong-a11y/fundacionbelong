'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  'Assessment',
  'Charla',
  'Talleres',
  'Consultoría',
];

const services = [
  {
    title: 'Assessment de Paridad — Radar BELONG®',
    desc: 'El punto de partida de cualquier proceso de transformación. Evaluamos la cultura organizacional en las 6 dimensiones del BELONG® Framework.',
    features: ['Encuesta a colaboradores y liderazgo', 'Análisis cuali-cuantitativo', 'Entrevistas con grupos focales', 'Informe ejecutivo con hoja de ruta'],
  },
  {
    title: 'Charla: Talento que se queda',
    desc: 'Conectamos datos, vivencias y herramientas para comprender por qué el talento femenino se va — y qué prácticas crean culturas donde puede quedarse.',
    features: ['Claridad sobre la realidad que viven las mujeres', 'Herramientas para revisar la cultura', 'El marco BELONG® en acción'],
  },
  {
    title: 'Talleres de transformación cultural',
    desc: 'Sesiones prácticas de mayor profundidad para equipos que quieren construir habilidades concretas.',
    features: ['Taller para líderes: sesgos inconscientes', 'Taller para equipos: conversaciones que transforman', 'Taller RRHH: políticas con lente de género', 'Taller educativo: escuela inclusiva'],
  },
  {
    title: 'Consultoría de Transformación Cultural',
    desc: 'Acompañamiento estratégico de mediano plazo para cambios profundos y sostenibles en la cultura de género.',
    features: ['Revisión de políticas de RRHH', 'Programas de mentoring y patrocinio', 'Acompañamiento a comités de diversidad', 'Tablero de métricas de paridad'],
  },
];

export default function ServiciosMarthaSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicios" className="py-24 md:py-40 bg-soft-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Consultoría</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            Talento que se <span className="text-rosewood italic">queda</span>
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Team */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { name: 'Martha Cano', role: 'Academia e investigación', desc: 'Doctorados en equidad de género organizacional. Docencia universitaria. Investigación aplicada en brechas de género y cambio cultural.', img: 'martha-cano.jpg', color: 'rosewood' },
            { name: 'Pamela López', role: 'Corporativo e industria tech', desc: 'Líder de inclusión de género en AWS. Directora General MujeresTIC.org. 15+ años de experiencia en IBM y AWS.', img: 'pamela-lopez.jpg', color: 'gold' },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gold/10 card-lift"
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-full bg-${person.color}/10 flex items-center justify-center shrink-0 overflow-hidden`}>
                  {person.img ? (
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className={`text-2xl font-serif text-${person.color}`}>{person.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-charcoal">{person.name}</h3>
                  <p className={`text-sm text-${person.color} mb-3`}>{person.role}</p>
                  <p className="text-stone text-sm leading-relaxed">{person.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-stone hover:bg-gold/10 border border-gold/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gold/10"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl font-serif text-gradient-gold">0{activeTab + 1}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal">{services[activeTab].title}</h3>
              </div>
            </div>
            
            <p className="text-stone leading-relaxed mb-8 max-w-3xl">{services[activeTab].desc}</p>
            
            <ul className="space-y-3 mb-8">
              {services[activeTab].features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone">
                  <span className="text-gold mt-1">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:fundacionbelong@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full hover:bg-rosewood transition-colors text-sm font-medium"
            >
              Solicitar servicio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
