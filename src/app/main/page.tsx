import { ServerRankAPI } from '@/apis/rank';
import { RankResponse } from '@/apis/rank/rank';
import MainCharacter from '@/feature/main/components/MainCharacter';
import Progressbar from '@/components/atoms/Progressbar';
import MainTemplate from '@/feature/main/components/MainTemplate';
import { Trend } from '@/feature/main/constants/trend';

export default async function page() {
  return <MainTemplate trend={Trend} />;
}
