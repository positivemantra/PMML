import type { Metadata } from 'next';
import InstitutionalCollectionsContent from '@/components/archives/catalogue-holdings/institutional-collections/Content';

export const metadata: Metadata = {
  title: 'Institutional Collections | Archives | Prime Ministers Museum & Library',
  description: 'Browse the institutional collections of private papers at the Prime Ministers Museum & Library.',
};

export default function InstitutionalCollectionsPage() {
  return <InstitutionalCollectionsContent />;
}
