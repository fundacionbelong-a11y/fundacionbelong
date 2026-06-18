'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '123', unit: 'años', desc: 'para cerrar la brecha de género mundial al ritmo actual', source: 'WEF, Global Gender Gap Report 2025' },
  { number: '57', unit: 'años', desc: 'para cerrar la brecha en América Latina', source: 'WEF, Global Gender Gap Report 2025' },
  { number: '6', unit: 'años', desc: 'edad en que las niñas empiezan a dudar de sus propias capacidades', source: 'ONU Mujeres / UNESCO' },
  { number: '30%', unit: '', desc: 'de mujeres en el mundo eligen carreras STEM', source: 'ONU Mujeres — Mujeres en STEM' },
  { number: 'x2', unit: '', desc: 'las mujeres tienen el doble de desempleo que los hombres en Colombia', source: 'DANE, GEIH 2025' },
];

const pillars = [
  {
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Con las niñas',
    desc: 'Espacios seguros donde explorar, preguntar y descubrirse. Talleres de confianza, pensamiento crítico y asombro por la ciencia, la medicina, la tecnología y cualquier campo que elijan.',
  },
  {
    img: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Con los cuidadores principales',
    desc: 'Los mensajes más poderosos llegan en casa. Acompañamos a cuidadores principales a reconocer los patrones que heredamos y elegir conscientemente cuáles queremos romper.',
  },
  {
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format&q=80',
    title: 'Con educadores',
    desc: 'Las aulas son el segundo hogar de una niña. Formamos a maestros y maestras en pedagogía que amplía posibilidades en lugar de definir roles.',
  },
];

const waysToJoin = [
  {
    profile: 'Si eres empresa',
    desc: 'Contrata una charla o consultoría y el impacto llega dos veces: a tu equipo y a una comunidad.',
    cta: 'Escríbenos',
    link: 'mailto:fundacionbelong@gmail.com?subject=Quiero%20contratar%20a%20Belong',
  },
  {
    profile: 'Si eres profesional en tecnología, medicina o ciencias',
    desc: 'Sé mentora del Programa Raíces. Una conversación tuya puede abrir un mundo para una niña.',
    cta: 'Quiero ser mentora',
    link: 'mailto:fundacionbelong@gmail.com?subject=Quiero%20ser%20mentora%20en%20Programa%20Ra%C3%ADces',
  },
  {
    profile: 'Si eres educador o educadora',
    desc: 'Lleva Programa Raíces a tu institución. Trabajamos con colegios, fundaciones y comunidades.',
    cta: 'Llevemos Raíces a mi institución',
    link: 'mailto:fundacionbelong@gmail.com?subject=Llevar%20Programa%20Ra%C3%ADces%20a%20mi%20instituci%C3%B3n',
  },
  {
    profile: 'Si quieres apoyar directamente',
    desc: 'Tu aporte financia talleres y acceso para niñas en comunidades vulnerables.',
    cta: 'Apoyar Programa Raíces',
    link: 'mailto:fundacionbelong@gmail.com?subject=Quiero%20apoyar%20el%20Programa%20Ra%C3%ADces',
  },
];

export default function ImpactoSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitted');
  };

  return (
    <section id="impacto" className="bg-white">
      {/* Hero / Manifiesto */}
      <div className="bg-gradient-to-br from-rosewood/10 via-cream to-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-80 h-80 bg-pale-rosewood rounded-full blur-3xl opacity-30" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6">Nuestro Impacto</p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-charcoal leading-tight mb-8">
              Cambiar el futuro de las mujeres empieza por cambiar el <span className="text-rosewood italic">presente de las niñas</span>.
            </h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="space-y-6 text-lg text-stone leading-relaxed font-light max-w-3xl mx-auto">
              <p>
                Desde pequeña, una niña recibe mensajes sobre lo que puede llegar a ser: que la ciencia es territorio de otros,
                que su cuerpo define cuánto vale, que hay sueños que simplemente no son para ella.
              </p>
              <p>
                Esos mensajes no llegan de golpe — se acumulan en casa, en el salón de clase, en las pantallas y en todo lo que
                la cultura celebra y lo que decide ignorar.
              </p>
              <p className="text-charcoal font-medium">
                En Fundación Belong creemos que el momento de actuar es en la infancia, antes de que esos mensajes se conviertan en límites.
                Porque cuando una niña siente que pertenece, que su curiosidad importa y que puede elegir su propio camino,
                todo lo que viene después es diferente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Datos */}
      <div className="bg-cream py-24 md:py-40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Los datos</p>
            <h3 className="text-3xl md:text-5xl font-serif font-medium text-charcoal">
              La realidad que nos <span className="text-rosewood italic">motiva</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gold/10"
              >
                <div className="text-5xl font-serif text-rosewood italic mb-2">
                  {stat.number}<span className="text-3xl">{stat.unit}</span>
                </div>
                <p className="text-stone leading-relaxed mb-3">{stat.desc}</p>
                <p className="text-xs text-stone/50">{stat.source}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gold/10">
            <p className="text-stone leading-relaxed">
              <span className="text-rosewood font-medium">Nota:</span> La razón principal por la que las niñas no eligen ciencia o tecnología no es aptitud: 
              son los procesos de socialización y los estereotipos que absorben desde la infancia.
            </p>
            <p className="text-xs text-stone/50 mt-2">Fuente: CEPAL – ONU Mujeres, Indicadores de Género 2024</p>
          </div>
        </div>
      </div>

      {/* Programa Raíces */}
      <div className="py-24 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Programa Raíces</p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-charcoal leading-tight mb-6">
              Programa Raíces de <span className="text-rosewood italic">Fundación Belong</span>
            </h2>
            <p className="text-xl text-stone font-light max-w-3xl mx-auto">
              Sembramos confianza en la infancia para cosechar liderazgo en el futuro
            </p>
          </motion.div>

          <div className="mb-16">
            <p className="text-lg text-stone leading-relaxed max-w-4xl mx-auto text-center mb-16">
              El programa Raíces de la Fundación Belong acompaña a niñas, familias y educadores para construir una formación
              donde la identidad de una niña se define por su curiosidad, su talento y sus sueños y no por mandatos
              que limitan lo que puede llegar a ser.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="card-lift bg-cream rounded-2xl border border-gold/10 overflow-hidden text-center"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif text-charcoal mb-4">{pillar.title}</h3>
                    <p className="text-stone leading-relaxed text-sm">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modelo de Impacto */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-charcoal to-charcoal/95 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden mb-20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Modelo de Impacto</p>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">
                Cuando una empresa contrata Belong, <span className="text-rosewood italic">genera dos impactos</span>
              </h3>
              <p className="text-white/70 leading-relaxed max-w-2xl mb-10">
                Transforma su cultura organizacional y financia el acceso gratuito de niñas y familias al Programa Raíces. 
                Cada peso invertido en cultura corporativa llega también a una comunidad.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Empresa →', 'Servicio Belong →', 'Fondos Raíces →', 'Niñas y familias'].map((step, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2 text-gold font-serif">
                      {i + 1}
                    </div>
                    <p className="text-sm text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cómo Sumarte */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Cómo Sumarte</p>
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-12">
              Cuatro formas de <span className="text-rosewood italic">participar</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {waysToJoin.map((way, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="card-lift bg-cream rounded-2xl p-8 border border-gold/10"
                >
                  <h4 className="font-serif text-charcoal text-lg mb-3">{way.profile}</h4>
                  <p className="text-stone leading-relaxed mb-6">{way.desc}</p>
                  <a
                    href={way.link}
                    className="inline-flex items-center gap-2 text-gold font-medium hover:text-dark-gold transition-colors"
                  >
                    {way.cta} <span>→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* En Construcción + Formulario */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-soft-rose rounded-2xl p-10 md:p-16 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 text-3xl">
              🌱
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-charcoal mb-4">
              Estamos <span className="text-rosewood italic">sembrando</span>
            </h3>
            <p className="text-stone max-w-2xl mx-auto mb-8 leading-relaxed">
              Programa Raíces está en su fase de diseño y las primeras semillas se están plantando. 
              Si quieres ser parte desde el inicio — como aliada, mentora, institución o patrocinador — este es el momento. 
              Las personas que llegan primero son las que dan forma a lo que construimos juntos.
            </p>

            {formStatus === 'idle' ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold text-sm"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold text-sm"
                />
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold text-sm"
                >
                  <option value="">Selecciona tu rol</option>
                  <option value="empresa">Empresa</option>
                  <option value="educador">Educador/a</option>
                  <option value="profesional">Profesional</option>
                  <option value="otro">Otro</option>
                </select>
                <textarea
                  placeholder="¿Cómo quiero sumarme?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-gold/20 bg-white focus:outline-none focus:border-gold text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-rosewood transition-colors"
                >
                  Quiero ser parte desde el inicio
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-xl p-8 border border-gold/10">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-serif text-charcoal text-xl mb-2">¡Gracias por tu interés!</h4>
                <p className="text-stone">Te contactaremos pronto para contarte más sobre Programa Raíces.</p>
              </div>
            )}

            <p className="text-xs text-stone/50 mt-6">
              Los datos llegan a fundacionbelong@gmail.com
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
