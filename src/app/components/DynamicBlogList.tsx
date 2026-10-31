'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface DynamicBlogPost {
  slug: string;
  title: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  verticals: string[];
  image: string | null;
}

const FILTERS = ['Todos', 'Experiencias', 'Formatos', 'Frameworks', 'Opinión'];

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export default function DynamicBlogList({ posts }: { posts: DynamicBlogPost[] }) {
  const [activeVertical, setActiveVertical] = useState('Todos');

  if (posts.length === 0) return null;

  const visible =
    activeVertical === 'Todos'
      ? posts
      : posts.filter((p) => p.verticals.includes(activeVertical));

  return (
    <div className="mb-16">
      {/* Vertical filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => {
          const count =
            f === 'Todos'
              ? posts.length
              : posts.filter((p) => p.verticals.includes(f)).length;
          if (f !== 'Todos' && count === 0) return null;
          return (
            <button
              key={f}
              onClick={() => setActiveVertical(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeVertical === f
                  ? 'bg-charcoal text-white'
                  : 'bg-cream text-stone hover:bg-gold/10'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-stone/60 text-sm">No hay artículos en esta vertical todavía.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group card-lift bg-white rounded-2xl border border-gold/10 overflow-hidden flex flex-col"
            >
              {/* Color header (matches existing cards) */}
              <div className="h-2 bg-gradient-to-r from-rosewood/60 to-gold/60" />
              {post.image && (
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.verticals.map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1 bg-rosewood/10 text-rosewood text-xs font-medium rounded-full"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <h4 className="font-serif text-charcoal text-xl mb-3 leading-snug">{post.title}</h4>
                <p className="text-stone text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
                  <p className="text-xs text-stone/50">{post.author}</p>
                  <p className="text-xs text-stone/40">{formatDate(post.date)}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/conocimiento/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-dark-gold transition-colors"
                  >
                    Leer <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
