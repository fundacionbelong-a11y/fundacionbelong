'use client';

import React, { useState, useEffect } from 'react';
import BelongLogo from './BelongLogo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Belong', href: '#que-es' },
    { label: 'Pamela', href: '#pamela' },
    { label: 'Educación', href: '#educacion' },
    { label: 'Charlas', href: '#charlas' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#hero" className="flex items-center">
            <BelongLogo className="h-10 w-auto" />
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#c18e98] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-4 py-2 bg-[#c0941a] text-white text-sm font-medium rounded-full hover:bg-[#b07908] transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-[#c18e98]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 bg-[#c0941a] text-white text-sm font-medium rounded-full text-center"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
