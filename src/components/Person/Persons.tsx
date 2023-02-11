import Person from "./Person";

type PersonsProps={
    persons:{
            id:number,
            firstName:string,
            lastName:string,
    }[]
}
const Persons = ({persons}:PersonsProps) => {
    return ( 
        <div>
            {persons.map(item=>{
                return <div key={item.id}>
                    <Person specification={item} />
                </div>
            })}
        </div>
     );
}
export default Persons;