import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import QueEsBelongSection from './components/QueEsBelongSection';
import DatosHablanSection from './components/DatosHablanSection';
import MisionVisionSection from './components/MisionVisionSection';
import ValoresSection from './components/ValoresSection';
import CtaSection from './components/CtaSection';
import SobrePamelaSection from './components/SobrePamelaSection';
import EducacionPodcastSection from './components/EducacionPodcastSection';
import CharlasSection from './components/CharlasSection';
import ServiciosMarthaSection from './components/ServiciosMarthaSection';
import ComunidadSection from './components/ComunidadSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QueEsBelongSection />
      <DatosHablanSection />
      <MisionVisionSection />
      <ValoresSection />
      <CtaSection />
      <SobrePamelaSection />
      <EducacionPodcastSection />
      <CharlasSection />
      <ServiciosMarthaSection />
      <ComunidadSection />
      <FooterSection />
    </main>
  );
}
