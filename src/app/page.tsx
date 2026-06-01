import HeroSection from './components/HeroSection';
import QueEsBelongSection from './components/QueEsBelongSection';
import MisionVisionSection from './components/MisionVisionSection';
import ValoresSection from './components/ValoresSection';
import DatosHablanSection from './components/DatosHablanSection';
import CtaSection from './components/CtaSection';
import Layout from './components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <QueEsBelongSection />
      <MisionVisionSection />
      <ValoresSection />
      <DatosHablanSection />
      <CtaSection />
    </Layout>
  );
}
