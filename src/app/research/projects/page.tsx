import type { Metadata } from 'next';
import ProjectsContent from '@/components/research/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Research Projects | Research | Prime Ministers Museum & Library',
  description:
    'Browse the completed and ongoing research projects of the Prime Ministers Museum & Library, including Selected Works of national leaders.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
