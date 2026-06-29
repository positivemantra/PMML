import type { Metadata } from 'next';
import PlanetariumEventsContent from '@/components/AboutPmml/NehruPlanetarium/events/PlanetariumEventsContent';

export const metadata: Metadata = {
  title: 'Planetarium Events | Nehru Planetarium | PMML',
  description:
    'Explore upcoming astronomy shows, sky-gazing sessions, public lectures, and student workshops hosted by the Nehru Planetarium.',
};

export default function PlanetariumEventsPage() {
  return <PlanetariumEventsContent />;
}
