import type { Metadata } from 'next';
import CcsAboutContent from '@/components/ccs/about/CcsAboutContent';

export const metadata: Metadata = {
  title: 'Centre for Contemporary Studies (CCS) | Prime Ministers Museum & Library',
  description:
    'Learn about the Centre for Contemporary Studies (CCS) at the Prime Ministers Museum & Library, providing fellowships, organizing seminars, and conducting research on modern India.',
};

export default function CcsAboutPage() {
  return <CcsAboutContent />;
}
