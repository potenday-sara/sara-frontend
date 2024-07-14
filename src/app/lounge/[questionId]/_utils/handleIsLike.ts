export function getIsLike(questionId: string) {
  const checkIsLike = () => {
    const isLikeString = localStorage.getItem('isLike');

    if (isLikeString) {
      const isLike = JSON.parse(isLikeString);
      return isLike[questionId] ?? false;
    }

    return false;
  };

  return checkIsLike();
}

export function handleSetIsLike(questionId: string, isLike: boolean) {
  const isLikeString = localStorage.getItem('isLike');
  let isLikeObject = {};

  if (isLikeString) {
    isLikeObject = JSON.parse(isLikeString);
  }

  isLikeObject[questionId] = isLike;
  localStorage.setItem('isLike', JSON.stringify(isLikeObject));
}
