import type { Metadata } from 'next';
import ComunidadSection from '../components/ComunidadSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Comunidad',
  description: 'Únete a la comunidad Belong — un espacio para mujeres, aliados y organizaciones que trabajan por entornos donde tod@s sientan que pertenecen.',
  alternates: { canonical: 'https://www.fundacionbelong.co/comunidad/' },
};

export default function ComunidadPage() {
  return (
    <Layout>
      <div className="pt-8">
        <ComunidadSection />
      </div>
    </Layout>
  );
}
