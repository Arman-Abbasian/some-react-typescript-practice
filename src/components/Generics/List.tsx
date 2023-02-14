type ListProps<T>={
    items:T[],
    onClick:(value:T)=>void
}

const ConstList = <T extends {}>({items,onClick}:ListProps<T>) => {
    return ( 
        <></>
        // <div key={item.id} onClick={()=>onClick(item)}>
        //     <p>{item}</p>
        // </div>
     );
}
 
export default ConstList;