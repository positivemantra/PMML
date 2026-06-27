import type { Metadata } from 'next';
import PublicationsContent from '@/components/research/publications/PublicationsContent';

export const metadata: Metadata = {
  title: 'Publications | Research | Prime Ministers Museum & Library',
  description:
    'Explore the Publications Division of the Prime Ministers Museum & Library, dedicated to advancing and disseminating scholarly research on modern and contemporary Indian history.',
};

export default function PublicationsPage() {
  return <PublicationsContent />;
}
