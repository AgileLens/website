import type { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Stay in the Loop | Agile Lens',
  description: 'Sign up to hear about Agile Lens events, demos, and announcements.',
  robots: { index: false, follow: false },
};

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img
            src="/logos/Icon.svg"
            alt="Agile Lens"
            className="h-10 mx-auto mb-8 opacity-90"
          />
          <h1 className="text-3xl font-black mb-3">Stay in the Loop</h1>
          <p className="text-muted">
            Be the first to know about our upcoming events, demos, and beta tests.
          </p>
        </div>
        <NewsletterSignup />
      </div>
    </div>
  );
}
