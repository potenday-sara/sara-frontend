const shareKakao = (answerId, questionId, type) => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
    }
    kakao.Share.sendCustom({
      templateId: 105401,
      templateArgs: {
        url: `community?type=${type}&answerId=${answerId}&questionId=${questionId}`,
      },
    });
  }
};

export default shareKakao;
