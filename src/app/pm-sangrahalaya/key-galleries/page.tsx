import type { Metadata } from 'next';
import KeyGalleriesContent from '@/components/pm-sangrahalaya/key-galleries/KeyGalleriesContent';

export const metadata: Metadata = {
  title: 'Key Galleries | PM Sangrahalaya',
  description:
    'Explore the historical and thematic exhibition galleries across Building I and Building II at the Pradhanmantri Sangrahalaya.',
};

export default function KeyGalleriesPage() {
  return <KeyGalleriesContent />;
}
