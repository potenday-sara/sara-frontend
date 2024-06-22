import { ServerRankAPI } from '@/apis/rank';
import { RankResponse } from '@/apis/rank/rank';
import MainCharacter from '@/feature/main/components/MainCharacter';

export default async function page() {
  async function fetchGetRank() {
    const saraRankAPI = ServerRankAPI.get('/').options({ cache: 'force-cache' }).params({ type: 'sara' }).build();
    const saraRank = await saraRankAPI.call<RankResponse>();

    const maraRankAPI = ServerRankAPI.get('/').options({ cache: 'force-cache' }).params({ type: 'mara' }).build();
    const maraRank = await maraRankAPI.call<RankResponse>();
    return {
      saraRank,
      maraRank,
    };
  }
  return null;
}
