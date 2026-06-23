import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '../../../components/Layout';

export const metadata: Metadata = {
  title: 'Ladies First: el espejo que no miente — Fundación Belong',
  description: 'Análisis de la película Ladies First por Pamela López Zúñiga y Martha Lucía Cano. El humor como espejo de la desigualdad de género y el reto de imaginar un mundo que aún no hemos construido.',
  keywords: ['Ladies First', 'equidad de género', 'análisis de cine', 'Pamela López', 'Fundación Belong', 'feminismo', 'Colombia'],
  alternates: { canonical: 'https://www.fundacionbelong.co/conocimiento/blog/ladies-first/' },
  openGraph: {
    title: 'Ladies First: el espejo que no miente',
    description: 'El humor como herramienta para mostrar lo que es habitar en un mundo que no fue diseñado para ti.',
    type: 'article',
    locale: 'es_CO',
    publishedTime: '2024-01-01T00:00:00Z',
    authors: ['Pamela López Zúñiga', 'Martha Lucía Cano'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ladies First: el espejo que no miente y el reto de imaginar lo que aún no hemos construido',
  description: 'Análisis de la película Ladies First: el humor como espejo de la desigualdad de género.',
  author: [
    { '@type': 'Person', name: 'Pamela López Zúñiga', url: 'https://www.fundacionbelong.co/pamela/' },
    { '@type': 'Person', name: 'Martha Lucía Cano' },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Fundación Belong',
    url: 'https://www.fundacionbelong.co',
  },
  mainEntityOfPage: 'https://www.fundacionbelong.co/conocimiento/blog/ladies-first/',
  inLanguage: 'es',
  keywords: 'equidad de género, Ladies First, análisis de cine, liderazgo femenino, Colombia',
};

export default function LadiesFirstPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <div className="bg-white border-b border-gold/10">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">

          {/* Back link */}
          <Link
            href="/conocimiento"
            className="inline-flex items-center gap-2 text-sm text-stone/60 hover:text-gold transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Conocimiento
          </Link>

          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-rosewood/10 text-rosewood text-xs font-medium rounded-full">Análisis de cine</span>
            <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">Equidad de género</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-4">
            Ladies First: <span className="text-rosewood italic">el espejo que no miente</span>
          </h1>
          <p className="text-xl text-stone/70 font-light mb-8 leading-relaxed">
            y el reto de imaginar lo que aún no hemos construido
          </p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-gold mb-6" />

          {/* Authors */}
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-medium text-charcoal tracking-widest uppercase">
                Pamela López Zúñiga · Martha Lucía Cano
              </p>
              <p className="text-xs text-stone/50 mt-0.5">Fundación Belong</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Intro paragraph */}
        <p className="text-xl text-stone leading-relaxed mb-8 font-light">
          Esta película deja un mensaje contundente a través de la poderosa comedia. Logra entretener, pero al mismo tiempo muestra la realidad con una precisión tan quirúrgica que muchas veces estuve a punto de llorar. A la vez, poner a los hombres en la posición de las mujeres logra su misión de develar la realidad que muchas veces es invisible. El mundo paralelo que construye la película es una fantasía útil pero incompleta. Incompleta porque ese mundo sigue siendo hostil, sigue sexualizando cuerpos, sigue castigando la emoción. Si las mujeres hubiéramos definido las estructuras desde el origen, el resultado sería algo fundamentalmente distinto.
        </p>

        <p className="text-stone leading-relaxed mb-6">
          Una introducción muy conocida en el género de la comedia: un hombre exitoso, con poder, dinero y una vida construida sobre los privilegios. Pero hay una escena entre los primeros quince minutos que define, según mi opinión, el origen de la problemática, y es el cumpleaños de su mamá.
        </p>

        {/* Blockquote 1 */}
        <blockquote className="border-l-2 border-rosewood pl-6 my-8 py-2">
          <p className="text-stone italic leading-relaxed">
            El papá y el hermano están en el sofá mientras ella atiende la cocina. Cuando él llega, le piden que sirva. La mamá le reclama por no estar casado, no le deja llevar un plato porque él &ldquo;trabaja&rdquo; y debe estar cansado, y cuando él hace un chiste sobre haberse pasado el fin de semana con seis mujeres, es ella misma quien celebra y se ríe.
          </p>
        </blockquote>

        <p className="text-stone leading-relaxed mb-6">
          El sistema se sostiene por toda la comunidad, incluidas las mujeres que lo enseñan, que definen el lugar de sus hijos en el mundo, que priorizan su descanso, que aplauden las conductas que después las lastiman en otras formas. Pero cuidado: no es que la madre sea una villana. Es una víctima que aprendió a sobrevivir dentro de las reglas y terminó siendo su mejor guardiana.
        </p>

        <p className="text-stone leading-relaxed mb-6">
          De repente, de nuevo en el trabajo, tras una discusión con la nueva directora creativa, recibe un golpe en la cabeza y despierta en un mundo paralelo donde las reglas del juego están invertidas, las mujeres mandan. Y lo que antes él le hacía a otras, ahora se lo hacen a él.
        </p>

        {/* Blockquote 2 */}
        <blockquote className="border-l-2 border-gold pl-6 my-8 py-2">
          <p className="text-charcoal italic leading-relaxed font-medium">
            Empieza una secuencia de escenas que libera del público carcajadas, pero solo es chistoso porque retrata lo que se ve hoy pero del lado equivocado. Entonces, ¿por qué si lo vemos todos los días y lo vivimos en carne propia, no estamos riendo el día entero?
          </p>
        </blockquote>

        <p className="text-stone leading-relaxed mb-6">
          Cuando al protagonista no lo dejan hablar en una reunión y le dicen que no se ponga emocional. Cuando le explican que para ascender tiene que verse bien pero no demasiado bien. Cuando su jefa le propone hablar de su ascenso en la cama. Cuando la publicidad sexualiza su cuerpo. O cuando llora de orgullo y le dicen que eso no se hace en el trabajo.
        </p>

        <p className="text-stone leading-relaxed mb-6">
          Algunas de esas escenas resultan tan absurdas que cuesta creer que ocurran de verdad. Hace falta cambiar la figura del protagonista, un hombre, por la de una mujer para reconocer que, en realidad, son situaciones cotidianas. Cuando no lo dejan hablar en una reunión, por ejemplo, él se va frustrando poco a poco, hasta que quienes lo rodean concluyen que simplemente es demasiado emocional. En realidad, su reacción no es otra cosa que la respuesta natural de alguien que ha sido silenciado de manera constante y ha visto sus ideas ignoradas una y otra vez. A las mujeres se nos ha etiquetado durante tanto tiempo como emocionales que incluso hemos terminado por creerlo, cuando muchas veces esa emoción no es más que la consecuencia de sentir que no tenemos agencia sobre nuestras vidas públicas y privadas.
        </p>

        <p className="text-stone leading-relaxed mb-6">
          Algo similar ocurre en otra de las escenas más absurdas de la película, cuando la protagonista cuenta que su exesposo la engañó haciéndole creer que tomaba anticonceptivos y lo responsabiliza de que ahora ella tenga que hacerse cargo de un hijo. Escuchado en boca de una mujer, el comentario provoca risa precisamente por lo disparatado que parece. Sin embargo, al invertir los papeles, la película expone una práctica cultural profundamente normalizada: culpar a las mujeres por los embarazos no planeados y presentarlas como las responsables de una situación en la que los hombres aparecen como las verdaderas víctimas obligadas a responder por sus hijos.
        </p>

        <p className="text-stone leading-relaxed mb-12">
          La apuesta de la película es usar el humor como herramienta para mostrarle a los que no lo han vivido lo que es habitar en un mundo que no fue diseñado para ti. Y considero que es muy exitosa. Los datos, los informes, las estadísticas y los largos discursos no han llegado a generar esa empatía que se necesita para realmente revisar dentro de nuestra moral y poder admitir que reconocemos que así efectivamente es la situación.
        </p>

        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-serif text-rosewood mb-6">
          El mundo paralelo que nos falta
        </h2>

        <p className="text-stone leading-relaxed mb-6">
          Y aquí es donde tenemos que leer muy bien la película. El universo paralelo al que despierta el protagonista no es una utopía. Es un patriarcado en el que mandan las mujeres. Los hombres son objetificados, ignorados, condicionados a ocupar poco espacio. La violencia estructural sigue ahí, solo se invirtieron los protagonistas. Y es lo que tenía que hacer la película para que el hombre entendiera lo que estaba pasando. Pero no se está afirmando que si las mujeres estuviéramos al poder y hubiéramos construido el sistema económico y de cuidado sería tal cual lo muestran.
        </p>

        <p className="text-stone leading-relaxed mb-8">
          Un mundo liderado por mujeres no sería ese mundo. El prefijo matri viene de madre, de origen, de fundación y no de control. La evidencia muestra que las comunidades humanas con estructuras matriarcales se organizan sobre relaciones de género equilibradas, toma de decisiones por consenso y redistribución de recursos. La ciencia ha señalado que los países con mayor igualdad de género tienen tasas significativamente menores de violencia. Los vecindarios donde las normas son más equitativas ven menos violencia perpetrada incluso por los niños que crecen en ellos. La violación es prácticamente desconocida en comunidades matriarcales humanas. Los bonobos, nuestros primos evolutivos más cercanos, son matriarcales y resuelven sus conflictos a través del juego y la conexión, no de la dominación. Las mujeres han construido comunidades basadas sobre el cuidado, la colaboración y la inclusión.
        </p>

        {/* Visual separator */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gold/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        <p className="text-stone leading-relaxed mb-6">
          La propuesta entonces es que se construya otra cosa. Un mundo donde el cuidado no sea una carga invisible. Donde el tiempo tenga valor. Donde los niños no crezcan entrenados para la guerra y la dureza. Donde la emoción sea información y no debilidad. Donde nadie tenga que elegir entre ser tomado en serio y ser tratado con dignidad.
        </p>

        <p className="text-stone leading-relaxed mb-6">
          El protagonista de Ladies First no cambia porque el mundo paralelo sea mejor. Cambia porque por primera vez siente en carne propia lo que significa que el sistema no esté hecho para ti. Esa empatía encarnada, ese momento en que el privilegio deja de ser abstracto y se vuelve experiencia, es el verdadero motor de la transformación.
        </p>

        <p className="text-stone leading-relaxed mb-12">
          Ese cierre de la película resulta además significativo porque se aparta de lo que normalmente entendemos como un final feliz. Tras su transformación, el protagonista busca a la protagonista, pero no para conquistarla ni para declararle su amor. Va a proponerle una relación laboral entre pares, un espacio donde ambos tengan las mismas oportunidades y donde ella pueda destacar por su propio talento.
        </p>

        {/* Download CTA */}
        <div className="bg-cream rounded-2xl p-8 border border-gold/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-1">Artículo completo</p>
            <p className="text-charcoal font-serif text-lg">Descarga el PDF original</p>
            <p className="text-stone text-sm mt-1">Pamela López Zúñiga · Martha Lucía Cano · Fundación Belong</p>
          </div>
          <a
            href="/ladies-first-belong.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-rosewood transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar PDF
          </a>
        </div>

      </article>

      {/* Footer nav */}
      <div className="border-t border-gold/10 bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/conocimiento" className="text-sm text-stone/60 hover:text-gold transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Conocimiento
          </Link>
          <a
            href="mailto:fundacionbelong@gmail.com?subject=Sobre%20el%20art%C3%ADculo%20Ladies%20First"
            className="text-sm text-gold font-medium hover:text-dark-gold transition-colors"
          >
            ¿Tienes algo que agregar? Escríbenos →
          </a>
        </div>
      </div>
    </Layout>
  );
}
