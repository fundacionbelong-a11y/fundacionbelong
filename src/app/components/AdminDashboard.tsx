'use client';

import { useState } from 'react';
import AdminUsersClient, { type AdminUser } from './AdminUsersClient';

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  source: string | null;
  created_at: string;
};

export type Subscriber = {
  id: number;
  email: string;
  source: string | null;
  created_at: string;
};

function downloadCSV(filename: string, headers: string[], rows: string[][]) {
  const escape = (s: string) => `"${String(s ?? '').replace(/"/g, '""')}"`;
  const csv = [headers, ...rows].map(r => r.map(escape).join(',')).join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function AdminDashboard({
  users,
  messages,
  subscribers,
}: {
  users: AdminUser[];
  messages: ContactMessage[];
  subscribers: Subscriber[];
}) {
  const [tab, setTab] = useState<'users' | 'messages' | 'subscribers'>('users');

  const tabs = [
    { id: 'users' as const, label: 'Usuarios', count: users.length },
    { id: 'messages' as const, label: 'Mensajes', count: messages.length },
    { id: 'subscribers' as const, label: 'Suscriptores', count: subscribers.length },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gold/10">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors relative ${
              tab === t.id ? 'text-charcoal' : 'text-stone/50 hover:text-stone'
            }`}
          >
            {t.label}
            <span className="ml-2 px-2 py-0.5 bg-cream text-stone/60 text-xs rounded-full">{t.count}</span>
            {tab === t.id && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gold" />}
          </button>
        ))}
      </div>

      {tab === 'users' && <AdminUsersClient users={users} />}

      {tab === 'messages' && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-stone/60">
              {messages.length} {messages.length === 1 ? 'mensaje recibido' : 'mensajes recibidos'}
            </p>
            <button
              onClick={() =>
                downloadCSV(
                  `belong-mensajes-${new Date().toISOString().slice(0, 10)}.csv`,
                  ['Nombre', 'Correo', 'Asunto', 'Mensaje', 'Origen', 'Fecha'],
                  messages.map(m => [m.name, m.email, m.subject ?? '', m.message, m.source ?? '', m.created_at])
                )
              }
              disabled={messages.length === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-rosewood transition-colors disabled:opacity-40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Exportar CSV
            </button>
          </div>

          {messages.length === 0 ? (
            <div className="bg-cream rounded-2xl p-12 text-center border border-gold/10">
              <p className="text-stone/60">Aún no hay mensajes de contacto.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map(m => (
                <div key={m.id} className="bg-white rounded-2xl p-6 border border-gold/10">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="font-medium text-charcoal">{m.name}</p>
                      <a href={`mailto:${m.email}`} className="text-sm text-gold hover:underline">{m.email}</a>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-stone/50">{m.created_at}</p>
                      {m.source && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-cream text-stone/60 text-xs rounded-full">{m.source}</span>
                      )}
                    </div>
                  </div>
                  {m.subject && <p className="text-sm font-medium text-charcoal mb-1">{m.subject}</p>}
                  <p className="text-stone text-sm leading-relaxed whitespace-pre-wrap">{m.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'subscribers' && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-stone/60">
              {subscribers.length} {subscribers.length === 1 ? 'suscriptor' : 'suscriptores'}
            </p>
            <button
              onClick={() =>
                downloadCSV(
                  `belong-suscriptores-${new Date().toISOString().slice(0, 10)}.csv`,
                  ['Correo', 'Origen', 'Fecha'],
                  subscribers.map(s => [s.email, s.source ?? '', s.created_at])
                )
              }
              disabled={subscribers.length === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-rosewood transition-colors disabled:opacity-40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Exportar CSV
            </button>
          </div>

          {subscribers.length === 0 ? (
            <div className="bg-cream rounded-2xl p-12 text-center border border-gold/10">
              <p className="text-stone/60">Aún no hay suscriptores al newsletter.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-gold/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cream text-left">
                    <th className="px-5 py-3.5 font-medium text-stone/70">Correo</th>
                    <th className="px-5 py-3.5 font-medium text-stone/70">Origen</th>
                    <th className="px-5 py-3.5 font-medium text-stone/70 whitespace-nowrap">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((s, i) => (
                    <tr key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/40'}>
                      <td className="px-5 py-3.5 text-charcoal">{s.email}</td>
                      <td className="px-5 py-3.5">
                        <span className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">{s.source ?? '—'}</span>
                      </td>
                      <td className="px-5 py-3.5 text-stone/60 whitespace-nowrap">{s.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
