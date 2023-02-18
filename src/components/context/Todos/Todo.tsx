import { ITodo } from './TodoContext';


type Props = {
  todo: ITodo;
  updateTodo: (id: ITodo) => void;
};

const Todo= ({ todo, updateTodo }:Props) => {
  return (
    <div>
      <div>
        <h1>{todo.title}</h1>
      </div>
      <button onClick={() => updateTodo(todo)} className={todo.completed ? `${{styles:'line-through'}}` : ''}>
        Complete
      </button>
    </div>
  );
};
export default Todo;