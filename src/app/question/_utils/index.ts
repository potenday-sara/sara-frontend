export const makeRandomNumber = (length: number, maxNumber: number) => {
  const randomNumbers = new Set<number>();
  while (randomNumbers.size < length) {
    const randomNum = Math.floor(Math.random() * maxNumber);
    randomNumbers.add(randomNum);
  }

  return Array.from(randomNumbers);
};
