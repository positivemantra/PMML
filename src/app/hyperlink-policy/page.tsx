import type { Metadata } from 'next';
import HyperlinkPolicyContent from '@/components/footer/hyperlink-policy/HyperlinkPolicyContent';

export const metadata: Metadata = {
  title: 'Hyperlink Policy | Prime Ministers Museum & Library',
  description: 'Hyperlink policy for the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function HyperlinkPolicyPage() {
  return <HyperlinkPolicyContent />;
}
