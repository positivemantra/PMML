import type { Metadata } from 'next';
import ReadingRoomContent from '@/components/archives/catalogue-holdings/reading-room/Content';

export const metadata: Metadata = {
  title: 'Reading Room | Archives | Prime Ministers Museum & Library',
  description: 'Browse the reading room details at the Prime Ministers Museum & Library.',
};

export default function ReadingRoomPage() {
  return <ReadingRoomContent />;
}
