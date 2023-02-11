import { ChangeEvent } from "react";

type InputProps={
    inputVal:string,
    changeHandler:(e:ChangeEvent<HTMLInputElement>)=>void
}


const Input = ({inputVal,changeHandler}:InputProps) => {
    return ( 
        <div>
            <input type="text" value={inputVal} onChange={(e)=>changeHandler(e)} />
        </div>
     );
}
 
export default Input;