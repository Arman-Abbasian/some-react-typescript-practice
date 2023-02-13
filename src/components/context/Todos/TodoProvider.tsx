import { createContext, useState } from "react";
type TodoObjectContextType={
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
type TodoStateContextType={
    todos:TodoObjectContextType[]
}
type TodoActionsContextType={
    setUser:React.Dispatch<any>
}
type TodoContextProviderProps={
    children:React.ReactNode
}

const TodoContext=createContext<TodoStateContextType | null>(null);
const TodoContextDispatcher=createContext<TodoActionsContextType|null>(null);

const TodoProvider = ({children}:TodoContextProviderProps) => {
    const [todos,setTodos]=useState<TodoStateContextType|null>(null);
    return ( 
        <TodoContext.Provider value={todos}>
            <TodoContextDispatcher.Provider value={setTodos}>
                {children}
            </TodoContextDispatcher.Provider>
        </TodoContext.Provider>
     );
}
 
export default TodoProvider;