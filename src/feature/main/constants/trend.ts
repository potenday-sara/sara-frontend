export type Product = {
  product: string;
  link: string;
};

type Category = {
  title: string;
  contents: Product[];
};
type Key = ['sara', 'mara'];

export type TrendData = {
  sara: Category[];
  mara: Category[];
};

export const Trend: TrendData = {
  sara: [
    {
      title: '자취한다면 필수템이샤',
      contents: [
        { product: '즉석밥', link: 'https://link.coupang.com/a/bp7plM' },
        { product: '생수', link: 'https://link.coupang.com/a/bp7plM' },
        { product: '계란', link: 'https://link.coupang.com/a/brcEm2' },
        { product: '우유', link: 'https://link.coupang.com/a/brcEMd' },
        { product: '화장지', link: 'https://link.coupang.com/a/brcEm2' },
      ],
    },
    {
      title: '삶의 질 수직 상승하샤!',
      contents: [
        { product: '태블릿거치대', link: 'https://link.coupang.com/a/brcXFJ' },
        { product: '배드 테이블', link: 'https://link.coupang.com/a/brc0ML' },
        { product: '마사지 건', link: 'https://link.coupang.com/a/brdhpr' },
        { product: '샤워 헤드', link: 'https://link.coupang.com/a/brdinb' },
        { product: '디퓨저', link: 'https://link.coupang.com/a/brdh3D' },
      ],
    },
    {
      title: '다이어트 식단 필요하샤?',
      contents: [
        { product: '닭가슴살', link: 'https://link.coupang.com/a/brcL1g' },
        { product: '채소 믹스', link: 'https://link.coupang.com/a/brcJIN' },
        { product: '그릭 요거트', link: 'https://link.coupang.com/a/brcKiH' },
        { product: '그래놀라', link: 'https://link.coupang.com/a/brcNeP' },
        { product: '단백질 바', link: 'https://link.coupang.com/a/brdd2V' },
      ],
    },
    {
      title: '건강 챙기샤!',
      contents: [
        { product: '유산균', link: 'https://link.coupang.com/a/brcSqL' },
        { product: '비타민 C', link: 'https://link.coupang.com/a/brcSZW' },
        { product: '오메가3', link: 'https://link.coupang.com/a/brcUMf' },
        { product: '멀티 비타민', link: 'https://link.coupang.com/a/brcTlS' },
        { product: '밀크씨슬', link: 'https://link.coupang.com/a/brcWn7' },
      ],
    },
    {
      title: '집들이 선물 고민되샤?',
      contents: [
        { product: '화장지 세트', link: 'https://link.coupang.com/a/brkfIa' },
        { product: '귀여운 홈카페 찻잔 세트', link: 'https://link.coupang.com/a/brkf7g' },
        { product: '뽀송한 세면 타월 세트', link: 'https://link.coupang.com/a/brkhXD' },
        { product: '캔들 워머 세트', link: 'https://link.coupang.com/a/brkjyN' },
        { product: '하이볼 잔 세트', link: 'https://link.coupang.com/a/brklJa' },
      ],
    },
  ],
  mara: [
    {
      title: '아주 그냥 영화관을 차려라 마...',
      contents: [
        { product: '빔 프로젝터', link: 'https://link.coupang.com/a/brc7zj' },
        { product: '프로젝터 스크린', link: 'https://link.coupang.com/a/brc4eR' },
        { product: '스피커', link: 'https://link.coupang.com/a/brc9cn' },
        { product: '스마트 TV', link: 'https://link.coupang.com/a/brdaGM' },
        { product: '빈 백', link: 'https://link.coupang.com/a/brdcX0' },
      ],
    },
    {
      title: '고만 좀 쳐 무라 먀!',
      contents: [
        { product: '하리보 1kg', link: 'https://link.coupang.com/a/brkwVz' },
        { product: '생각이 많을 땐 레몬 사탕이지', link: 'https://link.coupang.com/a/brkAuy' },
        { product: '고구마 말랭이', link: 'https://link.coupang.com/a/brkyMl' },
        { product: '애플망고 젤리', link: 'https://link.coupang.com/a/brkxGb' },
        { product: '꼬마 약과', link: 'https://link.coupang.com/a/brkxnO' },
      ],
    },
    {
      title: '잡스가 되고 싶은 거먀...?',
      contents: [
        { product: '아이폰 15', link: 'https://link.coupang.com/a/brkmxi' },
        { product: '아이폰 프로 2세대', link: 'https://link.coupang.com/a/brkmKG' },
        { product: '애플워치 SE2', link: 'https://link.coupang.com/a/brkm1D' },
        { product: '아이패드 Air 5세대', link: 'https://link.coupang.com/a/brknhz' },
        { product: '에어팟 맥스', link: 'https://link.coupang.com/a/brknxC' },
      ],
    },
    {
      title: '헬스장에 기부 좀 그만 해라먀!',
      contents: [
        { product: '요가 매트', link: 'https://link.coupang.com/a/brkqUr' },
        { product: '멀티 푸쉬업 바', link: 'https://link.coupang.com/a/brko1c' },
        { product: '핑크 덤벨 세트', link: 'https://link.coupang.com/a/brksEr' },
        { product: '폼 롤러', link: 'https://link.coupang.com/a/brkqu7' },
        { product: '운동용 레깅스', link: 'https://link.coupang.com/a/brkrXZ' },
      ],
    },
  ],
};
