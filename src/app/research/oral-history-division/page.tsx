import type { Metadata } from 'next';
import OralHistoryDivisionContent from '@/components/research/oral-history-division/OralHistoryDivisionContent';

export const metadata: Metadata = {
  title: 'Oral History Division | Research | Prime Ministers Museum & Library',
  description:
    'Explore the Oral History Division at the Prime Ministers Museum & Library.',
};

export default function OralHistoryDivisionPage() {
  return <OralHistoryDivisionContent />;
}
