import MainTemplate from '@/feature/main/components/MainTemplate';
import { Trend } from '@/feature/main/constants/trend';
import { Locale } from '@/i18n.config';

export default async function page({ params: { lang } }: { params: { lang: Locale } }) {
  return <MainTemplate trend={Trend} l />;
}
