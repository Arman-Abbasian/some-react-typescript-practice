import React, { createContext } from "react";

type AuthUser={
    name:string,
    email:string
}
type UserContextType={
    user:AuthUser,
    setUser:React.Dispatch<React.SetStateAction<AuthUser|null>>
}

type UserContextProviderProps={
    children:React.ReactNode
}
export const UserContext=createContext({} as UserContextType )

const UserContextProvider = ({children}:UserContextProviderProps) => {
    return ( 
        <div>

        </div>
     );
}
 
export default UserContext;