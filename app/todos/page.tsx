import { todos } from '@/data.json';
import { CompleteCheckbox } from './buttons';
import EditDialog from './edit-dialog';

const { API_URL } = process.env ?? '';

export type Todos = typeof todos;
export type Todo = Todos[number];

export default async function Page() {
  const res = await fetch(`${API_URL}/todos`);
  const todos: Todo[] = await res.json();

  return (
    <div>
      <h1>ToDo App</h1>
      <ul>
        {todos.map((todo) => (
          <li className="flex" key={todo.id}>
            <CompleteCheckbox todo={todo} />
            <div className="p-7">
              <span>{todo.title}</span>
              <p>{todo.description}</p>
            </div>
            <EditDialog todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
