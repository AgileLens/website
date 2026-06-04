import type { Metadata } from 'next';
import HolodeckExperience from '@/components/HolodeckExperience';

export const metadata: Metadata = {
  title: 'Step Inside the Work | Agile Lens',
  description:
    'An interactive 3D gallery of Agile Lens immersive projects. Drag to look around, click to explore the case studies. Best experienced on desktop.',
  openGraph: {
    title: 'Step Inside the Work | Agile Lens',
    description:
      'An interactive 3D gallery of Agile Lens immersive projects. Drag to look around, click to explore.',
  },
};

export default function ExperiencePage() {
  return <HolodeckExperience />;
}
