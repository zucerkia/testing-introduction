const axios = require('axios');

const getAllTodo = async () => {
  let todos = [];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    todos = response.data;
  } catch (error) {
    console.error(error);
  }

  return todos;
};

module.exports = {
  getAllTodo,
};
