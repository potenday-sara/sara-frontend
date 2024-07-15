import MainTemplate from '@/feature/main/components/MainTemplate';
import { Trend } from '@/feature/main/constants/trend';

export default async function page() {
  return <MainTemplate trend={Trend} />;
}
