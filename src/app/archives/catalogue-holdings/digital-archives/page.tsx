import type { Metadata } from 'next';
import DigitalArchivesContent from '@/components/archives/catalogue-holdings/digital-archives/Content';

export const metadata: Metadata = {
  title: 'Digital Archives | Archives | Prime Ministers Museum & Library',
  description: 'Browse the digital archives at the Prime Ministers Museum & Library.',
};

export default function DigitalArchivesPage() {
  return <DigitalArchivesContent />;
}
