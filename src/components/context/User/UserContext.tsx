import React, { createContext, useState } from "react";

type AuthUser={
    name:string,
    email:string
}
type UserContextType={
    user:AuthUser|null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser|null>>
}

type UserContextProviderProps={
    children:React.ReactNode
}
export const UserContext=createContext({} as UserContextType )

const UserContextProvider = ({children}:UserContextProviderProps) => {
    const [user,setUser]=useState<AuthUser |null>(null)
    return ( 
        <UserContext.Provider value={{user,setUser}}>

        </UserContext.Provider>
     );
}
 
export default UserContext;