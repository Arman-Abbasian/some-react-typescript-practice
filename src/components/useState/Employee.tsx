import {useState} from 'react';

type Employee = {
  salary: number;
  name: string;
  age?:number
};

const Employee = () => {
  // 👇️ const employees: Employee[]
  const [employees, setEmployees] = useState<Employee[]>([]);

  return (
    <div>
      <button
        onClick={() =>
          setEmployees(prevEmployees => [
            ...prevEmployees,
            {salary: 100, name: 'Bob'},
          ])
        }
      >
        Add employee
      </button>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>
              salary: {employee.salary} / name: {employee.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
