import { useEffect, useState } from "react";
import axios from 'axios';

type AuthUser={
    name:string,
    email:string
}

const User = () => {
    const [user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({name:"Arman",email:"eee@mn.com"})
    };
    
   
    return ( 
        <div>
            <button onClick={handleLogin}>login</button>
        
            {user ?
            <>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
            </>
            :
            <div>not signed in yet </div>
            
        }
            <div></div>
        </div>
     );
}
 
export default User;