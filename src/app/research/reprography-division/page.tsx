import type { Metadata } from 'next';
import ReprographyDivisionContent from '@/components/research/reprography-division/ReprographyDivisionContent';

export const metadata: Metadata = {
  title: 'Reprography Division | Research | Prime Ministers Museum & Library',
  description:
    'Learn about the Reprography Division at the Prime Ministers Museum & Library, focusing on archival preservation, microfilm creation, and research digitization services.',
};

export default function ReprographyDivisionPage() {
  return <ReprographyDivisionContent />;
}
