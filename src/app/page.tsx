import HeroSection from './components/HeroSection';
import QueEsBelongSection from './components/QueEsBelongSection';
import MisionVisionSection from './components/MisionVisionSection';
import ValoresSection from './components/ValoresSection';
import SobrePamelaSection from './components/SobrePamelaSection';
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
      <SobrePamelaSection />
      <DatosHablanSection />
      <CtaSection />
    </Layout>
  );
}
