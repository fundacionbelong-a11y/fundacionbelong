'use client';

import React from 'react';

const processSteps = [
  { num: '01', title: 'Test inicial de paridad', desc: 'Medición del punto de partida cultural' },
  { num: '02', title: 'Diagnóstico profundo', desc: 'Análisis cuali-cuantitativo de brechas organizacionales' },
  { num: '03', title: 'Implementación', desc: 'Herramientas probadas y consultoría de acompañamiento' },
  { num: '04', title: 'Plan de acción', desc: 'Hoja de ruta con métricas y seguimiento' },
];

const framework = [
  { letter: 'B', title: 'Belonging', desc: 'Sentido de pertenencia en todos los niveles' },
  { letter: 'E', title: 'Environment', desc: 'Entorno físico, cultural y digital seguro e inclusivo' },
  { letter: 'L', title: 'Leadership & Learning', desc: 'Liderazgo inclusivo y aprendizaje continuo' },
  { letter: 'O', title: 'Opportunity & Support', desc: 'Acceso equitativo a oportunidades y redes de soporte' },
  { letter: 'N', title: 'Navigation', desc: 'Apoyo para navegar realidades personales y familiares' },
  { letter: 'G', title: 'Growth & Governance', desc: 'Crecimiento sostenible y gobernanza con equidad' },
];

const services = [
  {
    num: '01',
    title: 'Assessment de Paridad — Radar BELONG®',
    desc: 'El punto de partida de cualquier proceso de transformación. Evaluamos la cultura organizacional en las 6 dimensiones del BELONG® Framework, identificando brechas específicas, fortalezas existentes y oportunidades de acción inmediata.',
    features: [
      'Encuesta a colaboradores y liderazgo',
      'Análisis cuali-cuantitativo de datos HR y cultura',
      'Entrevistas en profundidad con grupos focales',
      'Informe ejecutivo con Radar BELONG® y hoja de ruta',
    ],
    cta: 'Solicitar Assessment',
  },
  {
    num: '02',
    title: 'Charla: Talento que se queda',
    desc: 'Una charla estratégica basada en evidencia académica y experiencia corporativa de primera línea. Conectamos datos, vivencias y herramientas para comprender por qué el talento femenino se va de las organizaciones — y qué prácticas crean culturas donde puede quedarse, crecer y liderar.',
    features: [
      'Claridad sobre la realidad que viven las mujeres',
      'Herramientas para revisar la cultura e identificar brechas',
      'El marco BELONG®: diagnosticar, aprender, actuar y medir',
    ],
    cta: 'Solicitar esta charla',
  },
  {
    num: '03',
    title: 'Talleres de transformación cultural',
    desc: 'Sesiones prácticas de mayor profundidad (desde medio día hasta ciclos de varias semanas) para equipos que quieren construir habilidades concretas.',
    features: [
      'Taller para líderes: Cómo detectar y actuar sobre sesgos inconscientes',
      'Taller para equipos mixtos: Conversaciones que incomodan y transforman',
      'Taller para RRHH: Diseño de políticas con lente de género',
      'Taller para instituciones educativas: Escuela inclusiva',
    ],
    cta: 'Conocer talleres',
  },
  {
    num: '04',
    title: 'Consultoría de Transformación Cultural',
    desc: 'Acompañamiento estratégico de mediano plazo para organizaciones que quieren construir cambios profundos y sostenibles en su cultura de género.',
    features: [
      'Revisión de políticas de RRHH con perspectiva de género',
      'Diseño de programas de mentoring y patrocinio para mujeres',
      'Acompañamiento mensual a comités de diversidad',
      'Tablero de métricas de paridad y seguimiento periódico',
    ],
    cta: 'Hablar de consultoría',
  },
];

export default function ServiciosMarthaSection() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-[#FBF5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Talento que se <span className="text-[#c0941a]">queda</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una alianza de consultoría especializada en transformación cultural con enfoque de género. Acompañamos a empresas y organizaciones en la construcción de culturas de pertenencia.
          </p>
        </div>

        {/* Team */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 border border-[#c0941a]/20 text-center">
            <div className="w-20 h-20 rounded-full bg-[#F9F0F3] mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#c18e98]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#c18e98] mb-2">Martha Cano</h3>
            <p className="text-sm text-gray-500 mb-2">Academia e investigación</p>
            <p className="text-gray-600 text-sm">Estudios doctorales en equidad de género organizacional. Docencia universitaria. Investigación aplicada en brechas de género y cambio cultural. Ingeniera de formación y consultora en ingeniería.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#c0941a]/20 text-center">
            <div className="w-20 h-20 rounded-full bg-[#FBF5E8] mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#c0941a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#c0941a] mb-2">Pamela López</h3>
            <p className="text-sm text-gray-500 mb-2">Corporativo e Industria Tech</p>
            <p className="text-gray-600 text-sm">Líder de inclusión de género en Amazon Web Services. Directora General MujeresTIC.org. Fundadora Fundación Belong. 15+ años de experiencia en IBM y AWS. Ingeniera Industrial de la Universidad de los Andes.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: '+15%', desc: 'más probabilidad de superar a su industria', source: 'McKinsey MGI 2016' },
            { num: '+15%', desc: 'más rentabilidad con 30% mujeres en liderazgo', source: 'McKinsey MGI 2016' },
            { num: '226%', desc: 'retornos superiores al S&P500 en Fortune 1000', source: 'Fortune 1000' },
            { num: '+8% PIB', desc: 'para Colombia al reducir la brecha salarial', source: 'Banco de la República, 2026' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center border border-[#c0941a]/20">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.num}
              </div>
              <p className="text-xs text-gray-600 mb-1">{stat.desc}</p>
              <p className="text-xs text-gray-400">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ruta hacia la paridad — <span className="text-[#c0941a]">Un proceso con método, intención y acompañamiento</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-[#c0941a]/20 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4de53] to-[#b07908] flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#c0941a] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BELONG Framework */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            B-E-L-O-N-G: <span className="text-[#c18e98]">un modelo para diagnosticar, aprender, actuar y medir</span>
          </h3>
          <p className="text-center text-gray-600 mb-10">Metodología propia de 6 dimensiones</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {framework.map((dim, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-[#c0941a]/20 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {dim.letter}
                </div>
                <h4 className="text-sm font-semibold text-[#c18e98] mb-1">{dim.title}</h4>
                <p className="text-xs text-gray-600">{dim.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Revisar · aprender · actuar · re-evaluar con métricas</p>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-[#c0941a]/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] bg-clip-text text-transparent shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#c0941a] mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:fundacionbelong@gmail.com"
                    className="inline-block px-6 py-3 bg-[#c0941a] text-white font-medium rounded-full hover:bg-[#b07908] transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#f4de53]/20 via-[#c0941a]/10 to-[#b07908]/20 rounded-2xl p-8">
          <p className="text-xl text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            "Construir culturas de pertenencia es una decisión de negocio con retorno medible."
          </p>
          <p className="text-lg text-[#c18e98] mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
            ¿List@ para dar el siguiente paso?
          </p>
          <a
            href="mailto:fundacionbelong@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] text-white font-semibold rounded-full hover:shadow-xl transition-all"
          >
            ¿List@ para construir una cultura donde el talento se quede y lidere? Hablemos.
          </a>
        </div>
      </div>
    </section>
  );
}
