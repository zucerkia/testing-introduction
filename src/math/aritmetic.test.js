const { suma, division, resta } = require('./aritmetic');

describe('Probar las funciones aritmeticas', () => {
  describe('SUMA', () => {
    test('La suma debe permitir numeros positivos', () => {
      // Arrange
      const num1 = 10;
      const num2 = 20;

      // Act
      const result = suma(num1, num2);
      console.log(result);

      // Assert
      expect(result).toBe(30);
    });
  });

  describe('DIVISION', () => {
    test('La division debe funcionar', () => {
      // Arrange
      const num1 = 10;
      const num2 = 2;

      // Act
      const result = division(num1, num2);
      console.log(result);

      // Assert
      expect(result).toBe(5);
    });

    test('La division debe devolver null si se divide por cero', () => {
      // Arrange
      const num1 = 10;
      const num2 = 0;

      // Act
      const result = division(num1, num2);
      console.log(result);

      // Assert
      expect(result).toBeNull();
    });
  });
  describe('REST', () => {
    test('debe funcionar la resta con numeros positivos', () => {
      // Arrange
      const num1 = 10;
      const num2 = 10;

      // Act
      const result = resta(num1, num2);
      console.log(result);

      // Assert
      expect(result).toBe(0);
    });
    test('no debe permitir numeros negativos', () => {
      // Arrange
      const num1 = 10;
      const num2 = -10;

      // Act
      const result = resta(num1, num2);
      console.log(result);

      // Assert
      expect(result).toBeNull();
    });
  });
});
