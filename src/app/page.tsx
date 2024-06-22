import { ServerRankAPI } from '@/apis/rank';

export default async function page({ searchParams, params }) {
  async function fetchGetRank() {
    const api = ServerRankAPI.get('/').options({ cache: 'force-cache' }).params({ type: 'mara' }).build();
    return res;
  }

  const res = await fetchGetRank();

  console.log('error', res);
  return <div>안녕</div>;
}
