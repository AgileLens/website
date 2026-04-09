import type { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Agile Lens',
  description: 'Get in touch with Agile Lens. NYC-based immersive XR design studio.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Get in Touch</h1>
        <p className="text-lg text-muted">We typically respond to inquiries within 3 working days.</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-6 text-muted">
              <div>
                <h3 className="font-semibold text-text mb-1">Address</h3>
                <p>22 West 19th Street, 6th Floor</p>
                <p>New York, NY 10011</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Phone</h3>
                <a href="tel:+12126913020" className="hover:text-text">+1 (212) 691 3020</a>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Email</h3>
                <a href="mailto:info@agilelens.com" className="hover:text-text">info@agilelens.com</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="aspect-video rounded-xl overflow-hidden border border-border">
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

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Contact Form via Formspree */}
        <div>
          <h2 className="text-2xl font-bold mb-6 mt-8">Leave us a message</h2>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
