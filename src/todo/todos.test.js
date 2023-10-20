const axios = require('axios');
const { getAllTodo } = require('./todos');

jest.mock('axios');

describe('todos tests', () => {
  const fakeTodos = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];

  test('debe traer todos los todo', async () => {
    axios.get.mockResolvedValue({ data: fakeTodos });

    const todos = await getAllTodo();
    console.log(todos);
    expect(todos.length).toBe(2);
  });
});
