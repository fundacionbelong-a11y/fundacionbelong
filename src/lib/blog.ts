import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  tags: string[];
  verticals: string[];
  image: string | null;
  comments: boolean;
  share: boolean;
  content: string; // markdown body
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

function parsePost(slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || 'Sin título',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Pamela López Zúñiga',
    excerpt: data.excerpt || content.trim().slice(0, 200),
    tags: Array.isArray(data.tags) ? data.tags : [],
    verticals: Array.isArray(data.verticals) ? data.verticals : [],
    image: typeof data.image === 'string' && data.image.length > 0 ? data.image : null,
    comments: data.comments !== false,
    share: data.share !== false,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    return parsePost(slug, fileContent);
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return parsePost(slug, fs.readFileSync(filePath, 'utf8'));
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
