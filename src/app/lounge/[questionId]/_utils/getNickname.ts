const 형용사 = [
  '스마트한',
  '트렌디한',
  '고급스러운',
  '실용적인',
  '혁신적인',
  '유니크한',
  '세련된',
  '친환경적인',
  '합리적인',
  '프리미엄',
  '감각적인',
  '다채로운',
  '품위 있는',
  '미래지향적인',
  '전문가용',
  '맞춤형',
  '간편한',
  '진귀한',
  '명품의',
  '희귀한',
  '야무진',
  '듬직한',
  '신중한',
  '지혜로운',
  '균형잡힌',
  '안정적인',
  '세심한',
  '철저한',
  '현명한',
  '검소한',
  '고요한',
  '단단한',
  '인내심있는',
  '진지한',
  '끈기있는',
  '우아한',
  '영리한',
  '명확한',
  '신뢰할 수 있는',
  '귀여운',
  '사랑스러운',
  '깜찍한',
  '부드러운',
  '상큼한',
  '시원한',
  '달콤한',
  '아름다운',
  '화려한',
  '신비로운',
  '용감한',
  '활발한',
  '명랑한',
  '즐거운',
  '평화로운',
  '다정한',
  '친절한',
  '상냥한',
  '순수한',
  '청초한',
  '고귀한',
  '기품 있는',
  '당당한',
  '씩씩한',
  '용맹한',
  '깔끔한',
  '산뜻한',
  '청량한',
  '경쾌한',
  '발랄한',
  '기발한',
  '독특한',
  '매력적인',
  '다정다감한',
  '따뜻한',
  '포근한',
  '온화한',
  '섬세한',
  '고상한',
  '화사한',
  '청아한',
  '빈티지한',
  '모던한',
  '미니멀한',
  '심플한',
  '클래식한',
  '시크한',
  '럭셔리한',
  '힙한',
  '쿨한',
  '캐주얼한',
  '스포티한',
  '레트로한',
  '키치한',
  '아방가르드한',
  '아티스틱한',
  '크리에이티브한',
  '말끔한',
  '사이버펑크한',
  '미스터리한',
  '시니컬한',
  '드라마틱한',
  '다이나믹한',
  '비비드한',
  '스파클링한',
];
const 명사 = [
  '가시고기',
  '고양이',
  '흰나비',
  '다람쥐',
  '마카롱',
  '바다사자',
  '아이스크림',
  '자전거',
  '소설책',
  '아기천사',
  '초콜릿',
  '커피잔',
  '토끼풀',
  '파인애플',
  '파란하늘',
  '호랑이',
  '물고기',
  '살구나무',
  '사과숲',
  '초승달',
  '뭉게구름',
  '높새바람',
  '싸락눈',
  '여우비',
  '무지개',
  '돌고래',
  '코끼리',
  '기린',
  '팬더',
  '캥거루',
  '펭귄',
  '앵무새',
  '공작',
  '거북이',
  '달팽이',
  '개구리',
  '고슴도치',
  '여우',
  '늑대',
  '사슴',
  '반달곰',
  '독수리',
  '부엉이',
  '백조',
  '샴페인',
  '라벤더',
  '마티니',
  '모히토',
  '에스프레소',
  '카푸치노',
  '머랭',
  '샤베트',
  '슈크림',
  '시나몬',
  '바질',
  '로즈마리',
  '파슬리',
  '케일',
  '로메인',
  '민트초코',
  '라임',
  '유자',
  '자몽',
  '패션후르츠',
  '용과',
  '리치',
  '망고스틴',
  '두리안',
  '망고',
  '파파야',
  '달무리',
  '은하수',
  '오로라',
  '북극성',
  '레모네이드',
  '모래성',
];

const generateRandomNickname = () => {
  const randomAdjective = 형용사[Math.floor(Math.random() * 형용사.length)];
  const randomNoun = 명사[Math.floor(Math.random() * 명사.length)];
  return `${randomAdjective} ${randomNoun}`;
};

export default function getNickname(key: string) {
  // 형용사에서 단어 하나 명사에서 단어 하나를 꺼내 조합해서 반환하는 함수

  const nickName = () => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    }

    const newNickName = generateRandomNickname();
    localStorage.setItem(key, newNickName);

    return newNickName;
  };

  return nickName();
}
