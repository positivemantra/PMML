import type { Metadata } from 'next';
import RecentAcquisitionsContent from '@/components/archives/catalogue-holdings/recent-acquisitions/Content';

export const metadata: Metadata = {
  title: 'Recent Acquisitions | Archives | Prime Ministers Museum & Library',
  description: 'Browse the recent acquisitions of private papers at the Prime Ministers Museum & Library.',
};

export default function RecentAcquisitionsPage() {
  return <RecentAcquisitionsContent />;
}
