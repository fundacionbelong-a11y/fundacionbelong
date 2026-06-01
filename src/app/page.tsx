import HeroSection from './components/HeroSection';
import QueEsBelongSection from './components/QueEsBelongSection';
import DatosHablanSection from './components/DatosHablanSection';
import Layout from './components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <QueEsBelongSection />
      <DatosHablanSection />
    </Layout>
  );
}
