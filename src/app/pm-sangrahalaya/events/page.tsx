import type { Metadata } from 'next';
import SangrahalayaEventsContent from '@/components/pm-sangrahalaya/events/SangrahalayaEventsContent';

export const metadata: Metadata = {
  title: 'Sangrahalaya Events | Prime Ministers Museum & Library',
  description:
    'Discover dynamic exhibitions, lectures, seminars, student workshops, and special celebrations at the Pradhanmantri Sangrahalaya.',
};

export default function SangrahalayaEventsPage() {
  return <SangrahalayaEventsContent />;
}
