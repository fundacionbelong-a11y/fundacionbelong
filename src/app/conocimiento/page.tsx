import type { Metadata } from 'next';
import ConocimientoSection from '../components/ConocimientoSection';
import Layout from '../components/Layout';
import { getAllPostsEverywhere, postPath } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Conocimiento',
  description: 'Recursos, artículos y herramientas de Fundación Belong sobre equidad de género, cultura organizacional e inclusión — para aprender y actuar.',
  alternates: { canonical: 'https://www.fundacionbelong.org/conocimiento/' },
};

export default function ConocimientoPage() {
  // Artículos MDX dinámicos commiteados por Belong Studio (content/<sección>).
  // Se pasan sin el cuerpo markdown para no inflar el client bundle.
  const dynamicPosts = getAllPostsEverywhere().map((post) => ({
    slug: post.slug,
    section: post.section,
    sectionName: post.sectionName,
    path: postPath(post),
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
