const axios = require('axios');

const getAllTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  return response.data;
};

module.exports = {
  getAllTodos,
};
