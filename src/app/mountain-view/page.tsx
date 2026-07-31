import type { Metadata } from 'next';
import PasswordGate from '@/components/PasswordGate';
import MountainViewInvite from '@/components/MountainViewInvite';

export const metadata: Metadata = {
  title: 'An Invitation | Agile Lens',
  description: 'A private invitation to visit the Mountain View Holodeck, by appointment only.',
  robots: { index: false, follow: false },
};

export default function MountainViewPage() {
  return (
    <PasswordGate password="demo">
      <MountainViewInvite />
    </PasswordGate>
  );
}
