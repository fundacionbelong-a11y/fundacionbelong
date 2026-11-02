import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '../../../../lib/blog';
import ArticleView from '../../components/ArticleView';

const siteUrl = 'https://www.fundacionbelong.org';

export function generateStaticParams() {
  return getAllSlugs('blog').map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');
  if (!post) return {};

  const url = `${siteUrl}/conocimiento/blog/${post.slug}/`;
  return {
    title: `${post.title} — Fundación Belong`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'es_CO',
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      ...(post.image
        ? { images: [{ url: post.image, alt: post.title }] }
        : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');
  if (!post) notFound();

  return <ArticleView post={post} />;
}
