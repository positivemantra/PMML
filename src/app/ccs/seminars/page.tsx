import type { Metadata } from 'next';
import CcsSeminarsContent from '@/components/ccs/seminars/CcsSeminarsContent';

export const metadata: Metadata = {
  title: 'CCS Seminars & Lectures | Center for Contemporary Studies | PMML',
  description:
    'Explore the seminars, lectures, panel discussions, and academic conferences organized by the Center for Contemporary Studies (CCS) at PMML.',
};

export default function CcsSeminarsPage() {
  return <CcsSeminarsContent />;
}
