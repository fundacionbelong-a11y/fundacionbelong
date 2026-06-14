import type { Metadata } from 'next';
import ServiciosMarthaSection from '../components/ServiciosMarthaSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Talleres, conferencias, consultoría y acompañamiento para construir culturas inclusivas con equidad de género y liderazgo consciente en tu organización.',
  alternates: { canonical: 'https://www.fundacionbelong.co/servicios/' },
};

export default function ServiciosPage() {
  return (
    <Layout>
      <div className="pt-8">
        <ServiciosMarthaSection />
      </div>
    </Layout>
  );
}
