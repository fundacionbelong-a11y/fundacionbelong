import type { MetadataRoute } from 'next';
import { getAllPostsEverywhere, postPath } from '../lib/blog';

const siteUrl = 'https://www.fundacionbelong.org';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsEverywhere();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: '2025-07-15', changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/nosotros/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/servicios/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pamela/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/charlas/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/comunidad/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/conocimiento/`, lastModified: '2025-07-15', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/conocimiento/blog/ladies-first/`, lastModified: '2025-07-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/impacto/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contacto/`, lastModified: '2025-06-01', changeFrequency: 'monthly', priority: 0.6 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}${postPath(post)}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
