'use client';

import { useEffect, useRef, useState } from 'react';

interface PhotoMarqueeProps {
  images: string[];
  // Seconds for one full loop. Longer = slower scroll.
  duration?: number;
  // Tailwind height utility, e.g. 'h-56' for 224px.
  height?: string;
  // Photo card width (4:3 from height by default).
  cardWidthClass?: string;
}

export default function PhotoMarquee({
  images,
  duration = 90,
  height = 'h-56 md:h-64',
  cardWidthClass = 'w-[298px] md:w-[341px]',
}: PhotoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Render twice for seamless infinite loop
  const doubled = [...images, ...images];

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === 'ArrowLeft') setLightbox((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, images.length]);

  return (
    <>
      <div
        className="marquee-container w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-3 md:gap-4"
          style={{
            width: 'max-content',
            animation: `photoMarquee ${duration}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {doubled.map((src, i) => {
            const realIndex = i % images.length;
            return (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setLightbox(realIndex)}
                className={`flex-none ${height} ${cardWidthClass} rounded-xl overflow-hidden border border-border bg-surface transition-transform duration-200 hover:scale-[1.02] hover:border-pink/50 cursor-zoom-in`}
                aria-label={`Event photo ${realIndex + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes photoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/80 border border-border text-white text-xl flex items-center justify-center hover:border-pink"
            aria-label="Previous photo"
          >
            &larr;
          </button>
          <img
            src={images[lightbox]}
            alt=""
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? 0 : (i + 1) % images.length));
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/80 border border-border text-white text-xl flex items-center justify-center hover:border-pink"
            aria-label="Next photo"
          >
            &rarr;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full bg-surface/80 border border-border text-white text-xl flex items-center justify-center hover:border-pink"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
