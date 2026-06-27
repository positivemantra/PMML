import type { Metadata } from 'next';
import ResearchAboutContent from '@/components/research/about/ResearchAboutContent';

export const metadata: Metadata = {
  title: 'Research | Prime Ministers Museum & Library',
  description:
    'Explore the Research wing at the Prime Ministers Museum & Library — covering Reprography, Oral History, Publications, and ongoing research projects on modern Indian political history.',
};

export default function ResearchPage() {
  return <ResearchAboutContent />;
}
