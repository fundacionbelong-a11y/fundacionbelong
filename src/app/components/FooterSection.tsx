'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer id="contacto" className="bg-charcoal text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Logo + Info */}
          <div className="md:col-span-4">
            <img src="/fundacionbelong/logo-belong.png" alt="Belong" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/50 text-sm mb-4">
              Fundación Belong<br/>
              NIT 902.037.750-8<br/>
              Matrícula S00067863
            </p>
            <p className="text-white/40 text-sm">
              Bogotá, Colombia<br/>
              CL 118 No. 11A-05
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-gold text-sm font-medium tracking-wider uppercase mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Sobre Pamela', href: '/pamela/' },
                { label: 'Educación y Podcast', href: '/pamela/' },
                { label: 'Servicios', href: '/servicios/' },
                { label: 'Comunidad', href: '/comunidad/' },
                { label: 'Contacto', href: '/contacto/' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/50 hover:text-gold transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-gold text-sm font-medium tracking-wider uppercase mb-6">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:fundacionbelong@gmail.com" className="block text-white/50 hover:text-gold transition-colors">
                fundacionbelong@gmail.com
              </a>
              <p className="text-white/50">+57 317 513 4506</p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/pamelalopez.belong" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-rosewood transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/pamelalopezz" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-rosewood font-serif text-lg">Be. BeU. Belong.</p>
          <p className="text-white/30 text-sm">© 2026 Fundación Belong. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
