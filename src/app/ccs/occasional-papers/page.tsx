import type { Metadata } from 'next';
import CcsOccasionalPapersContent from '@/components/ccs/occasional-papers/CcsOccasionalPapersContent';

export const metadata: Metadata = {
  title: 'CCS Occasional Papers | Centre for Contemporary Studies | Prime Ministers Museum & Library',
  description:
    'Browse the Occasional Papers published by the Centre for Contemporary Studies (CCS) at the Prime Ministers Museum & Library, covering modern and contemporary Indian history, public policy, and sociology.',
};

export default function CcsOccasionalPapersPage() {
  return <CcsOccasionalPapersContent />;
}
