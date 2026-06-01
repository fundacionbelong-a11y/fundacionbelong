'use client';

import React from 'react';

export default function FooterSection() {
  return (
    <footer id="contacto" className="bg-[#FBF5E8] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Identity */}
          <div>
            <svg viewBox="0 0 200 80" className="h-12 w-auto mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4de53" />
                  <stop offset="50%" stopColor="#c0941a" />
                  <stop offset="100%" stopColor="#b07908" />
                </linearGradient>
              </defs>
              <g transform="translate(0, 10)">
                <path d="M40 35 C40 20, 55 15, 65 25 C75 35, 75 45, 65 55 C55 65, 40 60, 40 45 C40 30, 25 25, 15 35 C5 45, 5 55, 15 65 C25 75, 40 70, 40 55" stroke="url(#footerGold)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M65 25 C75 15, 90 20, 90 35 C90 50, 75 55, 65 45" stroke="url(#footerGold)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M50 35 C50 30, 55 28, 57 32 C59 28, 64 30, 64 35 C64 42, 57 48, 57 48 C57 48, 50 42, 50 35Z" fill="url(#footerGold)" />
              </g>
              <text x="100" y="55" fontFamily="'Dancing Script', cursive" fontSize="42" fill="#c18e98" fontWeight="700">Belong</text>
            </svg>
            <p className="text-sm text-gray-500 mb-2">Fundación Belong</p>
            <p className="text-sm text-gray-400">NIT 902.037.750-8</p>
            <p className="text-sm text-gray-400">Matrícula S00067863</p>
            <p className="text-sm text-gray-400 mt-2">Bogotá, Colombia | CL 118 No. 11A-05</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Sobre Pamela', href: '#pamela' },
                { label: 'Educación y Podcast', href: '#educacion' },
                { label: 'Charlas', href: '#charlas' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Comunidad', href: '#comunidad' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-gray-500 hover:text-[#c18e98] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
            <p className="text-sm text-gray-500 mb-2">fundacionbelong@gmail.com</p>
            <p className="text-sm text-gray-500 mb-4">+57 317 513 4506</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pamelalopez.belong" target="_blank" rel="noopener noreferrer" className="text-[#c18e98] hover:text-[#b07908] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/pamelalopezz" target="_blank" rel="noopener noreferrer" className="text-[#c0941a] hover:text-[#b07908] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#c0941a]/20 pt-8 text-center">
          <p className="text-[#c18e98] text-lg mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Be. BeU. Belong.
          </p>
          <p className="text-sm text-gray-400">
            © 2026 Fundación Belong. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
