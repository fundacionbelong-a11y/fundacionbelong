'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Comienza hoy
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8">
            ¿List@ para construir una cultura donde{' '}
            <span className="text-rosewood italic">tod@s puedan ser, crecer y pertenecer</span>?
          </h2>
          
          <a
            href="mailto:fundacionbelong@gmail.com?subject=Agenda%20una%20conversación"
            className="btn-premium inline-block px-10 py-5 bg-gradient-to-r from-gold to-dark-gold text-white font-medium rounded-full hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
          >
            Agenda una conversación
          </a>
          
          <div className="mt-10 flex items-center justify-center gap-4 text-sm text-white/50">
            <a href="mailto:fundacionbelong@gmail.com" className="hover:text-gold transition-colors">
              fundacionbelong@gmail.com
            </a>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>+57 317 513 4506</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
