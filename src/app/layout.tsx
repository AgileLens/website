import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const OG_IMAGE =
  'https://cdn.prod.website-files.com/68d9482320210cfdb85c1d57/68f7ab0c726658f5fdb8f437_FSLA-Boathouse.png';
const SITE_DESCRIPTION =
  'Crafting immersive experiences for real and virtual worlds and the spectacles within.';

export const metadata: Metadata = {
  metadataBase: new URL('https://agilelens.com'),
  title: 'Agile Lens | Immersive Design',
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'Agile Lens',
    url: 'https://agilelens.com',
    title: 'Agile Lens | Immersive Design',
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Agile Lens — immersive design' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AgileLens',
    title: 'Agile Lens | Immersive Design',
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
