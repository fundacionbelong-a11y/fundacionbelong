import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug, listSections } from '../../../../lib/blog';
import ArticleView from '../../components/ArticleView';

const siteUrl = 'https://www.fundacionbelong.org';

export function generateStaticParams() {
  const sections = listSections().filter((s) => s !== 'blog');
  return sections.flatMap((section) =>
    getAllSlugs(section).map((slug) => ({ section, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section, slug } = await params;
  const post = getPostBySlug(slug, section);
  if (!post) return {};

  const url = `${siteUrl}/conocimiento/${post.section}/${post.slug}/`;
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
      section: post.sectionName,
      ...(post.image
        ? { images: [{ url: post.image, alt: post.title }] }
        : {}),
    },
  };
}

export default async function SectionPostPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  const post = getPostBySlug(slug, section);
  if (!post) notFound();

  return <ArticleView post={post} />;
}
