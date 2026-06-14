'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// === LO QUE REALMENTE EXISTE ===

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

// Recursos: links reales a contenido externo
const resources = [
  { type: 'Libro', title: 'Invisible Women', author: 'Caroline Criado Perez', desc: 'Cómo el mundo fue diseñado ignorando a las mujeres', url: 'https://www.amazon.com/Invisible-Women-Data-World-Designed/dp/1419729071' },
  { type: 'Libro', title: 'Lean In', author: 'Sheryl Sandberg', desc: 'Mujeres, trabajo y voluntad de liderar', url: 'https://www.amazon.com/Lean-In-Women-Work-Will/dp/0385349947' },
  { type: 'Libro', title: 'Dare to Lead', author: 'Brené Brown', desc: 'Liderazgo basado en valores y vulnerabilidad', url: 'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520' },
  { type: 'Libro', title: 'The Moment of Lift', author: 'Melinda Gates', desc: 'Igualdad de género y transformación global', url: 'https://www.amazon.com/Moment-Lift-Empowering-Women-Changes/dp/1250313570' },
  { type: 'Documental', title: 'Miss Representation', author: 'Jennifer Siebel Newsom', desc: 'Cómo los medios representan a las mujeres', url: 'https://www.netflix.com' },
  { type: 'Documental', title: 'Picture a Scientist', author: '2020', desc: 'La experiencia de las mujeres en la ciencia', url: 'https://www.pictureascientist.com' },
  { type: 'Curso', title: 'Liderazgo inclusivo', author: 'Universidad de Colorado (Coursera)', desc: 'Gratuito con certificado auditable', url: 'https://www.coursera.org' },
  { type: 'Curso', title: 'Gender and Sexuality', author: 'Coursera / Catalyst', desc: 'Diversity and Inclusion in the Workplace', url: 'https://www.edx.org' },
  { type: 'Curso', title: 'Capacitaciones ONU Mujeres', author: 'ONU Mujeres', desc: 'Capacitaciones virtuales gratuitas en igualdad de género', url: 'https://onlinecourses.unwomen.org' },
];

const filters = ['Todos', 'Libro', 'Documental', 'Curso'];

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
            Recursos <span className="text-rosewood italic">curados</span>
          </h3>
          <p className="text-stone mb-8 max-w-2xl">
            Libros, documentales y cursos gratuitos seleccionados por Pamela López y Martha Cano. 
            Belong no produce este contenido, pero lo selecciona con criterio.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? 'bg-charcoal text-white'
                    : 'bg-cream text-stone hover:bg-gold/10'
                }`}
              >
                {f}
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
                <div className="aspect-video bg-gradient-to-br from-pale-rosewood to-cream relative flex items-center justify-center">
                  <span className="text-4xl">
                    {resource.type === 'Libro' ? '📚' : resource.type === 'Documental' ? '🎬' : '🎓'}
                  </span>
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-cream text-gold text-xs font-medium rounded-full border border-gold/10">
                    {resource.type}
                  </span>
                  <span className="px-3 py-1 bg-rosewood/10 text-rosewood text-xs font-medium rounded-full ml-2">
                    Recomendado por Belong
                  </span>
                  <h4 className="font-serif text-charcoal mt-3 mb-1">{resource.title}</h4>
                  <p className="text-sm text-stone/60 mb-2">{resource.author}</p>
                  <p className="text-stone text-sm leading-relaxed mb-4">{resource.desc}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm font-medium hover:text-dark-gold transition-colors flex items-center gap-2"
                  >
                    Acceder <span>→</span>
                  </a>
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
