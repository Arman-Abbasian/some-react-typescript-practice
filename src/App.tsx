import React from 'react';
import './App.css';
import Greet from './components/Greet/Greet';
import Persons from './components/Person/Persons';
import Status from './components/Status/Status';

const persons=[
  {id:1,firstName:"Jack",lastName:"meley"},
  {id:2,firstName:"Harry",lastName:"Mag"},
  {id:3,firstName:"Stephen",lastName:"Farlin"}
]

function App() {
  return (
    <div className="App">
     {/* <Greet name='Arman' isLoggedIn={false} messageCount={10} /> */}
     {/* <Persons persons={persons} /> */}
     {/* <Status status='error' /> */}

    </div>
  );
}

export default App;
