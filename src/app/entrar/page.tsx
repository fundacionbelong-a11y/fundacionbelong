'use client';

import { useState, useEffect, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function EntrarForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/members';
  const initialTab = searchParams.get('tab') === 'registro' ? 'registro' : 'ingresar';

  const [tab, setTab] = useState<'ingresar' | 'registro'>(initialTab);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Ingresar form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Registro form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirm, setRegConfirm] = useState('');

  useEffect(() => { setError(''); }, [tab]);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn('google', { callbackUrl });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await signIn('credentials', {
      email: loginEmail,
      password: loginPassword,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError('Correo o contraseña incorrectos.');
    } else {
      router.push(callbackUrl);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (regPassword !== regConfirm) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (regPassword.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    setLoading(true);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: regName, email: regEmail, password: regPassword }),
    });
    const data = await res.json();
    if (!res.ok) {
      setLoading(false);
      setError(data.error ?? 'No se pudo crear la cuenta.');
      return;
    }
    const result = await signIn('credentials', {
      email: regEmail,
      password: regPassword,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError('Cuenta creada. Por favor inicia sesión.');
      setTab('ingresar');
    } else {
      router.push(callbackUrl);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gold/10">
        <Link href="/">
          <img src="/logo-belong.png" alt="Belong" className="h-9 w-auto" />
        </Link>
        <Link href="/" className="text-sm text-stone/50 hover:text-stone transition-colors">
          Volver al sitio
        </Link>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">Comunidad Belong</p>
            <h1 className="text-3xl font-serif font-medium text-charcoal">
              {tab === 'ingresar' ? 'Bienvenida/o de vuelta' : 'Únete a Belong'}
            </h1>
            <p className="text-stone/60 mt-2 text-sm">
              {tab === 'ingresar'
                ? 'Ingresa a tu espacio de comunidad.'
                : 'Crea tu cuenta y forma parte de la comunidad.'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-cream rounded-full p-1 mb-8">
            <button
              onClick={() => setTab('ingresar')}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${
                tab === 'ingresar' ? 'bg-white text-charcoal shadow-sm' : 'text-stone/60 hover:text-stone'
              }`}
            >
              Ingresar
            </button>
            <button
              onClick={() => setTab('registro')}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${
                tab === 'registro' ? 'bg-white text-charcoal shadow-sm' : 'text-stone/60 hover:text-stone'
              }`}
            >
              Crear cuenta
            </button>
          </div>

          {/* Google button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-5 py-3.5 border border-gold/20 rounded-full hover:bg-cream transition-colors text-sm font-medium text-charcoal mb-5 disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar con Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gold/15" />
            <span className="text-xs text-stone/40">o continúa con correo</span>
            <div className="flex-1 h-px bg-gold/15" />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-rosewood/10 text-rosewood text-sm px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          {/* Login form */}
          {tab === 'ingresar' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone/70 mb-1.5">Correo electrónico</label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone/70 mb-1.5">Contraseña</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-rosewood transition-colors disabled:opacity-50"
              >
                {loading ? 'Ingresando...' : 'Ingresar'}
              </button>
            </form>
          )}

          {/* Register form */}
          {tab === 'registro' && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone/70 mb-1.5">Nombre completo</label>
                <input
                  type="text"
                  required
                  value={regName}
                  onChange={e => setRegName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone/70 mb-1.5">Correo electrónico</label>
                <input
                  type="email"
                  required
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone/70 mb-1.5">Contraseña</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={regPassword}
                  onChange={e => setRegPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone/70 mb-1.5">Confirmar contraseña</label>
                <input
                  type="password"
                  required
                  value={regConfirm}
                  onChange={e => setRegConfirm(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:outline-none focus:border-gold bg-white text-sm text-charcoal placeholder:text-stone/30"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creando cuenta...' : 'Crear cuenta'}
              </button>
              <p className="text-xs text-stone/40 text-center">
                Al crear una cuenta aceptas nuestra{' '}
                <a href="mailto:fundacionbelong@gmail.com" className="text-gold hover:underline">
                  política de privacidad
                </a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EntrarPage() {
  return (
    <Suspense>
      <EntrarForm />
    </Suspense>
  );
}
