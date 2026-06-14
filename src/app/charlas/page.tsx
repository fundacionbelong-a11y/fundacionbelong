import type { Metadata } from 'next';
import CharlasSection from '../components/CharlasSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Charlas',
  description: 'Charlas y conferencias de Fundación Belong sobre equidad de género, liderazgo inclusivo y pertenencia — disponibles para empresas, colegios e instituciones en Colombia.',
  alternates: { canonical: 'https://www.fundacionbelong.co/charlas/' },
};

export default function CharlasPage() {
  return (
    <Layout>
      <div className="pt-8">
        <CharlasSection />
      </div>
    </Layout>
  );
}
