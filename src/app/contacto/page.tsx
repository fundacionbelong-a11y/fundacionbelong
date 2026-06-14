import type { Metadata } from 'next';
import ContactSection from '../components/ContactSection';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos para construir junt@s una cultura de pertenencia en tu organización, institución o comunidad. Fundación Belong — Bogotá, Colombia.',
  alternates: { canonical: 'https://www.fundacionbelong.co/contacto/' },
};

export default function ContactoPage() {
  return (
    <Layout>
      <div className="pt-8">
        <ContactSection />
      </div>
    </Layout>
  );
}
