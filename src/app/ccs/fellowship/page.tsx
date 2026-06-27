import type { Metadata } from 'next';
import CcsFellowshipContent from '@/components/ccs/fellowship/CcsFellowshipContent';

export const metadata: Metadata = {
  title: 'Fellowship | Centre for Contemporary Studies | Prime Ministers Museum & Library',
  description:
    'Explore fellowship programmes administered by the Centre for Contemporary Studies (CCS) at the Prime Ministers Museum & Library, supporting research on modern and contemporary Indian history.',
};

export default function CcsFellowshipPage() {
  return <CcsFellowshipContent />;
}
