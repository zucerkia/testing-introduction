const axios = require('axios');
const { getAllTodos } = require('./todos');

jest.mock('axios');

const fakeResponse = [
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true,
  },
];

describe('Probar que se traingan todos los todos', () => {
  test('debe devolver los todos de la api', async () => {
    // Arrange
    axios.get.mockResolvedValue({ data: fakeResponse });

    // Act
    const result = await getAllTodos();
    console.log(result);
    // Assert
    expect(result.length).toBe(3);
  });
});
