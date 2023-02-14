import React, { createContext, useState } from "react";
type TodoObjectContextType={
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

type TodoStateContextType={
    todos:TodoObjectContextType[]|null,
    setUser:React.Dispatch<React.SetStateAction<TodoObjectContextType[]|null>>
}
// type TodoActionsContextType={
//     setUser:React.Dispatch<any>
// }
type TodoContextProviderProps={
    children:React.ReactNode
}

const TodoContext=createContext<TodoStateContextType| null>(null);
// const TodoContextDispatcher=createContext<TodoActionsContextType|null>(null);

const TodoProvider = ({ children }:TodoContextProviderProps) => {
    const [todos, setTodos] = useState<TodoObjectContextType[]|null>(null);
    return (
      <></>
      // <TodoContext.Provider value={{ todos,setTodos }}>
      //   {children}
      // </TodoContext.Provider>
    );
  };
 
export default TodoProvider;