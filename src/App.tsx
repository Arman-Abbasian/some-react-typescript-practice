import React, { ChangeEvent, useState } from 'react';
import './App.css';
import StringChildren from './components/children/StringChildren';
import TagChildren from './components/children/TagChildren';
import Button from './components/Events/Button';
import Input from './components/Events/Input';
import Greet from './components/Greet/Greet';
import Persons from './components/Person/Persons';
import Status from './components/Status/Status';
import Counter from './components/useReducer/Counter';
import Employee from './components/useState/Employee';
import LoggedIn from './components/useState/LoggedIn';
import User from './components/useState/User';
import Users from './components/useState/Users';

const persons=[
  {id:1,firstName:"Jack",lastName:"meley"},
  {id:2,firstName:"Harry",lastName:"Mag"},
  {id:3,firstName:"Stephen",lastName:"Farlin"}
]

function App() {
  const [inputVal,setInputVal]=useState("");
  const clickHandler=(e:React.MouseEvent<HTMLButtonElement>,id:number)=>{
    console.log(e.target,1)
  }
  const  changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setInputVal(e.target.value)
  }
  return (
    <div className="App">
     {/* <Greet name='Arman' isLoggedIn={false} messageCount={10} /> */}
     {/* <Persons persons={persons} /> */}
     {/* <Status status='error' /> */}
     {/* <StringChildren>ali</StringChildren>
     <TagChildren>
      <StringChildren>Ahmad</StringChildren>
     </TagChildren> */}
    {/* <Button id={1} handleClick={(e)=>clickHandler(e,1)}/> */}
    {/* <Input inputVal={inputVal} changeHandler={(e)=>changeHandler(e)} /> */}
    {/* <LoggedIn /> */}
    {/* <User /> */}
    <Users />
    {/* <Employee /> */}
    {/* <Counter /> */}
    </div>
  );
}

export default App;
