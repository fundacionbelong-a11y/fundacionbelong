'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const spaces = [
  { icon: '💬', title: 'Género y Sociedad', desc: 'Debates sobre brechas de género, políticas públicas, noticias y tendencias que nos afectan a tod@s.' },
  { icon: '🌱', title: 'Liderazgo y Carrera', desc: 'Conversaciones sobre trayectorias profesionales, negociación, visibilidad y liderazgo con propósito.' },
  { icon: '💻', title: 'Entornos Digitales Seguros', desc: 'Privacidad, bienestar digital y cómo construir espacios tecnológicos más seguros e inclusivos.' },
  { icon: '👩‍👧', title: 'Maternidad y Trabajo', desc: 'Vivencias, estrategias y apoyo mutuo para navegar la doble jornada y construir trayectorias con flexibilidad.' },
  { icon: '🎓', title: 'Niñas y Jóvenes en STEM', desc: 'Para padres, docentes y jóvenes que quieren explorar carreras en ciencia y tecnología sin límites de género.' },
  { icon: '🤝', title: 'Aliad@s', desc: 'Para ayudarnos y compartir historias. Un espacio para construir juntos, aprender y ser parte activa del cambio.' },
];

export default function ComunidadSection() {
  const [activeTab, setActiveTab] = useState<'spaces' | 'events' | 'stories'>('spaces');

  return (
    <section id="comunidad" className="py-24 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Comunidad</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            Aquí <span className="text-rosewood italic">perteneces</span>.
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-stone mt-6 max-w-2xl mx-auto font-light">
            Una comunidad para compartir, crecer y no estar sol@. La transformación cultural ocurre entre personas que deciden conversar, cuestionarse y construir juntas.
          </p>
        </motion.div>

        {/* Tabs navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { key: 'spaces' as const, label: 'Espacios temáticos' },
            { key: 'events' as const, label: 'Eventos' },
            { key: 'stories' as const, label: 'Historias' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-stone border border-gold/20 hover:bg-gold/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Spaces content — Próximamente */}
        {activeTab === 'spaces' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaces.map((space, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-lift bg-cream rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all"
                >
                  <div className="text-3xl mb-4">{space.icon}</div>
                  <h3 className="text-lg font-serif text-charcoal mb-2">{space.title}</h3>
                  <p className="text-stone text-sm leading-relaxed mb-4">{space.desc}</p>
                  <div className="mt-4 p-4 bg-gold/5 rounded-xl border border-gold/10">
                    <p className="text-xs text-gold font-medium mb-2">🚧 Próximamente</p>
                    <p className="text-xs text-stone/70">Estamos construyendo esta comunidad. ¿Te interesa ser de las primeras?</p>
                  </div>
                  <button className="mt-4 w-full py-2.5 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-all" onClick={() => window.location.href='mailto:fundacionbelong@gmail.com?subject=Interés%20en%20comunidad:%20'+encodeURIComponent(space.title)}>
                    Avísame cuando esté listo
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Events content — Próximamente */}
        {activeTab === 'events' && (
          <div className="bg-cream rounded-2xl p-12 md:p-16 text-center border border-gold/10">
            <div className="text-5xl mb-6">📅</div>
            <h3 className="text-2xl font-serif text-charcoal mb-4">Eventos en construcción</h3>
            <p className="text-stone max-w-xl mx-auto mb-6">
              Estamos diseñando encuentros presenciales y virtuales para la comunidad Belong. 
              Pronto compartiremos fechas de talleres, conversatorios y espacios de conexión.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="p-4 bg-white rounded-xl border border-gold/10">
                <div className="text-2xl mb-2">☕</div>
                <p className="text-sm font-medium text-charcoal">Café Belong</p>
                <p className="text-xs text-stone/60">Conversaciones abiertas</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gold/10">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm font-medium text-charcoal">Data Sunday</p>
                <p className="text-xs text-stone/60">Un dato, un estudio</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gold/10">
                <div className="text-2xl mb-2">🪞</div>
                <p className="text-sm font-medium text-charcoal">Espejo de Liderazgo</p>
                <p className="text-xs text-stone/60">Mujeres líderes</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-colors" onClick={() => window.location.href='mailto:fundacionbelong@gmail.com?subject=Notifícame%20de%20eventos%20Belong'}>
              Notifícame de eventos
            </button>
          </div>
        )}

        {/* Stories content — Próximamente */}
        {activeTab === 'stories' && (
          <div className="bg-cream rounded-2xl p-12 md:p-16 text-center border border-gold/10">
            <div className="text-5xl mb-6">💬</div>
            <h3 className="text-2xl font-serif text-charcoal mb-4">Historias de la comunidad</h3>
            <p className="text-stone max-w-xl mx-auto mb-8">
              Queremos que este espacio sea real, con testimonios de personas que han 
              vivido la transformación. ¿Tienes una historia que contar?
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { emoji: '💪', title: 'Empoderamiento', desc: 'Cómo encontré mi voz en el trabajo' },
                { emoji: '🤝', title: 'Alianza', desc: 'Aprendí a ser un aliado genuino' },
                { emoji: '👩‍👧', title: 'Transformación', desc: 'Cambié la forma de enseñar STEM' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gold/10 border-dashed">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <p className="text-sm font-medium text-charcoal">{item.title}</p>
                  <p className="text-xs text-stone/60">{item.desc}</p>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-colors" onClick={() => window.location.href='mailto:fundacionbelong@gmail.com?subject=Quiero%20compartir%20mi%20historia%20en%20Belong'}>
              Compartir mi historia
            </button>
          </div>
        )}

        {/* How it works — Simplified, honest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-charcoal rounded-2xl p-10 md:p-16 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-4">
            La <span className="text-rosewood italic">Comunidad Belong</span> está naciendo
          </h3>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-10">
            Estamos construyendo un espacio donde puedas conectar, compartir y crecer. 
            Mientras tanto, síguenos en nuestras redes para no perderte nada.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📸</span>
              </div>
              <h4 className="font-medium mb-2">Instagram</h4>
              <p className="text-sm text-white/60">@pamelalopez.belong</p>
              <a 
                href="https://www.instagram.com/pamelalopez.belong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-gold hover:text-charcoal transition-all"
              >
                Seguir
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💼</span>
              </div>
              <h4 className="font-medium mb-2">LinkedIn</h4>
              <p className="text-sm text-white/60">Pamela López</p>
              <a 
                href="https://www.linkedin.com/in/pamelalopezz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-gold hover:text-charcoal transition-all"
              >
                Conectar
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎙️</span>
              </div>
              <h4 className="font-medium mb-2">Spotify</h4>
              <p className="text-sm text-white/60">Voces que Pertenecen</p>
              <a 
                href="https://open.spotify.com/episode/34ZxHT1N8XT4Pt56eUHCLF"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-gold hover:text-charcoal transition-all"
              >
                Escuchar
              </a>
            </div>
          </div>
        </motion.div>

        {/* Newsletter — Próximamente */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-pale-rosewood rounded-2xl p-10 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Recibe Belong en tu <span className="text-rosewood italic">bandeja de entrada</span>
          </h3>
          <p className="text-stone max-w-xl mx-auto mb-8">
            Una vez al mes: el dato de género que debes conocer, un recurso educativo, 
            una voz de la comunidad y las próximas actividades. Sin spam. Solo lo que importa.
          </p>
          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl border border-gold/10">
            <p className="text-gold text-sm font-medium mb-2">🚧 Próximamente</p>
            <p className="text-xs text-stone/70 mb-4">
              Estamos preparando el newsletter. Déjanos tu correo y serás de las primeras en recibirlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-5 py-3 rounded-full border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm flex-1"
              />
              <button className="px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-colors" onClick={() => window.location.href='mailto:fundacionbelong@gmail.com?subject=Suscribirme%20al%20newsletter%20Belong'}>
                Notifícame
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
