import React, { useState } from 'react';

const App = () => {
  const [todo, setToDo] = useState(['Take dogs work','start probelm solving'])
  const [input, setInput] = useState('');
  const addToDo =(e) =>{
    setToDo([...todo,input])
    e.preventDefault();
    setInput('')
  }
  return (
    <div>
      <h3>To Do App</h3>
      <form action="">
      <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='add to do hear' name="" id="" />
      <button type='submit' onClick={addToDo}>Add</button>
      </form>
   
      <ul>
      {
        todo.map(td=>  <li>{td}</li>)
      }
      </ul>
    </div>
  );
};

export default App;