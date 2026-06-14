import type { Metadata } from 'next';
import EducacionPodcastSection from '../components/EducacionPodcastSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Pamela López — Fundadora',
  description: 'Pamela López, fundadora de Fundación Belong. Líder en equidad de género, diversidad e inclusión en Colombia con amplia trayectoria transformando organizaciones y comunidades.',
  alternates: { canonical: 'https://www.fundacionbelong.co/pamela/' },
};

export default function PamelaPage() {
  return (
    <Layout>
      <div className="pt-8 md:pt-12">
        {/* Redirect notice */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Perfil de nuestra fundadora
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
              Conoce a <span className="text-rosewood italic">Pamela López</span>
            </h2>
            <p className="text-stone max-w-2xl mx-auto mb-8">
              El perfil completo de nuestra fundadora ahora está en la página principal. 
              Visítalo para conocer su trayectoria, experiencia y visión.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full hover:bg-rosewood transition-colors text-sm font-medium"
            >
              Ver perfil en inicio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Visual divider */}
        <div className="py-12 md:py-16 bg-gradient-to-b from-white via-cream to-soft-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-serif text-rosewood/40">Be. BeU. Belong.</span>
                <span className="text-xs text-stone/40 mt-1 tracking-wider">Educación y Conocimiento</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>
          </div>
        </div>
        
        <EducacionPodcastSection />
      </div>
    </Layout>
  );
}
