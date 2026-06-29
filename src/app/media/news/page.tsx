import type { Metadata } from 'next';
import NewsContent from '@/components/media/NewsContent';

export const metadata: Metadata = {
  title: 'News & Articles | Prime Ministers Museum & Library',
  description: 'Stay updated with the latest news, announcements, press releases, and articles from the Prime Ministers Museum & Library.',
};

export default function NewsPage() {
  return <NewsContent />;
}
