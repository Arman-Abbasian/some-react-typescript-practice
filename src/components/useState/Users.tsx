import axios from "axios";
import { useEffect, useState } from "react";

type AuthUser={
    id:number,
    name:string,
    userName:string,
    email:string
    address:Object,
    phone:string,
    website:string,
    company:Object,
}
type AuthUsers={
    map(arg0: (item: AuthUser) => JSX.Element): import("react").ReactNode;
    user:AuthUser[]
}

const Users = () => {
    const [users,setUsers]=useState<AuthUsers |null>(null);
    
   useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
   .then(res=>{
   setUsers(res.data)
   })
   .catch(err=>console.log(err.message))
   },[])
    return ( 
        <div>
           {users && 
           users.map((item:AuthUser)=>{
            return <div key={item.id} style={{backgroundColor:'green'}}>
            <p>{item.name}</p>
            <p>{item.email}</p>
           </div>
           })
           }
        </div>
     );
}
 
export default Users;