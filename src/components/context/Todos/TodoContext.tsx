import axios from 'axios';
import * as React from 'react';

export type ITodo= {
    id: number;
    title: string;
    completed: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[]|null;
    addTodo: (todo: ITodo) => void;
    updateTodo: (id: ITodo) => void;
    getTodos:() => void
  };
  type ThemeContextProviderProp={
    children:React.ReactNode
  }

  export const TodoContext = React.createContext<TodoContextType | null>(null);

  const TodoProvider= ({ children }:ThemeContextProviderProp) => {
    const [todos, setTodos] = React.useState<ITodo[]|null>(null);
    const addTodo = (todo: ITodo) => {
      const newTodo: ITodo = {
        id: Math.random(),
        title: todo.title,
        completed: false,
      };
      axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
      .then(res=>getTodos())
      .catch(err=>console.log(err.message))
    };
    const updateTodo = (todo: ITodo) => {
      const sample={...todo};
      sample.completed=!sample.completed;
      todo=sample;
      axios.post('https://jsonplaceholder.typicode.com/todos',todo)
      .then(res=>getTodos())
      .catch(err=>console.log(err.message))
    };
    const getTodos = () => {
      axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
      .then(res=>setTodos(res.data))
      .catch(err=>console.log(err.message))
    };
    return <TodoContext.Provider value={{ todos, addTodo, updateTodo,getTodos }}>
                {children}
            </TodoContext.Provider>;
  };
  
  export default TodoProvider;