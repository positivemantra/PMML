import type { Metadata } from 'next';
import InaugurationCeremonyContent from '@/components/pm-sangrahalaya/inauguration-ceremony/InaugurationCeremonyContent';

export const metadata: Metadata = {
  title: 'Inauguration Ceremony | PM Sangrahalaya',
  description:
    'Explore the details and glimpses of the historic inauguration day of Pradhanmantri Sangrahalaya by Hon’ble Prime Minister Shri Narendra Modi on 14th April 2022.',
};

export default function InaugurationCeremonyPage() {
  return <InaugurationCeremonyContent />;
}
