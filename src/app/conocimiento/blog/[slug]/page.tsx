import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Layout from '../../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../../../lib/blog';
import ShareButtons from './ShareButtons';
import GiscusComments from './GiscusComments';

const siteUrl = 'https://www.fundacionbelong.org';

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleUrl = `${siteUrl}/conocimiento/blog/${post.slug}/`;
  const html = marked.parse(post.content, { async: false }) as string;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${siteUrl}${post.image}` : undefined,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Fundación Belong',
      url: siteUrl,
      logo: `${siteUrl}/logo-belong.png`,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: articleUrl,
    inLanguage: 'es',
    keywords: post.tags.join(', '),
  };

  return (
    <Layout>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Article header */}
      <div className="bg-white border-b border-gold/10">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
          <Link
            href="/conocimiento"
            className="inline-flex items-center gap-2 text-sm text-stone/60 hover:text-gold transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Conocimiento
          </Link>

          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone/60">
              <li><Link href="/" className="hover:text-gold transition-colors">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/conocimiento" className="hover:text-gold transition-colors">Conocimiento</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/conocimiento" className="hover:text-gold transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal font-medium" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          {/* Vertical + tag chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.verticals.map((v) => (
              <span key={v} className="px-3 py-1 bg-rosewood/10 text-rosewood text-xs font-medium rounded-full">
                {v}
              </span>
            ))}
            {post.tags.map((t) => (
              <span key={t} className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-medium text-charcoal leading-tight mb-4">
            {post.title}
          </h1>

          <div className="w-12 h-0.5 bg-gold mb-6" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div>
              <p className="text-sm font-medium text-charcoal tracking-widest uppercase">{post.author}</p>
              <p className="text-xs text-stone/50 mt-0.5">Fundación Belong</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gold/30" />
            <p className="text-sm text-stone/60">
              Publicado el{' '}
              <time dateTime={post.date} className="font-medium text-charcoal">
                {formatDate(post.date)}
              </time>
            </p>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {post.image && (
        <div className="max-w-3xl mx-auto px-6 pt-12">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full rounded-2xl object-cover"
            priority
          />
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {post.share !== false && <ShareButtons title={post.title} />}
        {post.comments !== false && <GiscusComments />}
      </article>

      {/* Footer nav */}
      <div className="border-t border-gold/10 bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/conocimiento" className="text-sm text-stone/60 hover:text-gold transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Conocimiento
          </Link>
          <a
            href={`mailto:fundacionbelong@gmail.com?subject=Sobre%20el%20art%C3%ADculo%20${encodeURIComponent(post.title)}`}
            className="text-sm text-gold font-medium hover:text-dark-gold transition-colors"
          >
            ¿Tienes algo que agregar? Escríbenos →
          </a>
        </div>
      </div>
    </Layout>
  );
}
