'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Contacto</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            Construyamos junt<span className="text-rosewood italic">@</span>s
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-stone mt-6 max-w-2xl mx-auto font-light">
            ¿Quieres transformar la cultura de tu organización? ¿Como padre, educador o persona quieres sentir que perteneces? ¿Tienes una pregunta? ¿Quieres colaborar? Escríbenos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contacto directo */}
          <div className="bg-cream rounded-2xl p-8 md:p-10 border border-gold/10">
            <h3 className="text-xl font-serif text-charcoal mb-6">Escríbenos</h3>
            <p className="text-stone text-sm leading-relaxed mb-8">
              Responderemos lo antes posible. También puedes contactarnos directamente por correo, teléfono o redes sociales.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:fundacionbelong@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Correo electrónico</p>
                  <p className="text-sm text-stone">fundacionbelong@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+573175134506"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Teléfono</p>
                  <p className="text-sm text-stone">+57 317 513 4506</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/pamelalopez.belong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Instagram</p>
                  <p className="text-sm text-stone">@pamelalopez.belong</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pamelalopezz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">LinkedIn</p>
                  <p className="text-sm text-stone">Pamela López</p>
                </div>
              </a>
            </div>
          </div>

          {/* Info adicional */}
          <div className="space-y-8">
            <div className="bg-pale-rosewood rounded-2xl p-8">
              <h3 className="text-xl font-serif text-charcoal mb-4">
                ¿En qué podemos <span className="text-rosewood italic">ayudarte</span>?
              </h3>
              <div className="space-y-3 text-sm text-stone">
                <p className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">→</span>
                  <span>Charlas y conferencias para tu organización</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">→</span>
                  <span>Consultoría de transformación cultural con enfoque de género</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">→</span>
                  <span>Talleres para equipos de trabajo</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">→</span>
                  <span>Alianzas y colaboraciones</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">→</span>
                  <span>Prensa y medios</span>
                </p>
              </div>
            </div>

            <div className="bg-charcoal rounded-2xl p-8 text-white">
              <h3 className="text-xl font-serif mb-2">
                Recibe Belong en tu <span className="text-rosewood italic">bandeja</span>
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Una vez al mes: el dato de género que debes conocer, un recurso educativo, una voz de la comunidad y las próximas actividades. Sin spam.
              </p>
              <p className="text-xs text-white/40">
                Próximamente. Por ahora, síguenos en redes para estar al día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
