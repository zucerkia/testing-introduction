const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => {
  if (num1 < 0 || num2 < 0) return null;
  return num1 - num2;
};

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => {
  if (num2 === 0) return null;
  return num1 / num2;
};

const sumatoria = (...numbers) => {
  numbers.reduce((acc, current) => acc + current, 0);
};

module.exports = {
  suma, resta, multiplicacion, division, sumatoria,
};
