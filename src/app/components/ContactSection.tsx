'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// TODO: Replace with your Formspree form ID
// Sign up at https://formspree.io (free for 50 submissions/month)
const FORMSPREE_CONTACT_ID = 'YOUR_CONTACT_FORM_ID';
const FORMSPREE_NEWSLETTER_ID = 'YOUR_NEWSLETTER_FORM_ID';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_NEWSLETTER_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const isPlaceholder = FORMSPREE_CONTACT_ID === 'YOUR_CONTACT_FORM_ID';

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
          {/* Contact Form */}
          <div className="bg-cream rounded-2xl p-8 md:p-10 border border-gold/10">
            <h3 className="text-xl font-serif text-charcoal mb-6">Envíanos un mensaje</h3>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-stone mb-2">Organización</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  placeholder="Empresa, institución o comunidad (opcional)"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone mb-2">Asunto</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="charla">Charla individual</option>
                  <option value="servicio">Servicios con Martha</option>
                  <option value="comunidad">Comunidad</option>
                  <option value="prensa">Prensa y Medios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-sm resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || isPlaceholder}
                className="w-full px-6 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-rosewood transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {isPlaceholder && (
                <p className="text-xs text-gold bg-gold/10 rounded-lg p-3">
                  ⚠️ Para activar el formulario: Crea una cuenta gratuita en{' '}
                  <a href="https://formspree.io" target="_blank" rel="noopener" className="underline">formspree.io</a>,{' '}
                  crea un formulario y reemplaza <code>YOUR_CONTACT_FORM_ID</code> en el archivo.
                </p>
              )}

              {status === 'success' && (
                <p className="text-sm text-green-600 bg-green-50 rounded-lg p-3">
                  ✅ ¡Mensaje enviado! Te responderemos pronto.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
                  ❌ Hubo un error. Intenta de nuevo o escríbenos a fundacionbelong@gmail.com
                </p>
              )}
            </form>
          </div>

          {/* Contact Info + Newsletter */}
          <div className="space-y-8">
            {/* Quick contact info */}
            <div className="bg-pale-rosewood rounded-2xl p-8">
              <h3 className="text-xl font-serif text-charcoal mb-6">Contacto directo</h3>
              <div className="space-y-4">
                <a
                  href="mailto:fundacionbelong@gmail.com"
                  className="flex items-center gap-3 text-stone hover:text-rosewood transition-colors"
                >
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">fundacionbelong@gmail.com</span>
                </a>

                <a
                  href="tel:+573175134506"
                  className="flex items-center gap-3 text-stone hover:text-rosewood transition-colors"
                >
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">+57 317 513 4506</span>
                </a>

                <a
                  href="https://www.instagram.com/pamelalopez.belong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone hover:text-rosewood transition-colors"
                >
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm">@pamelalopez.belong</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/pamelalopezz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone hover:text-rosewood transition-colors"
                >
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">Pamela López en LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-charcoal rounded-2xl p-8 text-white">
              <h3 className="text-xl font-serif mb-2">
                Recibe Belong en tu <span className="text-rosewood italic">bandeja</span>
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Una vez al mes: el dato de género que debes conocer, un recurso educativo, una voz de la comunidad y las próximas actividades. Sin spam.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting' || isPlaceholder}
                  className="w-full px-6 py-3 bg-gold text-white rounded-full font-medium hover:bg-dark-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {status === 'submitting' ? 'Suscribiendo...' : 'Suscribirme'}
                </button>
              </form>

              {status === 'success' && (
                <p className="text-sm text-green-400 mt-3">
                  ✅ ¡Bienvenid@ a la comunidad Belong!
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-400 mt-3">
                  ❌ Error al suscribir. Intenta de nuevo.
                </p>
              )}

              {isPlaceholder && (
                <p className="text-xs text-gold/70 mt-3">
                  ⚠️ Configura tu Formspree ID para activar las suscripciones.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
