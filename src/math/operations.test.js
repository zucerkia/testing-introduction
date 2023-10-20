const { suma, sumatoria } = require('./operations');

describe('Operation tests', () => {
  describe('suma', () => {
    test('debe sumar numeros positivos', () => {
      // Arrange
      const num1 = 20;
      const num2 = 3;

      // Act
      const response = suma(num1, num2);

      // Assert
      expect(response).toBe(23);
    });

    test('debe sumar todos los numeros pasados por parametro', () => {
      const response = sumatoria(2, 40, 23, 5);
      expect(response).toBe(70);
    });
  });
});
