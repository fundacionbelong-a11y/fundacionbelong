'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const spaces = [
  { icon: '💬', title: 'Género y Sociedad', desc: 'Debates sobre brechas de género, políticas públicas, noticias y tendencias que nos afectan a tod@s.', members: '120+ miembros', active: '5 conversaciones hoy' },
  { icon: '🌱', title: 'Liderazgo y Carrera', desc: 'Conversaciones sobre trayectorias profesionales, negociación, visibilidad y liderazgo con propósito.', members: '85+ miembros', active: '3 conversaciones hoy' },
  { icon: '💻', title: 'Entornos Digitales Seguros', desc: 'Privacidad, bienestar digital y cómo construir espacios tecnológicos más seguros e inclusivos.', members: '60+ miembros', active: '2 conversaciones hoy' },
  { icon: '👩‍👧', title: 'Maternidad y Trabajo', desc: 'Vivencias, estrategias y apoyo mutuo para navegar la doble jornada y construir trayectorias con flexibilidad.', members: '95+ miembros', active: '4 conversaciones hoy' },
  { icon: '🎓', title: 'Niñas y Jóvenes en STEM', desc: 'Para padres, docentes y jóvenes que quieren explorar carreras en ciencia y tecnología sin límites de género.', members: '70+ miembros', active: '2 conversaciones hoy' },
  { icon: '🤝', title: 'Aliad@s', desc: 'Para ayudarnos y compartir historias. Un espacio para construir juntos, aprender y ser parte activa del cambio.', members: '50+ miembros', active: '3 conversaciones hoy' },
];

const events = [
  { name: 'Café Belong', freq: 'Mensual', desc: 'Conversación abierta virtual con Pamela y la comunidad. Un espacio para preguntar, compartir y conectar.', time: 'Primer jueves del mes, 7pm COL' },
  { name: 'Data Sunday', freq: 'Quincenal', desc: 'Episodio de contenido académico. Un dato, un estudio, una reflexión sobre género y pertenencia.', time: 'Domingos cada 2 semanas, 10am COL' },
  { name: 'Espejo de Liderazgo', freq: 'Mensual', desc: 'Entrevista a una mujer líder que comparte su trayectoria, aprendizajes y consejos.', time: 'Tercer miércoles del mes, 6pm COL' },
];

const stories = [
  { name: 'Ana M.', role: 'Ingeniera de software', text: 'Encontré en Belong un espacio donde hablar de la doble jornada sin culpa. Aquí me siento escuchada.' },
  { name: 'Carlos R.', role: 'Gerente de RRHH', text: 'Como aliado, aprendí que la inclusión no es un programa, es una práctica diaria. Belong me dio las herramientas.' },
  { name: 'Mariana P.', role: 'Docente', text: 'Los recursos sobre niñas en STEM me cambiaron la forma de enseñar. Ahora mis estudiantes sueñan en grande.' },
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

        {/* Spaces content */}
        {activeTab === 'spaces' && (
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
                <div className="flex items-center justify-between text-xs text-stone/50">
                  <span>{space.members}</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    {space.active}
                  </span>
                </div>
                <button className="mt-4 w-full py-2.5 bg-white border border-gold/20 rounded-full text-sm text-charcoal hover:bg-gold hover:text-white transition-all">
                  Unirme
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Events content */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gold/10 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="md:w-48 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-3">
                    <span className="text-2xl">📅</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                    {event.freq}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-charcoal mb-2">{event.name}</h3>
                  <p className="text-stone text-sm leading-relaxed mb-3">{event.desc}</p>
                  <p className="text-xs text-rosewood">{event.time}</p>
                </div>
                <button className="shrink-0 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-colors">
                  Recordarme
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Stories content */}
        {activeTab === 'stories' && (
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-pale-rosewood rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-serif">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{story.name}</p>
                    <p className="text-xs text-stone/60">{story.role}</p>
                  </div>
                </div>
                <p className="text-stone text-sm leading-relaxed italic">
                  "{story.text}"
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-charcoal rounded-2xl p-10 md:p-16 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-10">
            ¿Cómo funciona la <span className="text-rosewood italic">Comunidad Belong</span>?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Únete', desc: 'Elige tu plataforma y espacio temático. Registro simple.' },
              { step: '2', title: 'Participa', desc: 'Comparte historias, haz preguntas, responde a otr@s.' },
              { step: '3', title: 'Conecta', desc: 'Encuentra pares, mentoras y aliados en tu área.' },
              { step: '4', title: 'Crece', desc: 'Aprende de expertas y de la experiencia colectiva.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-serif">{item.step}</span>
                </div>
                <h4 className="font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter */}
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
            Una vez al mes: el dato de género que debes conocer, un recurso educativo, una voz de la comunidad y las próximas actividades. Sin spam. Solo lo que importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-5 py-3 rounded-full border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm"
            />
            <button className="px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-colors">
              Suscribirme
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
