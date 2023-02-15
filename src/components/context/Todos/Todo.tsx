import * as React from 'react';
import { ITodo } from './TodoContext';


type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo= ({ todo, updateTodo }:Props) => {
    console.log(todo)
  const checkTodo: string = todo.completed ? `line-through` : '';
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
      </div>
      <button onClick={() => updateTodo(todo.id)} className={todo.completed ? `hide-button` : 'Card--button'}>
        Complete
      </button>
    </div>
  );
};
export default Todo;