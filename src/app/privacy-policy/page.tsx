import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/footer/privacy-policy/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prime Ministers Museum & Library',
  description: 'Privacy policy for the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
