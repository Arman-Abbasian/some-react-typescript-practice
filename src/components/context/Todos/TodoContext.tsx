import axios from 'axios';
import * as React from 'react';

export type ITodo= {
    userId:number,
    id: number;
    title: string;
    completed: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    getTodos:() => void
  };
  type ThemeContextProviderProp={
    children:React.ReactNode
  }

  export const TodoContext = React.createContext<TodoContextType | null>(null);

  const TodoProvider= ({ children }:ThemeContextProviderProp) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
      {
        userId:1,
        id: 1,
        title: 'post 1',
        completed: false,
      },
      {
        userId:1,
        id: 2,
        title: 'post 2',
        completed: true,
      },
    ]);
    const addTodo = (todo: ITodo) => {
      const newTodo: ITodo = {
        userId:1,
        id: Math.random(),
        title: todo.title,
        completed: false,
      };
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res=>getTodos())
      .catch(err=>console.log(err.message))
    };
    const updateTodo = (id: number) => {
      console.log("update todo")
    };
    const getTodos = () => {
      axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res=>setTodos(res.data))
      .catch(err=>console.log(err.message))
    };
    return <TodoContext.Provider value={{ todos, addTodo, updateTodo,getTodos }}>
                {children}
            </TodoContext.Provider>;
  };
  
  export default TodoProvider;