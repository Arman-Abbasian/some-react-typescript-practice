import * as React from 'react';
import Todo from './Todo';
import { ITodo, TodoContext, TodoContextType } from './TodoContext';


export const Todos = () => {
  const { todos, getTodos,updateTodo } = React.useContext(TodoContext) as TodoContextType;
  React.useEffect(()=>{
    getTodos()
  },[])
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={()=>updateTodo(todo.id)} todo={todo} />
      ))}
    </>
  );
};