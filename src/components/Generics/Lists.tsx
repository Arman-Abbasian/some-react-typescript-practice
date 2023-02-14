import ConstList from "./List";

const items=[{id:1,name:"Ali"},{id:2,name:"javad"},{id:3,name:"sina"}]
const Lists = () => {
    const clickHandler=()=>{
        console.log("item")
    }
    return ( 
        <div>
            {/* <ConstList item={items} onClick={clickHandler} /> */}
        </div>
     );
}
 
export default Lists;