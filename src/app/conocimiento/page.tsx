import type { Metadata } from 'next';
import ConocimientoSection from '../components/ConocimientoSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Conocimiento',
  description: 'Recursos, artículos y herramientas de Fundación Belong sobre equidad de género, cultura organizacional e inclusión — para aprender y actuar.',
  alternates: { canonical: 'https://www.fundacionbelong.co/conocimiento/' },
};

export default function ConocimientoPage() {
  return (
    <Layout>
      <div className="pt-8">
        <ConocimientoSection />
      </div>
    </Layout>
  );
}
