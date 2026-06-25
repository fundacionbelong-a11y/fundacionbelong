'use client';

import { useState, useMemo } from 'react';

export type AdminUser = {
  name: string | null;
  email: string;
  role: string;
  metodo: string;
  providers: string;
  registrado: string;
};

export default function AdminUsersClient({ users }: { users: AdminUser[] }) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return users;
    return users.filter(
      u =>
        (u.name ?? '').toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  }, [users, search]);

  const exportCSV = () => {
    const headers = ['Nombre', 'Correo', 'Método', 'Proveedores', 'Rol', 'Registrado'];
    const rows = filtered.map(u => [
      u.name ?? '',
      u.email,
      u.metodo,
      u.providers,
      u.role,
      u.registrado,
    ]);
    const escape = (s: string) => `"${String(s).replace(/"/g, '""')}"`;
    const csv = [headers, ...rows].map(r => r.map(escape).join(',')).join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `belong-usuarios-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre o correo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2.5 rounded-full border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
        />
        <button
          onClick={exportCSV}
          disabled={filtered.length === 0}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-rosewood transition-colors disabled:opacity-40 whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Exportar CSV
        </button>
      </div>

      {/* Count */}
      <p className="text-sm text-stone/60 mb-4">
        {filtered.length === users.length
          ? `${users.length} ${users.length === 1 ? 'persona registrada' : 'personas registradas'}`
          : `${filtered.length} de ${users.length} resultados`}
      </p>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="bg-cream rounded-2xl p-12 text-center border border-gold/10">
          <p className="text-stone/60">
            {users.length === 0
              ? 'Aún no hay personas registradas en la comunidad.'
              : 'No se encontraron resultados para tu búsqueda.'}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-gold/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="px-5 py-3.5 font-medium text-stone/70">Nombre</th>
                <th className="px-5 py-3.5 font-medium text-stone/70">Correo</th>
                <th className="px-5 py-3.5 font-medium text-stone/70">Método</th>
                <th className="px-5 py-3.5 font-medium text-stone/70">Rol</th>
                <th className="px-5 py-3.5 font-medium text-stone/70 whitespace-nowrap">Registrado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => (
                <tr key={u.email} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/40'}>
                  <td className="px-5 py-3.5 text-charcoal">{u.name ?? <span className="text-stone/40 italic">sin nombre</span>}</td>
                  <td className="px-5 py-3.5 text-stone">{u.email}</td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                      {u.metodo === 'correo' ? 'Correo' : u.providers || 'Social'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      u.role === 'admin' ? 'bg-rosewood/10 text-rosewood' : 'bg-stone/10 text-stone'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-stone/60 whitespace-nowrap">{u.registrado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
