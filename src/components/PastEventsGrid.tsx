'use client';

import { useState } from 'react';
import RevealBox from './RevealBox';

export interface PastEvent {
  title: string;
  date: string;
  image: string;
  sponsors: string;
  speakers: string;
  recording: string;
}

interface PastEventsGridProps {
  events: PastEvent[];
  initialCount?: number;
}

export default function PastEventsGrid({ events, initialCount = 6 }: PastEventsGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? events : events.slice(0, initialCount);
  const hidden = events.length - initialCount;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((ev, i) => (
          <RevealBox key={`${ev.title}-${ev.date}`} delay={(i % 3) * 80}>
            <article className="h-full rounded-xl overflow-hidden border border-border bg-surface flex flex-col">
              <div className="aspect-video bg-bg flex items-center justify-center overflow-hidden">
                {ev.image ? (
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs uppercase tracking-wider text-muted">No flyer</span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1">{ev.title}</h3>
                {ev.date && <div className="text-xs text-muted mb-3">{ev.date}</div>}
                {ev.sponsors && (
                  <p className="text-xs text-muted mb-2 leading-relaxed">{ev.sponsors}</p>
                )}
                {ev.speakers && (
                  <p className="text-sm text-text leading-relaxed mb-3">{ev.speakers}</p>
                )}
                <div className="mt-auto pt-3">
                  {ev.recording ? (
                    <a
                      href={ev.recording}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-pink hover:underline font-semibold"
                    >
                      Watch recording &rarr;
                    </a>
                  ) : (
                    <span className="text-xs text-muted">Recording not available</span>
                  )}
                </div>
              </div>
            </article>
          </RevealBox>
        ))}
      </div>

      {hidden > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-border text-text hover:border-pink/60 transition-colors"
          >
            {showAll ? 'Show less' : `Show ${hidden} more event${hidden === 1 ? '' : 's'}`}
          </button>
        </div>
      )}
    </>
  );
}
