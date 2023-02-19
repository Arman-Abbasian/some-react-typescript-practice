import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';
import StringChildren from './components/children/StringChildren';
import TagChildren from './components/children/TagChildren';
import Box from './components/context/Box';
import AddTodo from './components/context/Todos/AddTodo';
import  TodoContext  from './components/context/Todos/TodoContext';
import UserContextProvider from './components/context/User/UserContext';
import UserContext from './components/context/User/UserContext';
import Userr from './components/context/User/Userr';
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
import TodoProvider from './components/context/Todos/TodoContext';
import { Todos } from './components/context/Todos/Todos';
import { useDispatch,useSelector } from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';
import { actionCreators } from './state/index'
import { State } from './redux';
import {Provider} from 'react-redux'
import { RootStore } from './asyncRedux/store';
import { GetTodos } from './asyncRedux/todo/todoActions';
import { TodosType } from './asyncRedux/todo/todoTypes';



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
const dispatch=useDispatch();


const todoState=useSelector((state:RootStore)=>state.todo);
useEffect(()=>{
  dispatch(GetTodos())
},[])
const handleSubmit=()=>{
  // dispatch(GetPokemon(pokemonName))
}
console.log(todoState)
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
    {/* <Users /> */}
    {/* <Employee /> */}
    {/* <Counter /> */}
    {/* <Box /> */}
    {/* <UserContext>
    <Userr />
    </UserContext> */}
    {/* <Private isLoggedIn={false}  /> */}
    {/* <TodoProvider>
      <main className='App'>
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider> */}
    <div>
      {todoState.todo &&
      todoState.todo.map((item:any)=>(
        <p>{item.title}</p>
      ))
      }
    </div>
    </div>
  );
}

export default App;
