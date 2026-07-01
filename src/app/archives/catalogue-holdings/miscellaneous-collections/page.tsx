import type { Metadata } from 'next';
import MiscellaneousCollectionsContent from '@/components/archives/catalogue-holdings/miscellaneous-collections/Content';

export const metadata: Metadata = {
  title: 'Miscellaneous Collections | Archives | Prime Ministers Museum & Library',
  description: 'Browse the miscellaneous collections of private papers at the Prime Ministers Museum & Library.',
};

export default function MiscellaneousCollectionsPage() {
  return <MiscellaneousCollectionsContent />;
}
