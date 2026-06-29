import type { Metadata } from 'next';
import TermsConditionsContent from '@/components/footer/terms-conditions/TermsConditionsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Prime Ministers Museum & Library',
  description: 'Terms and conditions of use for the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function TermsConditionsPage() {
  return <TermsConditionsContent />;
}
