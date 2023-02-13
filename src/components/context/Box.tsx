import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

const Box = () => {
    const theme=useContext(ThemeContext);
    return ( 
        <>
        <div style={{backgroundColor:theme.primary.main,color:theme.primary.text}}>theme context</div>
        <div style={{backgroundColor:theme.secondary.main,color:theme.secondary.text}}>theme context</div>
        </>
     );
}
 
export default Box;