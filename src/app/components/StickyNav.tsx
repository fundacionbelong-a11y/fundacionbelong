'use client';

import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'que-es', label: 'Nosotros' },
  { id: 'pamela', label: 'Pamela' },
  { id: 'charlas', label: 'Charlas' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'comunidad', label: 'Comunidad' },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.8);

      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`z-40 transition-all duration-500 ${
        isSticky
          ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gold/10 shadow-sm'
          : 'relative bg-white border-b border-gold/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-charcoal text-white'
                  : 'text-stone hover:text-charcoal hover:bg-cream'
              }`}
            >
              {section.label}
            </button>
          ))}
          <a
            href="mailto:fundacionbelong@gmail.com"
            className="ml-auto px-5 py-2 bg-gold text-white text-sm font-medium rounded-full hover:bg-dark-gold transition-colors whitespace-nowrap hidden md:block"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
