import React, { useState } from 'react';
import '../src/App.css';
const App = () =>{
  const [message, setMessage] = useState("hello word!");
  return (

    <div>
    <div className='container'>{message}</div>
    <button onClick={() =>setMessage ( "heloooooooooo")}>mudar mensagem</button>
    </div>
  
  );
  
};

export default App;
