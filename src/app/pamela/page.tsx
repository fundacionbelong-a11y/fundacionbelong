import SobrePamelaSection from '../components/SobrePamelaSection';
import EducacionPodcastSection from '../components/EducacionPodcastSection';
import Layout from '../components/Layout';

export default function PamelaPage() {
  return (
    <Layout>
      <div className="pt-8 md:pt-12">
        <SobrePamelaSection />
        
        {/* Visual divider between Pamela and Education */}
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
