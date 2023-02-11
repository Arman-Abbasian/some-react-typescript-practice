type PersonProps={
    specification:
    {
    id:number,
    firstName:string,
    lastName:string
}
}

const Person = ({specification}:PersonProps) => {
    return ( 
        <div>
            <p>{specification.firstName} {specification.lastName}</p>
        </div>
     );
}
 
export default Person;