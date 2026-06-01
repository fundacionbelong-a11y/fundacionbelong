'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBF5E8] via-white to-[#F9F0F3]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#f4de53]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#c18e98]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fadeInUp">
          <svg viewBox="0 0 300 120" className="h-24 md:h-32 w-auto mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f4de53" />
                <stop offset="50%" stopColor="#c0941a" />
                <stop offset="100%" stopColor="#b07908" />
              </linearGradient>
            </defs>
            <g transform="translate(40, 20)">
              <path 
                d="M60 50 C60 30, 80 20, 95 35 C110 50, 110 65, 95 80 C80 95, 60 85, 60 65 C60 45, 40 35, 25 50 C10 65, 10 80, 25 95 C40 110, 60 100, 60 80" 
                stroke="url(#heroGold)" 
                strokeWidth="4" 
                fill="none"
                strokeLinecap="round"
              />
              <path 
                d="M95 35 C110 20, 130 30, 130 50 C130 70, 110 80, 95 65" 
                stroke="url(#heroGold)" 
                strokeWidth="4" 
                fill="none"
                strokeLinecap="round"
              />
              <path 
                d="M75 45 C75 38, 82 35, 85 42 C88 35, 95 38, 95 45 C95 55, 85 65, 85 65 C85 65, 75 55, 75 45Z" 
                fill="url(#heroGold)"
              />
            </g>
            <text x="160" y="85" fontFamily="'Dancing Script', cursive" fontSize="72" fill="#c18e98" fontWeight="700">
              Belong
            </text>
          </svg>
        </div>
        
        {/* Tagline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
          Construimos comunidades donde{' '}
          <span className="text-[#c18e98]">tod@s</span>{' '}
          sientan que pertenecen.
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.4s', fontFamily: "'Open Sans', sans-serif" }}>
          Fundación Belong acompaña a empresas, instituciones y comunidades en la construcción de culturas de pertenencia, con equidad de género, liderazgo inclusivo y herramientas que generan cambio medible.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a
            href="#servicios"
            className="px-8 py-4 bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#c0941a]/30 transition-all duration-300 hover:-translate-y-1"
          >
            Conoce nuestros servicios
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 border-2 border-[#c18e98] text-[#c18e98] font-semibold rounded-full hover:bg-[#c18e98] hover:text-white transition-all duration-300"
          >
            Haz tu assessment
          </a>
        </div>
        
        {/* Contact info */}
        <div className="text-sm text-gray-500 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <span>fundacionbelong@gmail.com</span>
          <span className="mx-3">|</span>
          <span>+57 317 513 4506</span>
          <span className="mx-3">|</span>
          <span>@pamelalopez.belong</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#c0941a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
