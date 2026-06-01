'use client';

import React from 'react';

const charlas = [
  {
    num: '01',
    title: 'Dejar Huella',
    subtitle: 'Marca personal, aliados e IA como impulso para crecer con propósito',
    desc: 'Una conferencia de 45 minutos que conecta tres ejes fundamentales del crecimiento profesional: marca personal auténtica, colaboración estratégica y uso inteligente de la inteligencia artificial.',
    points: [
      'Cómo construir y potenciar una marca personal auténtica',
      'Cómo romper barreras internas que limitan la visibilidad',
      'Cómo cultivar redes de aliados estratégicos',
      'Cómo usar la IA como amplificador de productividad y valor profesional',
      'Herramientas prácticas para LinkedIn + prompts de IA',
    ],
    takeaway: [
      'Plan de marca personal en LinkedIn listo para activar',
      'Mapa de aliados estratégicos interno y externo',
      'Lista de aplicaciones de IA para amplificar su productividad',
      'Prompts específicos de IA para el día a día',
      'Plan de acción de 7 días',
    ],
    format: 'Conferencia 45 min',
    impact: 'Mujeres más seguras, visibles y conectadas',
  },
  {
    num: '02',
    title: 'La Importancia de los Aliados',
    subtitle: 'Cómo los aliados transforman las culturas organizacionales',
    desc: 'Una conferencia sobre uno de los motores más poderosos — y menos aprovechados — del cambio cultural: las personas que eligen actuar como aliadas, independientemente de su posición o género.',
    points: [
      '¿Qué es un aliado y cómo se convierte en agente de cambio?',
      'El impacto de la alianza estratégica en trayectorias femeninas',
      'Barreras estructurales que los aliados pueden remover desde sus posiciones',
      'Prácticas concretas para construir redes de alianza en la organización',
      'Casos y programas globales que generaron cambio sostenible',
    ],
    audience: 'Equipos mixtos, comités de diversidad, liderazgo ejecutivo y recursos humanos.',
  },
  {
    num: '03',
    title: 'Guía de Género para Padres y Educadores',
    subtitle: 'Crianza y educación con perspectiva de género',
    desc: 'Una charla diseñada para padres, madres, docentes y orientadores que quieren acompañar a niñas y niños en el desarrollo de una identidad libre de estereotipos, con equidad de oportunidades desde los primeros años de vida.',
    points: [
      'Cómo se forman los estereotipos de género desde la infancia y qué impacto tienen',
      'Lenguaje inclusivo en el hogar y el aula: guía práctica',
      'Cómo alentar a las niñas hacia las STEM con libertad',
      'El rol de los hombres en la crianza equitativa',
      'Recursos para continuar el proceso en casa y en el salón',
    ],
    format: 'Charla 45–60 min o Taller medio día',
    audience: 'Colegios, universidades, jardines infantiles, programas de padres',
  },
];

export default function CharlasSection() {
  return (
    <section id="charlas" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Charlas que <span className="text-[#c0941a]">inspiran</span> y <span className="text-[#c18e98]">activan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experiencias de aprendizaje diseñadas para dejar huella. Basadas en 15 años de experiencia en tecnología global, investigación aplicada y el acompañamiento a personas en el mundo corporativo y educativo.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Para: empresas, instituciones educativas, gremios, fundaciones y cualquier organización que quiera inspirar a sus equipos.
          </p>
        </div>

        <div className="space-y-12">
          {charlas.map((charla, index) => (
            <div key={index} className="bg-[#FBF5E8] rounded-2xl p-8 md:p-10 border border-[#c0941a]/20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#f4de53] via-[#c0941a] to-[#b07908] bg-clip-text text-transparent shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {charla.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#c18e98] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {charla.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 italic">{charla.subtitle}</p>
                  <p className="text-gray-600 mb-6">{charla.desc}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">¿Qué explora esta charla?</h4>
                    <ul className="space-y-2">
                      {charla.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[#c0941a] mt-1">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {charla.takeaway && (
                    <div className="mb-6 p-4 bg-white rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">¿Qué se llevan?</h4>
                      <ul className="space-y-2">
                        {charla.takeaway.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="text-[#c18e98] mt-1">◆</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {charla.format && <span className="px-3 py-1 bg-white rounded-full border border-[#c0941a]/20">{charla.format}</span>}
                    {charla.impact && <span className="px-3 py-1 bg-white rounded-full border border-[#c18e98]/20">Impacto: {charla.impact}</span>}
                    {charla.audience && <span className="px-3 py-1 bg-white rounded-full border border-gray-200">Para: {charla.audience}</span>}
                  </div>

                  <div className="mt-6">
                    <a
                      href="mailto:fundacionbelong@gmail.com?subject=Solicitud%20de%20charla%20-%20{encodeURIComponent(charla.title)}"
                      className="inline-block px-6 py-3 border-2 border-[#c18e98] text-[#c18e98] font-medium rounded-full hover:bg-[#c18e98] hover:text-white transition-all"
                    >
                      Solicitar esta charla
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-[#f4de53]/20 via-[#c0941a]/10 to-[#b07908]/20 rounded-2xl p-8">
          <p className="text-xl text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            ¿Tienes una fecha especial, un evento de género o quieres llevar una de estas conversaciones a tu organización?
          </p>
          <a
            href="mailto:fundacionbelong@gmail.com?subject=Solicitud%20de%20charla"
            className="inline-block px-8 py-4 bg-[#c18e98] text-white font-semibold rounded-full hover:shadow-xl transition-all"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
