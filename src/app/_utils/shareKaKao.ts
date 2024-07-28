'use client';

const shareKakao = (questionId: string) => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      console.log('', process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
    console.log('whyt');
    kakao.Share.sendCustom({
      templateId: 105401,
      templateArgs: {
        url: `lounge/${questionId}`,
      },
    });
  }
};

export default shareKakao;
