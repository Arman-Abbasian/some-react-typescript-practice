import { useState } from "react";

const LoggedIn = () => {
    const [loggedIn,setLoggedIn]=useState(false)
    return ( 
        <div>
            <button onClick={()=>setLoggedIn(true)}>log in</button>
            <button onClick={()=>setLoggedIn(false)}> log out</button>
            <div>user is {loggedIn?'logged in':'logged out'}</div>
        </div>
     );
}
 
export default LoggedIn;