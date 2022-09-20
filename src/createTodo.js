import { v4 } from 'uuid';

export default function createTodo(name, isDone) {
  return { name, isDone, id: v4() };
}
