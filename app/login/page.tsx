'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [signupForm, setSignupForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    referral: '',
  });

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };
  const onChangeSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      console.log('Login submit:', { ...loginForm, keepSignedIn });
    } else {
      console.log('Signup submit:', { ...signupForm, agree });
    }
    // TODO: Nanti integrasi sama auth aseli
  };

  return (
    <section className="relative grid min-h-screen w-full place-items-center bg-[url('/img/bgloginsigin.png')] bg-cover bg-center px-4">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 overflow-hidden rounded-none bg-white shadow-none ring-0 sm:rounded-2xl sm:shadow-[0_20px_60px_rgba(2,6,23,0.1)] sm:ring-1 sm:ring-slate-200 lg:grid-cols-2">
        {/* Gambar Kiri */}
        <div className="relative hidden lg:block">
          <img
            src="/img/coverloginsignin.png"
            alt="Japan Youth Summit"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Form di Kanan */}
        <div className="relative bg-[url('/img/bg3strip.png')] bg-cover bg-center">
          <div className="relative z-10 h-full w-full bg-blue-900/60 px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {mode === 'login' ? 'Login' : 'Sign Up'}
              </h1>
              <div className="inline-flex rounded-lg bg-white/10 p-1 ring-1 ring-white/20">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                    mode === 'login' ? 'bg-white text-blue-900' : 'text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                    mode === 'signup' ? 'bg-white text-blue-900' : 'text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm text-white/80">
              {mode === 'login'
                ? 'Access your account to continue and get your ticket.'
                : 'Create your account to continue and get your ticket.'}
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              {mode === 'login' ? (
                <>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                      Email
                    </label>
                    <input
                      name="email"
                      value={loginForm.email}
                      onChange={onChangeLogin}
                      type="email"
                      required
                      className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                      Password
                    </label>
                    <input
                      name="password"
                      value={loginForm.password}
                      onChange={onChangeLogin}
                      type="password"
                      required
                      className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-white/30 bg-white/20 text-pink-600 focus:ring-pink-300"
                        checked={keepSignedIn}
                        onChange={e => setKeepSignedIn(e.target.checked)}
                      />
                      Keep me signed in
                    </label>
                    <a href="#" className="font-semibold text-white hover:text-pink-200">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-xs text-white/80">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="font-semibold text-white underline hover:text-pink-200"
                    >
                      Sign up for free
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                      Fullname
                    </label>
                    <input
                      name="fullname"
                      value={signupForm.fullname}
                      onChange={onChangeSignup}
                      type="text"
                      required
                      className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                      placeholder="Hilmi Farrel Firjatullah"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                      Email
                    </label>
                    <input
                      name="email"
                      value={signupForm.email}
                      onChange={onChangeSignup}
                      type="email"
                      required
                      className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                      placeholder="hilmi123@example.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                        Password
                      </label>
                      <input
                        name="password"
                        value={signupForm.password}
                        onChange={onChangeSignup}
                        type="password"
                        required
                        className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                        Confirm Password
                      </label>
                      <input
                        name="confirmPassword"
                        value={signupForm.confirmPassword}
                        onChange={onChangeSignup}
                        type="password"
                        required
                        className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/90">
                      Referral Code (Optional)
                    </label>
                    <input
                      name="referral"
                      value={signupForm.referral}
                      onChange={onChangeSignup}
                      type="text"
                      className="mt-2 w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                      placeholder="ABC-123"
                    />
                  </div>
                  <label className="mt-1 inline-flex items-center gap-2 text-xs text-white/90">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/30 bg-white/20 text-pink-600 focus:ring-pink-300"
                      checked={agree}
                      onChange={e => setAgree(e.target.checked)}
                      required
                    />
                    I agree to the{' '}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                  </label>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                    >
                      Create Account
                    </button>
                  </div>
                  <p className="text-xs text-white/80">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="font-semibold text-white underline hover:text-pink-200"
                    >
                      Log in
                    </button>
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
