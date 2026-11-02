import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string; // slug del archivo (único por sección)
  section: string; // directorio bajo content/ (p. ej. "blog" o una sección nueva)
  sectionName: string; // nombre legible de la sección (frontmatter sectionName o el slug)
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

const contentRoot = path.join(process.cwd(), 'content');

function sectionDir(section: string): string {
  // blindaje básico contra path traversal
  if (!/^[a-z0-9-]+$/.test(section)) return path.join(contentRoot, '__invalid__');
  return path.join(contentRoot, section);
}

/** Lista las secciones de contenido existentes (directorios bajo content/ con .mdx). */
export function listSections(): string[] {
  if (!fs.existsSync(contentRoot)) return [];
  return fs
    .readdirSync(contentRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => {
      const dir = path.join(contentRoot, name);
      return fs.readdirSync(dir).some((f) => f.endsWith('.mdx'));
    })
    .sort();
}

function parsePost(section: string, slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent);

  return {
    slug,
    section,
    sectionName: typeof data.sectionName === 'string' && data.sectionName.length > 0 ? data.sectionName : section,
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

function readSectionPosts(section: string): BlogPost[] {
  const dir = sectionDir(section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const fileContent = fs.readFileSync(path.join(dir, filename), 'utf8');
      return parsePost(section, slug, fileContent);
    });
}

/** Todos los posts de una sección (por defecto "blog"), fecha descendente. */
export function getAllPosts(section: string = 'blog'): BlogPost[] {
  return readSectionPosts(section).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Todos los posts de todas las secciones, fecha descendente. */
export function getAllPostsEverywhere(): BlogPost[] {
  return listSections()
    .flatMap((s) => readSectionPosts(s))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, section: string = 'blog'): BlogPost | null {
  const filePath = path.join(sectionDir(section), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return parsePost(section, slug, fs.readFileSync(filePath, 'utf8'));
}

export function getAllSlugs(section: string = 'blog'): string[] {
  const dir = sectionDir(section);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

/** Slug del artículo dentro de la ruta /conocimiento/<section>/<slug>/. */
export function postPath(post: BlogPost): string {
  return `/conocimiento/${post.section}/${post.slug}/`;
}
