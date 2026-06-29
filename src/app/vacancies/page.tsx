import type { Metadata } from 'next';
import VacanciesContent from '@/components/footer/vacancies/VacanciesContent';

export const metadata: Metadata = {
  title: 'Vacancies | Prime Ministers Museum & Library',
  description: 'Current job openings and career opportunities at the Prime Ministers Museum & Library (PMML).',
};

export default function VacanciesPage() {
  return <VacanciesContent />;
}
