import type { Metadata } from 'next';
import VirtualTourContent from '@/components/pm-sangrahalaya/virtual-tour/VirtualTourContent';

export const metadata: Metadata = {
  title: 'Virtual Tour | PM Sangrahalaya',
  description:
    'Experience an immersive 360° virtual tour of the Pradhanmantri Sangrahalaya, Teen Murti House, Nehru Planetarium, and library.',
};

export default function VirtualTourPage() {
  return <VirtualTourContent />;
}
