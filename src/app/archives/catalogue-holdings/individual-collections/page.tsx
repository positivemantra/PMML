import type { Metadata } from 'next';
import IndividualCollectionsContent from '@/components/archives/catalogue-holdings/individual-collections/Content';

export const metadata: Metadata = {
  title: 'Individual Collections | Archives | Prime Ministers Museum & Library',
  description: 'Browse the individual collections of private papers at the Prime Ministers Museum & Library.',
};

export default function IndividualCollectionsPage() {
  return <IndividualCollectionsContent />;
}
