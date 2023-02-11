type StringChildrenProps={
    children:string
}

const StringChildren = ({children}:StringChildrenProps) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default StringChildren;