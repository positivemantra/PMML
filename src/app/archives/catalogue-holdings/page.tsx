import type { Metadata } from 'next';
import CatalogueOfHoldingsContent from '@/components/archives/catalogue-holdings/CatalogueOfHoldingsContent';

export const metadata: Metadata = {
  title: 'Catalogue of Holdings | Archives | Prime Ministers Museum & Library',
  description:
    'Browse the catalogue of private papers, institutional and individual collections, and digital archives at the Prime Ministers Museum & Library.',
};

export default function CatalogueOfHoldingsPage() {
  return <CatalogueOfHoldingsContent />;
}
