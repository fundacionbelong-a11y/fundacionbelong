import type { Metadata } from 'next';
import ImpactoSection from '../components/ImpactoSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Impacto',
  description: 'El impacto medible de Fundación Belong — organizaciones transformadas, comunidades fortalecidas y datos que demuestran el valor de la equidad y la pertenencia.',
  alternates: { canonical: 'https://www.fundacionbelong.co/impacto/' },
};

export default function ImpactoPage() {
  return (
    <Layout>
      <div className="pt-8">
        <ImpactoSection />
      </div>
    </Layout>
  );
}
