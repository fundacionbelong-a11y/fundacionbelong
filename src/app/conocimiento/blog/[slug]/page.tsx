import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Layout from '../../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../../../lib/blog';
import ShareButtons from './ShareButtons';
import BelongComments from './BelongComments';

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
  const readingTime = Math.max(1, Math.round(post.content.split(/\s+/).length / 190));

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
      <div className="bg-gradient-to-b from-cream to-white border-b border-gold/10">
        <div className="max-w-3xl mx-auto px-6 pt-10 pb-12 md:pb-14">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide uppercase text-stone/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Inicio</Link></li>
              <li aria-hidden="true" className="text-gold/40">/</li>
              <li><Link href="/conocimiento" className="hover:text-gold transition-colors">Conocimiento</Link></li>
              <li aria-hidden="true" className="text-gold/40">/</li>
              <li className="text-charcoal/70 font-medium" aria-current="page">Artículo</li>
            </ol>
          </nav>

          {/* Vertical + tag chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.verticals.map((v) => (
              <span key={v} className="px-3.5 py-1.5 bg-charcoal text-cream text-xs font-semibold tracking-wider uppercase rounded-full">
                {v}
              </span>
            ))}
            {post.tags.slice(0, 4).map((t) => (
              <span key={t} className="px-3.5 py-1.5 border border-gold/50 text-[#8a6a10] text-xs font-medium tracking-wide rounded-full capitalize">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-[3.25rem] font-serif font-medium text-charcoal leading-[1.15] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <p className="text-charcoal">
              <span className="text-stone/50">Por </span>
              <span className="font-medium">{post.author}</span>
            </p>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-gold/60" />
            <p className="text-stone/60">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-gold/60" />
            <p className="text-stone/60">{readingTime} min de lectura</p>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-6 -mt-1 pt-10">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full rounded-2xl object-cover shadow-[0_30px_60px_-25px_rgba(68,64,60,0.35)]"
            priority
          />
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pt-14 pb-16 md:pt-16">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {post.share !== false && (
          <section className="mt-16 pt-10 border-t border-gold/15">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone/50 mb-6">
              Comparte este artículo
            </h2>
            <ShareButtons title={post.title} />
          </section>
        )}
        {post.comments !== false && (
          <section className="mt-12">
            <BelongComments slug={post.slug} />
          </section>
        )}
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
