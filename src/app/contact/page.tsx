import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Agile Lens',
  description: 'Get in touch with Agile Lens. NYC-based immersive XR design studio.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Get in Touch</h1>
        <p className="text-lg text-[var(--color-text-muted)]">We typically respond to inquiries within 5 working days.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
          <div className="space-y-6 text-[var(--color-text-muted)]">
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-1">Address</h3>
              <p>22 West 19th Street, 6th Floor</p>
              <p>New York, NY 10011</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-1">Phone</h3>
              <a href="tel:+12126913020" className="hover:text-[var(--color-text)]">+1 (212) 691 3020</a>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-1">Email</h3>
              <a href="mailto:info@agilelens.com" className="hover:text-[var(--color-text)]">info@agilelens.com</a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-[var(--color-border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9537095!2d-73.993861!3d40.739361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f711cf75%3A0x999f4f79d0be2145!2s22%20W%2019th%20St%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Agile Lens office location"
            />
          </div>
        </div>

        {/* Contact Form via Formspree */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Leave us a message</h2>
          <form action="https://formspree.io/f/xpznqkdl" method="POST" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition"
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
                className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition"
              >
                <option value="general">General Inquiry</option>
                <option value="blueprint">Blueprint Immersive</option>
                <option value="holodeck">Holodeck Anywhere</option>
                <option value="stagepresence">Stage Presence</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[var(--color-accent)] text-black font-bold rounded-lg hover:opacity-90 transition text-lg"
            >
              Send Message
            </button>
            <p className="text-sm text-[var(--color-text-muted)] text-center mt-3">
              Or email us directly at{' '}
              <a href="mailto:info@agilelens.com" className="underline hover:text-[var(--color-text)]">
                info@agilelens.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
