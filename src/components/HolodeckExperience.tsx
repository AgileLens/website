'use client';

import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Three.js is client-only; never prerender it (static export safe).
const HolodeckScene = dynamic(() => import('./HolodeckScene'), {
  ssr: false,
  loading: () => null,
});

export default function HolodeckExperience() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [entering, setEntering] = useState<string | null>(null);
  const [fade, setFade] = useState(false);

  const onReady = useCallback(() => setReady(true), []);
  const onError = useCallback(() => setError(true), []);
  const onHover = useCallback((name: string | null) => setHover(name), []);
  const onEnter = useCallback((_slug: string, name: string) => setEntering(name), []);

  // Fade the overlay in on the next frame so the CSS transition runs.
  useEffect(() => {
    if (!entering) return;
    const id = requestAnimationFrame(() => setFade(true));
    return () => cancelAnimationFrame(id);
  }, [entering]);

  return (
    <div className="fixed inset-0 bg-[#0c0c0e] overflow-hidden">
      {!error && <HolodeckScene onReady={onReady} onError={onError} onHover={onHover} onEnter={onEnter} />}

      {/* Loader */}
      {!ready && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full border-2 border-pink/30 border-t-pink animate-spin mb-5" />
          <p className="text-sm text-muted tracking-wider uppercase">Entering the Holodeck</p>
        </div>
      )}

      {/* WebGL fallback */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-black mb-4 gradient-text">Step inside the work</h1>
          <p className="text-muted max-w-md mb-8">
            Your browser could not start the 3D view, but the full portfolio is one tap away.
          </p>
          <Link href="/portfolio" className="btn-gradient px-7 py-3.5 rounded-full text-sm font-semibold text-white">
            Explore the portfolio
          </Link>
        </div>
      )}

      {/* Overlay UI (only once the scene is live) */}
      {ready && !error && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Title block, bottom-left */}
          <div className="absolute bottom-8 left-6 md:left-12 max-w-md">
            <div className="text-xs uppercase tracking-[0.2em] text-pink font-semibold mb-2">A navigable gallery</div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3">Step inside the work</h1>
            <p className="text-sm text-muted leading-relaxed">
              Drag to look around. Hover a project to focus it, click to step into the full case study.
            </p>
          </div>

          {/* Now viewing chip */}
          <div
            className={`absolute top-24 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border border-pink/40 bg-bg/70 backdrop-blur-md text-sm font-medium transition-opacity duration-300 ${
              hover ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {hover ?? ''}
          </div>

          {/* Actions, bottom-right */}
          <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-end gap-3 pointer-events-auto">
            <Link href="/portfolio" className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold text-white">
              Browse all projects
            </Link>
            <Link href="/" className="text-sm text-muted hover:text-text transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      )}

      {/* Enter transition — masks the dive into the case study */}
      {entering && (
        <div
          className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center transition-opacity duration-[1100ms] ease-in"
          style={{
            opacity: fade ? 1 : 0,
            background: 'radial-gradient(circle at center, rgba(254,0,181,0.28), #0c0c0e 70%)',
          }}
        >
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-pink mb-3">Entering</div>
            <div className="text-2xl md:text-4xl font-black">{entering}</div>
          </div>
        </div>
      )}
    </div>
  );
}
