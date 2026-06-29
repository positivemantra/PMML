import type { Metadata } from 'next';
import EventsContent from '@/components/events/EventsContent';

export const metadata: Metadata = {
  title: 'Events | Prime Ministers Museum & Library',
  description:
    'Explore the calendar of events, exhibitions, lectures, and workshops across all divisions of the Prime Ministers Museum & Library.',
};

export default function EventsPage() {
  return <EventsContent />;
}
