'use client';

import { useEffect, useRef } from 'react';

interface RevealBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale' | 'reveal-stagger';
  delay?: number;
  threshold?: number;
}

export default function RevealBox({
  children,
  className = '',
  variant = 'reveal',
  delay = 0,
  threshold = 0.12,
}: RevealBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('visible');
          io.unobserve(el);
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${variant} ${className}`}>
      {children}
    </div>
  );
}
