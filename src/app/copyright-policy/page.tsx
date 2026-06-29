import type { Metadata } from 'next';
import CopyrightPolicyContent from '@/components/footer/copyright-policy/CopyrightPolicyContent';

export const metadata: Metadata = {
  title: 'Copyright Policy | Prime Ministers Museum & Library',
  description: 'Copyright policy for the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function CopyrightPolicyPage() {
  return <CopyrightPolicyContent />;
}
