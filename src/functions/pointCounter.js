const pointCounter = (cart) => {
  let countedValue = 0;
  if (cart >= 100) {
    countedValue += (cart - 100) * 2;
    countedValue += 50;
  } else if (cart > 50) {
    countedValue = cart % 50;
  } else countedValue = 0;
  return countedValue;
};

export default pointCounter;
