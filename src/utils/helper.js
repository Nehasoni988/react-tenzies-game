export const createDicesData = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: i + 1,
      value: generateRandomNumberForDice(),
      held: false,
    });
  }
  return arr;
};

export const generateRandomNumberForDice = () => {
  let min = 1;
  let max = 6;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
