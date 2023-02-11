type GreetProps={
    name:string,
    isLoggedIn:boolean,
    messageCount:number
}

const Greet = ({name,isLoggedIn,messageCount}:GreetProps) => {
    return ( 
        <div>
            {isLoggedIn ?
            <p>welcome {name} you have {messageCount} unread message</p>
             :
             <p>Hello gust</p>
             }
        </div>
     );
}
 
export default Greet;