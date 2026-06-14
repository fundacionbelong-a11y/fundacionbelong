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
    desc: 'El punto de partida de cualquier proceso de transformación. Evaluamos la cultura organizacional en las 6 dimensiones del BELONG® Framework, identificando brechas específicas, fortalezas existentes y oportunidades de acción inmediata.',
    features: ['Encuesta a colaboradores y liderazgo', 'Análisis cuali-cuantitativo de datos HR', 'Entrevistas con grupos focales', 'Informe ejecutivo con Radar BELONG® y hoja de ruta'],
  },
  {
    title: 'Charla: Talento que se queda',
    desc: 'Una charla estratégica basada en evidencia académica y experiencia corporativa de primera línea. Conectamos datos, vivencias y herramientas para comprender por qué el talento femenino se va — y qué prácticas crean culturas donde puede quedarse, crecer y liderar.',
    features: ['Claridad sobre la realidad que viven las mujeres', 'Herramientas para revisar la cultura', 'Marco BELONG®: diagnosticar, aprender, actuar, medir'],
  },
  {
    title: 'Talleres de transformación cultural',
    desc: 'Sesiones prácticas de mayor profundidad (desde medio día hasta ciclos de varias semanas) para equipos que quieren construir habilidades concretas.',
    features: ['Taller para líderes: sesgos inconscientes', 'Taller para equipos: conversaciones que transforman', 'Taller RRHH: políticas con lente de género', 'Taller educativo: escuela inclusiva'],
  },
  {
    title: 'Consultoría de Transformación Cultural',
    desc: 'Acompañamiento estratégico de mediano plazo para organizaciones que quieren construir cambios profundos y sostenibles en su cultura de género.',
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

        {/* Team — circular profile cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            { name: 'Pamela López', role: 'Corporativo e industria tech', desc: 'Líder de inclusión de género en AWS. Directora General MujeresTIC.org. 15+ años de experiencia en IBM y AWS.', img: '/pamela-lopez.jpg', color: 'gold', stats: ['15+ años tech', 'AWS, IBM', 'MujeresTIC'] },
            { name: 'Martha Cano', role: 'Academia e investigación', desc: 'Doctorado en equidad de género organizacional. Docencia universitaria. Investigación aplicada en brechas de género y cambio cultural.', img: '/martha-cano.jpg', color: 'rosewood', stats: ['Doctorado', 'Investigación', 'Docencia'] },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gold/10 card-lift"
            >
              <div className="flex items-start gap-6">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${person.color}/20 to-${person.color}/5 flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-${person.color}/20 ring-offset-2`}>
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-charcoal">{person.name}</h3>
                  <p className={`text-sm text-${person.color} mb-2 font-medium`}>{person.role}</p>
                  <p className="text-stone text-sm leading-relaxed mb-4">{person.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.stats.map((stat, j) => (
                      <span key={j} className={`px-3 py-1 bg-${person.color}/10 text-${person.color} text-xs font-medium rounded-full`}>
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Roadmap — Ruta hacia la paridad */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Nuestro proceso</p>
            <h3 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
              Ruta hacia la <span className="text-rosewood italic">paridad</span>
            </h3>
            <p className="text-stone mt-4 max-w-2xl mx-auto">
              Un proceso con método, intención y acompañamiento. Cada organización recorre su propia ruta.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { num: '01', title: 'Test inicial', subtitle: 'de paridad', desc: 'Medición del punto de partida cultural con radar BELONG®', icon: '🎯' },
                { num: '02', title: 'Diagnóstico', subtitle: 'profundo', desc: 'Análisis cuali-cuantitativo de brechas organizacionales', icon: '🔍' },
                { num: '03', title: 'Implementación', subtitle: 'y acompañamiento', desc: 'Herramientas probadas y consultoría continua', icon: '🛠️' },
                { num: '04', title: 'Plan de acción', subtitle: 'con métricas', desc: 'Hoja de ruta con seguimiento y evaluación', icon: '📊' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-dark-gold/20 flex items-center justify-center mb-4 border-2 border-gold/30 relative z-10 bg-white">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif text-sm mb-3">
                      {step.num}
                    </div>
                    <h4 className="text-lg font-serif text-charcoal mb-1">{step.title}</h4>
                    <p className="text-sm text-rosewood mb-2">{step.subtitle}</p>
                    <p className="text-xs text-stone leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Transversal element */}
            <div className="mt-12 flex justify-center">
              <div className="bg-charcoal rounded-2xl px-8 py-4 text-white flex items-center gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-medium text-sm">Charlas transversales</p>
                  <p className="text-xs text-white/60">A lo largo de todo el proceso</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BELONG Framework visual */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Metodología propia</p>
            <h3 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
              El Marco <span className="text-rosewood italic">BELONG</span>®
            </h3>
            <p className="text-stone mt-4 max-w-2xl mx-auto">
              6 dimensiones para diagnosticar, aprender, actuar y medir.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { letter: 'B', word: 'Belonging', desc: 'Sentido de pertenencia en todos los niveles' },
              { letter: 'E', word: 'Environment', desc: 'Entorno físico, cultural y digital seguro e inclusivo' },
              { letter: 'L', word: 'Leadership', desc: 'Liderazgo inclusivo y aprendizaje continuo' },
              { letter: 'O', word: 'Opportunity', desc: 'Acceso equitativo a oportunidades y redes' },
              { letter: 'N', word: 'Navigation', desc: 'Apoyo para navegar realidades personales' },
              { letter: 'G', word: 'Growth', desc: 'Crecimiento sostenible y gobernanza con equidad' },
            ].map((dim, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-5 border border-gold/10 text-center card-lift"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-serif text-gold">{dim.letter}</span>
                </div>
                <h4 className="text-sm font-medium text-rosewood mb-1">{dim.word}</h4>
                <p className="text-xs text-stone leading-relaxed">{dim.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-stone/60 text-sm mt-8">
            Revisar · aprender · actuar · re-evaluar con métricas
          </p>
        </div>

        {/* Service tabs */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Portafolio</p>
            <h3 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
              Servicios <span className="text-rosewood italic">especializados</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
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

        {/* Stats */}
        <div className="bg-cream rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif text-charcoal text-center mb-10">
            Por qué cerrar la brecha es <span className="text-rosewood italic">negocio</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '+15%', label: 'más probabilidad de superar a su industria', source: 'McKinsey MGI 2016' },
              { value: '+15%', label: 'más rentabilidad con 30% mujeres en liderazgo', source: 'McKinsey MGI 2016' },
              { value: '226%', label: 'retornos superiores al S&P 500', source: 'Fortune 1000' },
              { value: '+8%', label: 'PIB para Colombia al reducir brecha salarial', source: 'Banco de la República' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-gold mb-2">{stat.value}</p>
                <p className="text-sm text-stone leading-snug mb-1">{stat.label}</p>
                <p className="text-xs text-stone/50">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
