import type { Metadata } from 'next';
import OralHistoryTranscriptsContent from '@/components/archives/catalogue-holdings/oral-history-transcripts/Content';

export const metadata: Metadata = {
  title: 'Oral History Transcripts | Archives | Prime Ministers Museum & Library',
  description: 'Browse the oral history transcripts at the Prime Ministers Museum & Library.',
};

export default function OralHistoryTranscriptsPage() {
  return <OralHistoryTranscriptsContent />;
}
