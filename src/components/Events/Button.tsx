type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    id:number
}
const Button = ({handleClick,id}:ButtonProps) => {
    return ( 
        <div>
            <button onClick={(event)=>handleClick(event,id)}>click me</button>
        </div>
     );
}
 
export default Button;