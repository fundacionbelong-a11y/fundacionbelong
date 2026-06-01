'use client';

import React from 'react';
import { motion } from 'framer-motion';

const spaces = [
  { icon: '💬', title: 'Género y Sociedad', desc: 'Debates sobre brechas de género, políticas públicas, noticias y tendencias.' },
  { icon: '🌱', title: 'Liderazgo y Carrera', desc: 'Conversaciones sobre trayectorias profesionales, negociación y liderazgo con propósito.' },
  { icon: '💻', title: 'Entornos Digitales Seguros', desc: 'Privacidad, bienestar digital y espacios tecnológicos inclusivos.' },
  { icon: '👩‍👧', title: 'Maternidad y Trabajo', desc: 'Vivencias, estrategias y apoyo mutuo para navegar la doble jornada.' },
  { icon: '🎓', title: 'Niñas y Jóvenes en STEM', desc: 'Para padres, docentes y jóvenes que exploran ciencia y tecnología.' },
  { icon: '🤝', title: 'Aliad@s', desc: 'Para construir juntos, aprender y ser parte activa del cambio.' },
];

export default function ComunidadSection() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-lift bg-cream rounded-2xl p-8 border border-gold/10"
            >
              <div className="text-3xl mb-4">{space.icon}</div>
              <h3 className="text-lg font-serif text-charcoal mb-2">{space.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{space.desc}</p>
              <span className="mt-4 inline-block text-xs text-stone/50 uppercase tracking-wider">Próximamente</span>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-pale-rosewood rounded-2xl p-10 md:p-16 text-center"
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
