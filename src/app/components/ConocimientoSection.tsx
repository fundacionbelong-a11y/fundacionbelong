'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    title: 'El Sello Equipares: qué es y por qué importa para las empresas colombianas',
    summary: 'Guía práctica sobre la certificación del Ministerio de Trabajo y cómo las empresas pueden avanzar en equidad de género.',
    image: '/article-1.jpg',
    external: false,
  },
  {
    title: 'Invisible Women — Caroline Criado Perez',
    summary: 'Cómo el mundo fue diseñado ignorando a las mujeres, desde los asientos de seguridad hasta los teléfonos inteligentes.',
    image: '/article-2.jpg',
    external: true,
    url: 'https://www.amazon.com/Invisible-Women-Data-World-Designed/dp/1419729071',
  },
  {
    title: 'Brecha salarial en Colombia: 13% de diferencia inexplicable',
    summary: 'Análisis de los datos del Banco de la República sobre la brecha de género en el mercado laboral colombiano.',
    image: '/article-3.jpg',
    external: false,
  },
  {
    title: 'Mentoría: una conversación que puede abrir un mundo',
    summary: 'Por qué la mentoría es una de las herramientas más poderosas para el crecimiento profesional de las mujeres.',
    image: '/article-4.jpg',
    external: false,
  },
  {
    title: 'Las niñas y el STEM: rompiendo estereotipos desde la infancia',
    summary: 'Cómo los estereotipos de género limitan las opciones de carrera de las niñas antes de que intenten.',
    image: '/article-5.jpg',
    external: false,
  },
  {
    title: 'Lean In — Sheryl Sandberg',
    summary: 'Mujeres, trabajo y voluntad de liderar. Reflexiones sobre cómo las mujeres pueden avanzar en el entorno corporativo.',
    image: '/article-6.jpg',
    external: true,
    url: 'https://www.amazon.com/Lean-In-Women-Work-Will/dp/0385349947',
  },
];

const podcastEpisodes = [
  { title: 'Cuando el talento se va', duration: '45 min', theme: 'Cultura organizacional', image: '/podcast-1.jpg' },
  { title: 'La doble jornada', duration: '38 min', theme: 'Maternidad y trabajo', image: '/podcast-2.jpg' },
  { title: 'Ingeniera, madre y autónoma', duration: '52 min', theme: 'Carrera STEM', image: '/podcast-3.jpg' },
  { title: 'Los aliados que cambian culturas', duration: '41 min', theme: 'Aliados', image: '/podcast-4.jpg' },
  { title: 'Dejar huella en la era de la IA', duration: '47 min', theme: 'Tecnología', image: '/podcast-5.jpg' },
];

const videos = [
  { title: 'El poder de la mentoría', duration: '3:45', platform: 'Instagram', embed: 'https://www.instagram.com/reel/ABC123/' },
  { title: 'Datos que inspiran', duration: '2:30', platform: 'Instagram', embed: 'https://www.instagram.com/reel/DEF456/' },
  { title: 'Mujeres en STEM', duration: '4:15', platform: 'YouTube', embed: 'https://www.youtube.com/embed/VIDEO_ID' },
  { title: 'La confianza desde la infancia', duration: '3:20', platform: 'Instagram', embed: 'https://www.instagram.com/reel/GHI789/' },
];

const infographics = [
  { number: '123', unit: 'años', desc: 'para cerrar la brecha de género a nivel mundial', source: 'WEF, Global Gender Gap Report 2025' },
  { number: '57', unit: 'años', desc: 'para cerrar la brecha en América Latina al ritmo actual', source: 'WEF, Global Gender Gap Report 2025' },
  { number: '6', unit: 'años', desc: 'la edad en que las niñas empiezan a dudar de sus capacidades', source: 'ONU Mujeres / UNESCO' },
  { number: '30%', unit: '', desc: 'de mujeres eligen carreras STEM globalmente', source: 'ONU Mujeres — Mujeres en STEM 2020' },
  { number: '32%', unit: '', desc: 'de quienes estudian STEM en Colombia son mujeres', source: 'DANE / ACIEM 2024–2025' },
  { number: '28%', unit: 'menos', desc: 'ganan las mujeres en empleo informal en Colombia', source: 'DANE — Gran Encuesta Integrada de Hogares 2025' },
];

const glossary = [
  { term: 'Sesgo inconsciente', def: 'Creencias automáticas que tenemos sobre grupos de personas sin darnos cuenta, formadas por la cultura, los medios y la experiencia.' },
  { term: 'Brecha salarial de género', def: 'Diferencia en los ingresos entre hombres y mujeres que realizan el mismo trabajo o trabajos de igual valor.' },
  { term: 'Cultura de pertenencia', def: 'Entorno organizacional donde todas las personas sienten que su presencia tiene valor, su voz importa y pueden ser auténticas.' },
  { term: 'Techo de cristal', def: 'Barreras invisibles que limitan el avance de las mujeres y grupos subrepresentados hacia posiciones de liderazgo, aunque no estén escritas en ninguna política.' },
  { term: 'Mentoría', def: 'Relación de acompañamiento entre una persona con más experiencia y otra que está creciendo, con el objetivo de acelerar su desarrollo profesional o personal.' },
  { term: 'DEI', def: 'Siglas de Diversidad, Equidad e Inclusión. Marco de trabajo para construir organizaciones donde personas de distintos perfiles tengan las mismas oportunidades de prosperar.' },
  { term: 'Sesgo de autoselección', def: 'Fenómeno por el cual las personas — especialmente niñas y mujeres — descartan opciones de carrera antes de intentarlas, porque han internalizado que "no son para ellas".' },
  { term: 'Sello Equipares', def: 'Certificación del Ministerio de Trabajo de Colombia que reconoce a empresas comprometidas con la equidad de género en el entorno laboral.' },
];

const resources = [
  { type: 'Libro', title: 'Invisible Women', author: 'Caroline Criado Perez', desc: 'Cómo el mundo fue diseñado ignorando a las mujeres', image: '/resource-book-1.jpg', url: 'https://www.amazon.com/Invisible-Women-Data-World-Designed/dp/1419729071' },
  { type: 'Libro', title: 'Lean In', author: 'Sheryl Sandberg', desc: 'Mujeres, trabajo y voluntad de liderar', image: '/resource-book-2.jpg', url: 'https://www.amazon.com/Lean-In-Women-Work-Will/dp/0385349947' },
  { type: 'Libro', title: 'Dare to Lead', author: 'Brené Brown', desc: 'Liderazgo basado en valores y vulnerabilidad', image: '/resource-book-3.jpg', url: 'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520' },
  { type: 'Libro', title: 'The Moment of Lift', author: 'Melinda Gates', desc: 'Igualdad de género y transformación global', image: '/resource-book-4.jpg', url: 'https://www.amazon.com/Moment-Lift-Empowering-Women-Changes/dp/1250313570' },
  { type: 'Documental', title: 'Miss Representation', author: 'Jennifer Siebel Newsom', desc: 'Cómo los medios representan a las mujeres', image: '/resource-doc-1.jpg', url: 'https://www.netflix.com' },
  { type: 'Documental', title: 'Picture a Scientist', author: '2020', desc: 'La experiencia de las mujeres en la ciencia', image: '/resource-doc-2.jpg', url: 'https://www.pictureascientist.com' },
  { type: 'Curso', title: 'Liderazgo inclusivo', author: 'Universidad de Colorado (Coursera)', desc: 'Gratuito con certificado auditable', image: '/resource-course-1.jpg', url: 'https://www.coursera.org' },
  { type: 'Curso', title: 'Gender and Sexuality', author: 'Coursera / Catalyst', desc: 'Diversity and Inclusion in the Workplace', image: '/resource-course-2.jpg', url: 'https://www.edx.org' },
  { type: 'Curso', title: 'Capacitaciones ONU Mujeres', author: 'ONU Mujeres', desc: 'Capacitaciones virtuales gratuitas en igualdad de género', image: '/resource-course-3.jpg', url: 'https://onlinecourses.unwomen.org' },
];

const filters = ['Todos', 'Liderazgo', 'STEM', 'Cultura organizacional', 'Niñas y jóvenes', 'Género y sociedad'];

export default function ConocimientoSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGlossaryLetter, setActiveGlossaryLetter] = useState('T');

  const filteredArticles = articles.filter(a => {
    const matchesFilter = activeFilter === 'Todos' || true; // Simplified for demo
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filteredGlossary = glossary.filter(g => g.term.charAt(0).toUpperCase() === activeGlossaryLetter);

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
        {/* Artículos */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Artículos</p>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal">
                Contenido que <span className="text-rosewood italic">inspira</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-lift bg-white rounded-2xl border border-gold/10 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-pale-rosewood to-cream relative">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">📄</div>
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-charcoal mb-2 group-hover:text-rosewood transition-colors">{article.title}</h4>
                  <p className="text-stone text-sm leading-relaxed mb-4">{article.summary}</p>
                  {article.external ? (
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-gold text-sm font-medium hover:text-dark-gold transition-colors flex items-center gap-2">
                      Leer más <span>→</span>
                    </a>
                  ) : (
                    <span className="text-gold text-sm font-medium cursor-pointer hover:text-dark-gold transition-colors flex items-center gap-2">
                      Leer más <span>→</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Podcast */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Podcast</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-8">
            <span className="text-rosewood italic">Voces</span> que Pertenecen
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastEpisodes.map((episode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-charcoal rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-2xl mb-4">
                    🎙️
                  </div>
                  <p className="text-gold text-xs font-medium uppercase tracking-wider mb-2">{episode.theme}</p>
                  <h4 className="font-serif text-lg mb-2">{episode.title}</h4>
                  <p className="text-white/60 text-sm mb-4">{episode.duration}</p>
                  <a
                    href="https://open.spotify.com/episode/34ZxHT1N8XT4Pt56eUHCLF?si=mwZeou5sQJe5pwyugl31gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-gold/20 transition-colors"
                  >
                    Escuchar en Spotify 🎧
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Videos */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Videos</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-8">
            Aprende <span className="text-rosewood italic">viendo</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-lift bg-white rounded-2xl border border-gold/10 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-charcoal to-charcoal/80 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gold font-medium mb-1">{video.platform}</p>
                  <h4 className="font-medium text-charcoal text-sm">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ILU Toolbox */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-br from-charcoal to-charcoal/95 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Recurso Destacado</p>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">
                    ILU Toolbox <span className="text-rosewood italic">Pro Mujer</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    El marco de análisis de Belong para comprender la experiencia de la mujer en entornos organizacionales. 
                    Incluye las 4 lentes: Mujeres en liderazgo · Igualdad en el lugar de trabajo · Productos para mujeres · Cadena de valor.
                  </p>
                  <p className="text-white/50 text-sm mb-8">
                    PDF descargable gratuito. Diseño de marca Belong completo.
                  </p>
                  <button className="px-8 py-4 bg-gold text-white rounded-full font-medium hover:bg-dark-gold transition-colors flex items-center gap-3">
                    <span>📥</span> Descargar ILU Toolbox (PDF gratuito)
                  </button>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    {['Mujeres en liderazgo', 'Igualdad en el lugar de trabajo', 'Productos para mujeres', 'Cadena de valor'].map((lens, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2 text-gold">
                          {i + 1}
                        </div>
                        <p className="text-sm text-white/80">{lens}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Infografías */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Datos Clave</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-8">
            Infografías que <span className="text-rosewood italic">informan</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infographics.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-lift bg-white rounded-2xl p-8 border border-gold/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="text-5xl font-serif text-gradient-gold mb-2 leading-none">
                    {info.number}<span className="text-2xl">{info.unit}</span>
                  </div>
                  <p className="text-stone leading-relaxed mb-4">{info.desc}</p>
                  <p className="text-xs text-stone/50">{info.source}</p>
                  <button className="mt-4 w-full py-2.5 bg-cream border border-gold/20 rounded-full text-sm text-charcoal hover:bg-gold hover:text-white transition-all">
                    📥 Descargar infografía
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Glosario */}
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
            Términos clave del mundo de género, diversidad e inclusión. Pensado para personas que quieren entender pero no saben por dónde empezar.
          </p>

          {/* Búsqueda */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Buscar término..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-5 py-3 rounded-full border border-gold/20 focus:outline-none focus:border-gold bg-cream text-sm"
            />
          </div>

          {/* Letras */}
          <div className="flex flex-wrap gap-2 mb-8">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
              <button
                key={letter}
                onClick={() => setActiveGlossaryLetter(letter)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                  activeGlossaryLetter === letter
                    ? 'bg-charcoal text-white'
                    : 'bg-cream text-stone hover:bg-gold/10'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredGlossary.length > 0 ? filteredGlossary.map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 border border-gold/10">
                <h4 className="font-serif text-charcoal text-lg mb-2">{item.term}</h4>
                <p className="text-stone leading-relaxed">{item.def}</p>
              </div>
            )) : (
              <p className="text-stone/60 text-center py-8">No hay términos que empiecen con "{activeGlossaryLetter}"</p>
            )}
          </div>
        </motion.div>

        {/* Recursos Recomendados */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Recomendados por Belong</p>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
            Recursos <span className="text-rosewood italic">curados</span>
          </h3>
          <p className="text-stone mb-8 max-w-2xl">
            Libros, documentales y cursos gratuitos seleccionados por Pamela López y Martha Cano. Belong no produce este contenido, pero lo selecciona con criterio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
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
      </div>
    </section>
  );
}
