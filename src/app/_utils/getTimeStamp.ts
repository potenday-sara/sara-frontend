import dayjs from 'dayjs';

export function formatDate(timestamp: string | Date): string {
  const now = dayjs();
  const date = dayjs(timestamp);

  const diffMinutes = now.diff(date, 'minute');
  const diffHours = now.diff(date, 'hour');
  const diffDays = now.diff(date, 'day');

  if (diffMinutes < 1) {
    return '지금';
  }
  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }
  if (diffDays < 8) {
    return `${diffDays}일 전`;
  }
  return date.format('YYYY.MM.DD');
}
