import HeroSection from './components/HeroSection';
import QueEsBelongSection from './components/QueEsBelongSection';
import DatosHablanSection from './components/DatosHablanSection';
import SobrePamelaSection from './components/SobrePamelaSection';
import MisionVisionSection from './components/MisionVisionSection';
import ValoresSection from './components/ValoresSection';
import CtaSection from './components/CtaSection';
import Layout from './components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <QueEsBelongSection />
      <DatosHablanSection />
      <SobrePamelaSection />
      <MisionVisionSection />
      <ValoresSection />
      <CtaSection />
    </Layout>
  );
}
