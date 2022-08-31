
let idCounter = 0;

export default function createTodo(name, isDone) {
  idCounter++;
  return { name, isDone, id: idCounter };
}
