import type { Metadata } from 'next';
import SpecialShowsContent from '@/components/pm-sangrahalaya/special-shows/SpecialShowsContent';

export const metadata: Metadata = {
  title: 'Special Shows | PM Sangrahalaya',
  description:
    'Experience the immersive shows at the Pradhanmantri Sangrahalaya, including the Light and Sound Show, Bhavishya ki Jhalkiyan, and Lal Qile ki Prachir Se.',
};

export default function SpecialShowsPage() {
  return <SpecialShowsContent />;
}
