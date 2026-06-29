import type { Metadata } from 'next';
import TendersContent from '@/components/footer/tenders/TendersContent';

export const metadata: Metadata = {
  title: 'Tenders | Prime Ministers Museum & Library',
  description: 'Current procurement, request for proposals (RFP), and notice inviting quotations (NIQ) at Prime Ministers Museum & Library (PMML).',
};

export default function TendersPage() {
  return <TendersContent />;
}
