import * as React from 'react';
import Todo from './Todo';
import { ITodo, TodoContext, TodoContextType } from './TodoContext';


export const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};