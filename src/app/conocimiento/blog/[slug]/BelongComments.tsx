'use client';

import React, { useEffect, useRef, useState } from 'react';

const API_URL = 'https://studio.fundacionbelong.org/api/comments';

interface Comment {
  id: string;
  author: string;
  body: string;
  createdAt: string;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export default function BelongComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [website, setWebsite] = useState(''); // honeypot: debe quedar vacío
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const load = async () => {
    setError(null);
    try {
      const res = await fetch(`${API_URL}?slug=${encodeURIComponent(slug)}`, {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('http');
      const data = await res.json();
      setComments(data.comments || []);
    } catch {
      setError('No pudimos cargar los comentarios. Inténtalo de nuevo en un momento.');
      setComments(null);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSent(false);
    const name = author.trim();
    const body = text.trim();
    if (name.length < 2 || name.length > 60) {
      setFormError('Escribe tu nombre (entre 2 y 60 caracteres).');
      return;
    }
    if (body.length < 3 || body.length > 2000) {
      setFormError('El comentario debe tener entre 3 y 2000 caracteres.');
      return;
    }
    setSending(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, author: name, text: body, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'No pudimos publicar tu comentario.');
      }
      setAuthor('');
      setText('');
      setSent(true);
      await load();
    } catch (err) {
      setFormError(
        err instanceof Error && err.message !== 'No pudimos publicar tu comentario.'
          ? err.message
          : 'No pudimos publicar tu comentario. Inténtalo de nuevo en un momento.'
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-gold/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition';

  return (
    <section className="mt-12 pt-8 border-t border-gold/10" aria-label="Comentarios">
      <h2 className="text-lg font-semibold text-charcoal mb-2">Comentarios</h2>
      <p className="text-xs text-stone/50 mb-6">Los comentarios se moderan.</p>

      {/* Lista de comentarios */}
      {error && !comments && (
        <div className="mb-6">
          <p className="text-sm text-rosewood mb-3">{error}</p>
          <button
            onClick={load}
            className="text-sm text-gold font-medium hover:text-dark-gold transition-colors"
          >
            Reintentar
          </button>
        </div>
      )}
      {!error && comments === null && (
        <p className="text-sm text-stone/50 mb-6">Cargando comentarios…</p>
      )}
      {comments !== null && comments.length === 0 && !error && (
        <p className="text-sm text-stone/50 mb-6">
          Aún no hay comentarios. ¡Sé la primera persona en comentar!
        </p>
      )}
      {comments !== null && comments.length > 0 && (
        <ul className="space-y-6 mb-8">
          {comments.map((c) => (
            <li key={c.id} className="border-l-2 border-gold/30 pl-4">
              <p className="text-sm font-medium text-charcoal">{c.author}</p>
              <p className="text-xs text-stone/50 mb-1">
                <time dateTime={c.createdAt}>{formatDate(c.createdAt)}</time>
              </p>
              {c.body.split(/\n{2,}/).map((p, i) => (
                <p key={i} className="text-sm text-stone leading-relaxed mt-1">
                  {p}
                </p>
              ))}
            </li>
          ))}
        </ul>
      )}

      {/* Mensaje de éxito */}
      {sent && (
        <div className="mb-6 rounded-xl bg-gold/10 border border-gold/20 px-4 py-3">
          <p className="text-sm text-charcoal">
            ¡Gracias! Tu comentario está publicado.
          </p>
        </div>
      )}

      {/* Formulario */}
      <form ref={formRef} onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="belong-comment-name" className="block text-sm font-medium text-charcoal mb-1.5">
            Nombre
          </label>
          <input
            id="belong-comment-name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            maxLength={60}
            required
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="belong-comment-text" className="block text-sm font-medium text-charcoal mb-1.5">
            Comentario
          </label>
          <textarea
            id="belong-comment-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={2000}
            required
            rows={4}
            placeholder="Comparte tu pensamiento…"
            className={inputClass}
          />
          <p className="text-xs text-stone/40 mt-1 text-right">{text.length}/2000</p>
        </div>
        {/* Honeypot: invisible para humanos */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} tabIndex={-1}>
          <label htmlFor="belong-comment-website">Website</label>
          <input
            id="belong-comment-website"
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        {formError && (
          <p className="text-sm text-rosewood" role="alert">
            {formError}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-white hover:bg-dark-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? 'Publicando…' : 'Publicar comentario'}
        </button>
      </form>
    </section>
  );
}
