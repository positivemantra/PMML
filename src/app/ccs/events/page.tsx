import type { Metadata } from 'next';
import CcsEventsContent from '@/components/ccs/events/CcsEventsContent';

export const metadata: Metadata = {
  title: 'CCS Events | Center for Contemporary Studies | PMML',
  description:
    'Browse through contemporary research seminars, fellowship presentations, and academic panel discussions hosted by the Center for Contemporary Studies.',
};

export default function CcsEventsPage() {
  return <CcsEventsContent />;
}
