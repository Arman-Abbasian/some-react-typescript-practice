import StringChildren from "./StringChildren";

type TagChildrenProps={
    children:React.ReactNode
}


const TagChildren = ({children}:TagChildrenProps) => {
    return ( 
        <div>
            <StringChildren>Ali</StringChildren>
            <div>{children}</div>
        </div>
     );
}
 
export default TagChildren;