const suma = (number1, number2) => number1 + number2;

const resta = (number1, number2) => number1 - number2;

const multipl = (number1, number2) => number1 * number2;

const division = (number1, number2) => {
  if (number2 === 0) {
    return null;
  }
  return number1 - number2;
};

const sumatoria = (...numbers) => numbers.reduce((acc, current) => acc + current, 0);

module.exports = {
  suma, resta, multipl, division, sumatoria,
};
