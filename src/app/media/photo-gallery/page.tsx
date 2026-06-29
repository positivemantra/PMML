import type { Metadata } from 'next';
import PhotoGalleryContent from '@/components/media/PhotoGalleryContent';

export const metadata: Metadata = {
  title: 'Photo Gallery | Prime Ministers Museum & Library',
  description: 'Explore photo albums, images, and videos of exhibitions, galleries, and events at Teen Murti Estate.',
};

export default function PhotoGalleryPage() {
  return <PhotoGalleryContent />;
}
