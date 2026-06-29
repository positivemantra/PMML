import type { Metadata } from 'next';
import DisclaimerContent from '@/components/footer/disclaimer/DisclaimerContent';

export const metadata: Metadata = {
  title: 'Disclaimer | Prime Ministers Museum & Library',
  description: 'Disclaimer and terms of use for the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
