import React, { useState } from 'react';
import '../src/App.css';
import AddTask from './componetes/AddsTask';
import Tasks from './componetes/Tasks';
const App = () =>{
  const [tasks, setTasks ] = useState([{

    id:'1',
    title:  'Estudar programação',
    completed: false,
  },

  {
    id:'2',
    title:  'Ler Livros',
    completed: true,
  }]);
  return (

    <div>
    <div className='container'> 
    <AddTask/>
    <Tasks tasks={tasks} /> </div>
    </div>
  
  );
  
};

export default App;
