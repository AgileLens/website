'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!verified) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch('https://formspree.io/f/xpznqkdl', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2">Message sent!</h3>
        <p className="text-muted">We'll be in touch within 3 working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:border-pink transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:border-pink transition"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:border-pink transition"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:border-pink transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Lightweight human check */}
      <label className="flex items-center gap-3 cursor-pointer select-none group">
        <div
          onClick={() => setVerified(v => !v)}
          className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            verified
              ? 'bg-pink border-pink'
              : 'border-border bg-surface group-hover:border-pink/50'
          }`}
        >
          {verified && (
            <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l3.5 3.5L12 3" />
            </svg>
          )}
        </div>
        <span className="text-sm text-muted">I'm a human</span>
      </label>

      <button
        type="submit"
        disabled={!verified}
        className="w-full py-4 bg-pink text-black font-bold rounded-lg hover:opacity-90 transition text-lg disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Send Message
      </button>
      <p className="text-sm text-muted text-center mt-3">
        Or email us directly at{' '}
        <a href="mailto:info@agilelens.com" className="underline hover:text-text">
          info@agilelens.com
        </a>
      </p>
    </form>
  );
}
