'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// === LO QUE REALMENTE EXISTE ===

// Blog posts
const blogPosts = [
  {
    slug: 'ladies-first',
    title: 'Ladies First: el espejo que no miente',
    subtitle: 'y el reto de imaginar lo que aún no hemos construido',
    excerpt: 'Esta película deja un mensaje contundente a través de la poderosa comedia. El humor como herramienta para mostrar lo que es habitar en un mundo que no fue diseñado para ti.',
    tags: ['Análisis de cine', 'Equidad de género'],
    authors: 'Pamela López Zúñiga · Martha Lucía Cano',
    href: '/conocimiento/blog/ladies-first',
  },
];

// Podcast: solo 1 episodio en Spotify
const podcastEpisode = {
  title: 'Voces que Pertenecen',
  subtitle: 'Episodio 1',
  description: 'Entrevistas en profundidad con líderes, investigadoras y activistas sobre género, liderazgo y pertenencia.',
  spotifyUrl: 'https://open.spotify.com/episode/34ZxHT1N8XT4Pt56eUHCLF?si=mwZeou5sQJe5pwyugl31gg',
};

// Glosario: definiciones que sí podemos mostrar
const glossary = [
  { term: 'Brecha salarial de género', def: 'Diferencia en los ingresos entre hombres y mujeres que realizan el mismo trabajo o trabajos de igual valor.' },
  { term: 'Cultura de pertenencia', def: 'Entorno organizacional donde todas las personas sienten que su presencia tiene valor, su voz importa y pueden ser auténticas.' },
  { term: 'DEI', def: 'Siglas de Diversidad, Equidad e Inclusión. Marco de trabajo para construir organizaciones donde personas de distintos perfiles tengan las mismas oportunidades de prosperar.' },
  { term: 'Mentoría', def: 'Relación de acompañamiento entre una persona con más experiencia y otra que está creciendo, con el objetivo de acelerar su desarrollo profesional o personal.' },
  { term: 'Sello Equipares', def: 'Certificación del Ministerio de Trabajo de Colombia que reconoce a empresas comprometidas con la equidad de género en el entorno laboral.' },
  { term: 'Sesgo inconsciente', def: 'Creencias automáticas que tenemos sobre grupos de personas sin darnos cuenta, formadas por la cultura, los medios y la experiencia.' },
  { term: 'Sesgo de autoselección', def: 'Fenómeno por el cual las personas — especialmente niñas y mujeres — descartan opciones de carrera antes de intentarlas, porque han internalizado que "no son para ellas".' },
  { term: 'Techo de cristal', def: 'Barreras invisibles que limitan el avance de las mujeres y grupos subrepresentados hacia posiciones de liderazgo, aunque no estén escritas en ninguna política.' },
];

// Recursos: artículos, estudios, libros, documentales y cursos
const resources = [
  // ARTÍCULOS
  {
    type: 'Artículo', title: 'Ladies First', author: 'Pamela López Zúñiga · Martha Lucía Cano',
    desc: 'Análisis de la película: el humor como espejo de la desigualdad de género y el reto de imaginar un mundo distinto.',
    url: '/conocimiento/blog/ladies-first', download: false,
  },
  // ESTUDIOS
  {
    type: 'Estudio', title: 'Explorando las brechas de género en Colombia',
    author: 'María Teresa Ramírez-Giraldo (coord.) — Banco de la República, ESPE núm. 111, marzo 2026',
    desc: 'Estudio del Banco de la República sobre la economía de género en Colombia: discriminación laboral, diferenciales salariales y las brechas entre mujeres y hombres en el mercado de trabajo.',
    url: '/brecha-de-genero-colombia.pdf', download: true,
  },
  {
    type: 'Estudio', title: 'Women in the Workplace 2025',
    author: 'McKinsey & Company / LeanIn.org',
    desc: 'El mayor estudio sobre mujeres en el lugar de trabajo, con datos de más de 120 empresas y 9.000 colaboradores.',
    url: 'https://wiw-report.s3.us-east-1.amazonaws.com/Women_in_the_Workplace_2025.pdf', download: true,
  },
  {
    type: 'Estudio', title: 'El progreso en el cumplimiento de los Objetivos de Desarrollo Sostenible',
    author: 'ONU Mujeres — Gender Snapshot 2025',
    desc: 'Medición del avance global en los ODS con perspectiva de género: economía, educación, salud y reducción de la pobreza.',
    url: 'https://www.unwomen.org/sites/default/files/2025-11/progress-on-the-sustainable-development-goals-the-gender-snapshot-2025-es.pdf', download: true,
  },
  {
    type: 'Estudio', title: 'Global Gender Gap Report 2025',
    author: 'Foro Económico Mundial (WEF)',
    desc: 'Benchmarking de paridad de género en 148 economías: participación económica, educación, salud y empoderamiento político.',
    url: 'https://reports.weforum.org/docs/WEF_GGGR_2025.pdf', download: true,
  },
  {
    type: 'Estudio', title: 'Cerrando Brechas',
    author: 'ANDI — Asociación Nacional de Empresarios de Colombia',
    desc: 'Guía para el sector empresarial colombiano sobre equidad de género: buenas prácticas, métricas y hoja de ruta.',
    url: 'https://www.andi.com.co/Uploads/VERSIO%CC%81N%20WEB%20CERRANDO%20BRECHAS%20ANDI%20FINAL.pdf', download: true,
  },
  // LIBROS
  {
    type: 'Libro', title: 'Invisible Women', author: 'Caroline Criado Perez',
    desc: 'Cómo el mundo fue diseñado ignorando a las mujeres.',
    url: 'https://www.amazon.com/Invisible-Women-Data-World-Designed/dp/1419729071', download: false,
  },
  {
    type: 'Libro', title: 'Lean In', author: 'Sheryl Sandberg',
    desc: 'Mujeres, trabajo y voluntad de liderar.',
    url: 'https://www.amazon.com/Lean-In-Women-Work-Will/dp/0385349947', download: false,
  },
  // DOCUMENTALES
  {
    type: 'Documental', title: 'Miss Representation', author: 'Jennifer Siebel Newsom',
    desc: 'Cómo los medios representan a las mujeres.',
    url: 'https://www.missrepresentation.org', download: false,
  },
  {
    type: 'Documental', title: 'Picture a Scientist', author: '2020',
    desc: 'La experiencia de las mujeres en la ciencia.',
    url: 'https://www.pictureascientist.com', download: false,
  },
  // CURSOS
  {
    type: 'Curso', title: 'Yo sé de género',
    author: 'ONU Mujeres — Training Centre',
    desc: 'Serie de cursos virtuales gratuitos en español sobre igualdad de género, liderazgo y empoderamiento de las mujeres.',
    url: 'https://portal.trainingcentre.unwomen.org/product-category/self-paced/yosedegenero/', download: false,
  },
];

// label (plural, visible) → type (singular, matches resource.type)
const filters = [
  { label: 'Todos', type: 'Todos' },
  { label: 'Artículos', type: 'Artículo' },
  { label: 'Estudios', type: 'Estudio' },
  { label: 'Libros', type: 'Libro' },
  { label: 'Documentales', type: 'Documental' },
  { label: 'Cursos', type: 'Curso' },
];

export default function ConocimientoSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resources.filter(r => {
    const matchesFilter = activeFilter === 'Todos' || r.type === activeFilter;
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="conocimiento" className="bg-white">
      {/* Tagline */}
      <div className="bg-soft-rose py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Banco de Conocimiento</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-6">
            <span className="text-rosewood italic">Aprende.</span>{' '}
            <span className="text-gold">Transforma.</span>{' '}
            <span className="text-dark-gold">Infórmate.</span>
          </h2>
          <p className="text-stone max-w-2xl mx-auto font-light italic text-lg">
            Conocimiento al alcance de todas las personas. Porque aprender es el primer paso para transformar.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-40">

        {/* === BLOG === */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Blog</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            Perspectivas de <span className="text-rosewood italic">Belong</span>
          </h3>
          <p className="text-stone mb-10 max-w-2xl">
            Análisis, reflexiones y puntos de vista sobre género, cultura y transformación.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group card-lift bg-white rounded-2xl border border-gold/10 overflow-hidden flex flex-col"
              >
                {/* Color header */}
                <div className="h-2 bg-gradient-to-r from-rosewood/60 to-gold/60" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-cream text-stone text-xs font-medium rounded-full border border-gold/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-serif text-charcoal text-xl mb-1 leading-snug">{post.title}</h4>
                  <p className="text-xs text-rosewood/80 italic mb-3">{post.subtitle}</p>
                  <p className="text-stone text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
                    <p className="text-xs text-stone/50">{post.authors}</p>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-dark-gold transition-colors"
                    >
                      Leer <span>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === PODCAST — 1 EPISODIO REAL === */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Podcast</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            <span className="text-rosewood italic">Voces</span> que Pertenecen
          </h3>
          <p className="text-stone mb-8 max-w-2xl">
            Entrevistas en profundidad con líderes, investigadoras y activistas sobre género, liderazgo y pertenencia.
          </p>

          <div className="bg-charcoal rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-4xl shrink-0">
                🎙️
              </div>
              <div className="flex-1">
                <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">Episodio 1</p>
                <h4 className="font-serif text-2xl md:text-3xl mb-2">{podcastEpisode.title}</h4>
                <p className="text-white/60 leading-relaxed mb-6">{podcastEpisode.description}</p>
                <a
                  href={podcastEpisode.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#1DB954] text-white rounded-full font-medium hover:bg-[#1ed760] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  Escuchar en Spotify
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === RECURSOS RECOMENDADOS — 9 LINKS REALES === */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Recomendados por Belong</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            Recursos
          </h3>
          <p className="text-stone mb-8 max-w-2xl">
            Artículos, estudios, libros, documentales y cursos seleccionados por Pamela López y Martha Cano.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map(f => (
              <button
                key={f.type}
                onClick={() => setActiveFilter(f.type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.type
                    ? 'bg-charcoal text-white'
                    : 'bg-cream text-stone hover:bg-gold/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-lift bg-white rounded-2xl border border-gold/10 overflow-hidden"
              >
                <div className={`aspect-video relative flex items-center justify-center ${
                  resource.type === 'Estudio' ? 'bg-gradient-to-br from-gold/10 to-cream' :
                  resource.type === 'Artículo' ? 'bg-gradient-to-br from-rosewood/10 to-cream' :
                  resource.type === 'Libro' ? 'bg-gradient-to-br from-charcoal/5 to-cream' :
                  resource.type === 'Documental' ? 'bg-gradient-to-br from-stone/10 to-cream' :
                  'bg-gradient-to-br from-gold/5 to-cream'
                }`}>
                  {resource.type === 'Estudio' && (
                    <svg className="w-10 h-10 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  )}
                  {resource.type === 'Artículo' && (
                    <svg className="w-10 h-10 text-rosewood/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                  )}
                  {resource.type === 'Libro' && (
                    <svg className="w-10 h-10 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  )}
                  {resource.type === 'Documental' && (
                    <svg className="w-10 h-10 text-stone/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  )}
                  {resource.type === 'Curso' && (
                    <svg className="w-10 h-10 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                  )}
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-cream text-gold text-xs font-medium rounded-full border border-gold/10">
                    {resource.type}
                  </span>
                  <h4 className="font-serif text-charcoal mt-3 mb-1">{resource.title}</h4>
                  <p className="text-xs text-stone/50 mb-2 italic">{resource.author}</p>
                  <p className="text-stone text-sm leading-relaxed mb-4">{resource.desc}</p>
                  {resource.download ? (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-dark-gold transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Descargar PDF
                    </a>
                  ) : resource.url.startsWith('/conocimiento') ? (
                    <Link
                      href={resource.url}
                      className="text-gold text-sm font-medium hover:text-dark-gold transition-colors flex items-center gap-2"
                    >
                      Leer artículo <span>→</span>
                    </Link>
                  ) : (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-sm font-medium hover:text-dark-gold transition-colors flex items-center gap-2"
                    >
                      {resource.type === 'Curso' ? 'Acceder al curso' : resource.type === 'Libro' ? 'Ver libro' : 'Ver'} <span>→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === GLOSARIO — 8 TÉRMINOS === */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Lenguaje de Pertenencia</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            Glosario
          </h3>
          <p className="text-stone mb-8 max-w-2xl">
            Términos clave del mundo de género, diversidad e inclusión. 
            Pensado para personas que quieren entender pero no saben por dónde empezar.
          </p>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar término..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-5 py-3 rounded-full border border-gold/20 focus:outline-none focus:border-gold bg-cream text-sm"
            />
          </div>

          <div className="space-y-4">
            {glossary
              .filter(g => g.term.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 border border-gold/10">
                <h4 className="font-serif text-charcoal text-lg mb-2">{item.term}</h4>
                <p className="text-stone leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === PRÓXIMAMENTE === */}
        <div className="bg-cream rounded-2xl p-10 md:p-16 text-center border border-gold/10">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 text-3xl">
            🌱
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            En <span className="text-rosewood italic">construcción</span>
          </h3>
          <p className="text-stone max-w-2xl mx-auto mb-8 leading-relaxed">
            Estamos preparando más contenido: artículos propios, videos educativos, 
            infografías descargables y el ILU Toolbox Pro Mujer. 
            Si tienes una idea o quieres colaborar, escríbenos.
          </p>
          <a
            href="mailto:fundacionbelong@gmail.com?subject=Quiero%20colaborar%20con%20contenido"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-rosewood transition-colors"
          >
            💡 Proponer contenido
          </a>
        </div>

      </div>
    </section>
  );
}
