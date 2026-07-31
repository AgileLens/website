'use client';

import { useEffect, useState, type FormEvent } from 'react';

const STORAGE_KEY = 'al-gate-mountain-view';

export default function PasswordGate({
  password,
  children,
}: {
  password: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === password.toLowerCase()) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!checked) {
    return <div className="min-h-screen bg-bg" />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-bg">
      <form onSubmit={handleSubmit} className="w-full max-w-sm text-center">
        <p className="text-xs uppercase tracking-wider text-muted mb-3">Private Invitation</p>
        <h1 className="text-2xl font-bold mb-6">This page is by invitation only.</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          placeholder="Enter password"
          autoFocus
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-center text-text placeholder:text-muted focus:outline-none focus:border-pink transition-colors"
        />
        {error && (
          <p className="text-sm text-pink mt-3">That&rsquo;s not quite it. Check the invitation you were sent.</p>
        )}
        <button
          type="submit"
          className="btn-gradient w-full mt-4 px-5 py-3 rounded-full text-sm font-semibold text-white"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
