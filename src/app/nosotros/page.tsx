import type { Metadata } from 'next';
import QueEsBelongSection from '../components/QueEsBelongSection';
import MisionVisionSection from '../components/MisionVisionSection';
import ValoresSection from '../components/ValoresSection';
import CtaSection from '../components/CtaSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce Fundación Belong — nuestra misión, visión y valores. Una fundación colombiana dedicada a construir entornos donde tod@s puedan desarrollar su potencial con equidad.',
  alternates: { canonical: 'https://www.fundacionbelong.co/nosotros/' },
};

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
