'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #c0941a 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="/logo-belong.png" alt="Fundación Belong" className="h-16 md:h-20 w-auto mx-auto mb-10" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6"
        >
          Fundación Belong
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-charcoal leading-[1.1] mb-8 max-w-4xl mx-auto"
        >
          Construimos con las comunidades para que{' '}
          <span className="text-rosewood italic">tod@s</span>{' '}
          sientan que{' '}
          <span className="text-gradient-gold">pertenecen</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="gold-line mx-auto mb-8"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-stone max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Acompañamos a empresas, instituciones, comunidades, familias y personas en la construcción de culturas de pertenencia, con equidad de género, liderazgo inclusivo y herramientas que generan cambio medible.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/servicios"
            className="btn-premium px-8 py-4 bg-charcoal text-white font-medium rounded-full hover:bg-rosewood transition-colors duration-300 text-sm tracking-wide"
          >
            Conoce nuestros servicios
          </a>
          <a
            href="/contacto"
            className="px-8 py-4 border border-charcoal/30 text-charcoal font-medium rounded-full hover:border-gold hover:text-gold transition-all duration-300 text-sm tracking-wide"
          >
            Contacta con nosotros
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 flex items-center justify-center gap-6 text-xs text-stone/60"
        >
          <a href="mailto:fundacionbelong@gmail.com" className="hover:text-rosewood transition-colors link-underline">fundacionbelong@gmail.com</a>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>+57 317 513 4506</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <a href="https://www.instagram.com/pamelalopez.belong" target="_blank" rel="noopener noreferrer" className="hover:text-rosewood transition-colors">@pamelalopez.belong</a>
        </motion.div>
      </div>
    </section>
  );
}
