import type { Metadata } from 'next';
import AnubhutiZoneContent from '@/components/pm-sangrahalaya/anubhuti-zone/AnubhutiZoneContent';

export const metadata: Metadata = {
  title: 'Anubhuti Zone | PM Sangrahalaya',
  description:
    'Experience cutting-edge digital exhibits, augmented reality, robotics, and interactive displays at the Pradhanmantri Sangrahalaya Anubhuti Zone.',
};

export default function AnubhutiZonePage() {
  return <AnubhutiZoneContent />;
}
