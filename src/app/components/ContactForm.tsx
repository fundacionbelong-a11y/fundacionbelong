'use client';

import { useState } from 'react';

export default function ContactForm({ source = 'contacto' }: { source?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setError(data.error ?? 'No se pudo enviar el mensaje.');
        return;
      }
      setStatus('sent');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch {
      setStatus('error');
      setError('No se pudo enviar el mensaje. Intenta de nuevo.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-cream rounded-2xl p-8 md:p-10 border border-gold/10 text-center">
        <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-serif text-charcoal mb-2">¡Mensaje enviado!</h3>
        <p className="text-stone text-sm mb-6">Gracias por escribirnos. Te responderemos lo antes posible.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-gold text-sm font-medium hover:text-dark-gold transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-8 md:p-10 border border-gold/10">
      <h3 className="text-xl font-serif text-charcoal mb-6">Escríbenos</h3>

      {error && (
        <div className="bg-rosewood/10 text-rosewood text-sm px-4 py-3 rounded-xl mb-4">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-stone/70 mb-1.5">Nombre *</label>
          <input
            type="text" required value={name} onChange={e => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone/70 mb-1.5">Correo *</label>
          <input
            type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone/70 mb-1.5">Asunto</label>
          <input
            type="text" value={subject} onChange={e => setSubject(e.target.value)}
            placeholder="¿Sobre qué nos escribes?"
            className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone/70 mb-1.5">Mensaje *</label>
          <textarea
            required value={message} onChange={e => setMessage(e.target.value)}
            placeholder="Cuéntanos en qué podemos ayudarte..." rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-rosewood transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  );
}
