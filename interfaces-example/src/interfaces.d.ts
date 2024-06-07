interface User {
  name: string;
  age: number;
  isHappy?: boolean; // ? innebär att denna egenskap är valbar att ha med
}

interface Response {
  limit: number;
  skip: 0;
  todos: Todo[];
  total: number;
}

interface Todo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

export { User, Response, Todo };
