'use client';

import { useState } from 'react';

type Variant = 'dark' | 'light';

export default function NewsletterForm({
  source = 'newsletter',
  variant = 'dark',
}: {
  source?: string;
  variant?: Variant;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setError(data.error ?? 'No se pudo suscribir.');
        return;
      }
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
      setError('No se pudo suscribir. Intenta de nuevo.');
    }
  };

  const inputClass =
    variant === 'dark'
      ? 'flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold text-sm'
      : 'flex-1 px-5 py-3 rounded-full bg-white border border-gold/20 text-charcoal placeholder:text-stone/30 focus:outline-none focus:border-gold text-sm';

  if (status === 'sent') {
    return (
      <p className="text-gold text-sm font-medium">
        ✓ ¡Listo! Te avisaremos cuando lancemos el newsletter.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold/90 transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'sending' ? 'Enviando...' : 'Suscribirme'}
        </button>
      </div>
      {error && (
        <p className="text-sm mt-2 text-rosewood">{error}</p>
      )}
    </form>
  );
}
