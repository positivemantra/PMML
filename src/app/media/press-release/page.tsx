import type { Metadata } from 'next';
import PressReleaseContent from '@/components/media/PressReleaseContent';

export const metadata: Metadata = {
  title: 'Press Releases | Prime Ministers Museum & Library',
  description: 'Read the official press releases and announcements from the Prime Ministers Museum & Library.',
};

export default function PressReleasePage() {
  return <PressReleaseContent />;
}
