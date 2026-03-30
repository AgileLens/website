'use client';

import { useState, useEffect, useCallback } from 'react';

interface ImageGalleryProps {
  images: string[];
  projectName: string;
}

export default function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-[var(--color-border)]">
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-2)]/10 flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium tracking-wider uppercase">{projectName}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero image */}
      <div
        className="w-full aspect-video rounded-xl overflow-hidden border border-[var(--color-border)] cursor-pointer"
        onClick={() => openLightbox(0)}
      >
        <img
          src={images[0]}
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnail grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] cursor-pointer"
              onClick={() => openLightbox(i + 1)}
            >
              <img
                src={img}
                alt={`${projectName} - image ${i + 2}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox"
          >
            x
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-50 w-12 h-12 flex items-center justify-center"
              aria-label="Previous image"
            >
              &lsaquo;
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`${projectName} - image ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-50 w-12 h-12 flex items-center justify-center"
              aria-label="Next image"
            >
              &rsaquo;
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
