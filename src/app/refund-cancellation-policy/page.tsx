import type { Metadata } from 'next';
import RefundCancellationPolicyContent from '@/components/footer/refund-cancellation-policy/RefundCancellationPolicyContent';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Prime Ministers Museum & Library',
  description: 'Refund & cancellation policy for the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function RefundCancellationPolicyPage() {
  return <RefundCancellationPolicyContent />;
}
