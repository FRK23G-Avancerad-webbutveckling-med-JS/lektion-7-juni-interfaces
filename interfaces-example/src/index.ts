import { User, Response, Todo } from './interfaces';

const user: User = {
  name: 'Ada',
  age: 30,
};

async function getTodos() {
  const response = await fetch('https://dummyjson.com/todos');
  const data: Response = await response.json();

  const todos: Todo[] = data.todos;
}
