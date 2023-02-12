import { useState } from "react";

type AuthUser={
    name:string,
    email:string
}

const User = () => {
    const [user,setUser]=useState<AuthUser|null>(null)
    const handleLogin=()=>{
        
    };
    const handleLogout=()=>{
        
    }
    return ( 
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
            <div></div>
        </div>
     );
}
 
export default User;