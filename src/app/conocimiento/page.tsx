import type { Metadata } from 'next';
import ConocimientoSection from '../components/ConocimientoSection';
import Layout from '../components/Layout';
import { getAllPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Conocimiento',
  description: 'Recursos, artículos y herramientas de Fundación Belong sobre equidad de género, cultura organizacional e inclusión — para aprender y actuar.',
  alternates: { canonical: 'https://www.fundacionbelong.org/conocimiento/' },
};

export default function ConocimientoPage() {
  // Artículos MDX dinámicos commiteados por Belong Studio (content/blog).
  // Se pasan sin el cuerpo markdown para no inflar el client bundle.
  const dynamicPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    author: post.author,
    excerpt: post.excerpt,
    verticals: post.verticals,
    image: post.image,
  }));

  return (
    <Layout>
      <div className="pt-8">
        <ConocimientoSection dynamicPosts={dynamicPosts} />
      </div>
    </Layout>
  );
}
