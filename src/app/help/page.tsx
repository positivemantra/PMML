import type { Metadata } from 'next';
import HelpContent from '@/components/footer/help/HelpContent';

export const metadata: Metadata = {
  title: 'Help | Prime Ministers Museum & Library',
  description: 'Help and viewing guidelines for different file formats on the official portal of Prime Ministers Museum & Library (PMML).',
};

export default function HelpPage() {
  return <HelpContent />;
}
