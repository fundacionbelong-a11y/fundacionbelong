import QueEsBelongSection from '../components/QueEsBelongSection';
import MisionVisionSection from '../components/MisionVisionSection';
import ValoresSection from '../components/ValoresSection';
import CtaSection from '../components/CtaSection';
import Layout from '../components/Layout';

export default function NosotrosPage() {
  return (
    <Layout>
      <div className="pt-8">
        <QueEsBelongSection />
        <MisionVisionSection />
        <ValoresSection />
        <CtaSection />
      </div>
    </Layout>
  );
}
