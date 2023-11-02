import { completeTodo } from '@/app/lib/actions';
import { Todo } from './page';

interface CompleteCheckboxProps {
  todo: Todo;
}

export const CompleteCheckbox = ({ todo }: CompleteCheckboxProps) => {
  return (
    <>
      <form action={completeTodo}>
        <input type="hidden" name="id" value={todo.id} />
        <input type="hidden" name="completed" value={`${todo.completed}`} />
        <button>{todo.completed ? '✅' : '☑️'}</button>
      </form>
    </>
  );
};
