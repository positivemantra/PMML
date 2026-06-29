import type { Metadata } from 'next';
import RtiContent from '@/components/footer/rti/RtiContent';

export const metadata: Metadata = {
  title: 'Right to Information (RTI) | Prime Ministers Museum & Library',
  description: 'In compliance with the Right to Information Act, 2005, the designated officials responsible for processing queries and addressing information requests at PMML.',
};

export default function RtiPage() {
  return <RtiContent />;
}
