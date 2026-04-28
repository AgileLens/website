'use client';

import { useEffect, useRef, useState } from 'react';

interface PhotoMarqueeProps {
  images: string[];
  // Seconds for the auto-scroll baseline to traverse one full set of photos.
  // Longer = slower default scroll. Hovering near the left/right edge
  // overrides this and accelerates up to maxPhotosPerSecond.
  duration?: number;
  // Tailwind height utility, e.g. 'h-56' for 224px.
  height?: string;
  // Photo card width (4:3 from height by default).
  cardWidthClass?: string;
  // Top scroll-speed when cursor is at the very edge (in photos/sec).
  maxPhotosPerSecond?: number;
  // Width of the edge-scroll zones, as a fraction of the container width
  // (each side). Middle zone (1 - 2*edgeFraction) keeps the click-to-zoom
  // behavior. Default: 0.2 → 20% on each side, 60% middle.
  edgeFraction?: number;
}

type Zone = 'left' | 'middle' | 'right' | 'none';

export default function PhotoMarquee({
  images,
  duration = 90,
  height = 'h-56 md:h-64',
  cardWidthClass = 'w-[298px] md:w-[341px]',
  maxPhotosPerSecond = 5,
  edgeFraction = 0.2,
}: PhotoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const mouseXRef = useRef<number | null>(null);
  const [zone, setZone] = useState<Zone>('none');
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

  // rAF-driven scroll loop. Speed depends on mouse position over the container.
  useEffect(() => {
    let rafId = 0;
    let lastTs = performance.now();

    const tick = (ts: number) => {
      const dt = Math.min((ts - lastTs) / 1000, 0.1);
      lastTs = ts;

      const container = containerRef.current;
      const track = trackRef.current;
      if (container && track) {
        const containerW = container.clientWidth;
        const trackW = track.scrollWidth;
        const halfW = trackW / 2;
        // One photo's effective width (including gap) = halfW / image count.
        const photoStride = halfW > 0 && images.length > 0 ? halfW / images.length : 0;
        const baseSpeed = halfW > 0 ? halfW / Math.max(duration, 0.0001) : 0; // px/sec, positive
        const maxSpeedAbs = photoStride * maxPhotosPerSecond; // px/sec, positive

        let signedSpeed = -baseSpeed; // default: scroll forward (track moves left)
        let nextZone: Zone = 'none';

        const mx = mouseXRef.current;
        if (mx !== null && containerW > 0) {
          const p = mx / containerW;
          if (p < edgeFraction) {
            // Left edge: scroll backward (track moves right) — older photos return.
            const intensity = 1 - p / edgeFraction; // 0 at boundary, 1 at very left
            signedSpeed = baseSpeed + (maxSpeedAbs - baseSpeed) * intensity;
            nextZone = 'left';
          } else if (p > 1 - edgeFraction) {
            // Right edge: scroll forward faster.
            const intensity = (p - (1 - edgeFraction)) / edgeFraction; // 0 at boundary, 1 at very right
            signedSpeed = -(baseSpeed + (maxSpeedAbs - baseSpeed) * intensity);
            nextZone = 'right';
          } else {
            // Middle zone: paused (preserves the original hover-to-pause feel).
            signedSpeed = 0;
            nextZone = 'middle';
          }
        }

        if (halfW > 0) {
          offsetRef.current += signedSpeed * dt;
          // Wrap to maintain seamless loop in both directions.
          if (offsetRef.current <= -halfW) offsetRef.current += halfW;
          if (offsetRef.current > 0) offsetRef.current -= halfW;
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }

        setZone((curr) => (curr !== nextZone ? nextZone : curr));
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [images.length, duration, maxPhotosPerSecond, edgeFraction]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseXRef.current = e.clientX - rect.left;
  };

  const handleMouseLeave = () => {
    mouseXRef.current = null;
  };

  // Click only opens lightbox in the middle zone (or on touch / no-mouse devices).
  const handleCardClick = (idx: number) => {
    const mx = mouseXRef.current;
    const containerW = containerRef.current?.clientWidth ?? 0;
    if (mx === null || containerW === 0) {
      setLightbox(idx);
      return;
    }
    const p = mx / containerW;
    if (p >= edgeFraction && p <= 1 - edgeFraction) {
      setLightbox(idx);
    }
  };

  const containerCursor =
    zone === 'left' ? 'w-resize' : zone === 'right' ? 'e-resize' : zone === 'middle' ? 'zoom-in' : 'default';

  return (
    <>
      <div
        ref={containerRef}
        className="marquee-container w-full select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: containerCursor }}
        aria-label="Event photo carousel"
      >
        <div
          ref={trackRef}
          className="flex gap-3 md:gap-4"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {doubled.map((src, i) => {
            const realIndex = i % images.length;
            return (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => handleCardClick(realIndex)}
                className={`flex-none ${height} ${cardWidthClass} rounded-xl overflow-hidden border border-border bg-surface transition-transform duration-200 hover:scale-[1.02] hover:border-pink/50`}
                style={{ cursor: 'inherit' }}
                aria-label={`Event photo ${realIndex + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </button>
            );
          })}
        </div>
      </div>

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
            className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-xl"
            style={{ minWidth: '60vw', minHeight: '50vh' }}
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
