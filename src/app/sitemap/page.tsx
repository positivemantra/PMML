import type { Metadata } from 'next';
import SitemapContent from '@/components/footer/sitemap/SitemapContent';

export const metadata: Metadata = {
  title: 'Sitemap | Prime Ministers Museum & Library',
  description: 'Structured index of all pages and sections on the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function SitemapPage() {
  return <SitemapContent />;
}
