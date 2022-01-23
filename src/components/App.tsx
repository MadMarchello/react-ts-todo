import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { ITodo } from '../types/data';
import { Input } from '@mui/material';


const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    if (value.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        title: value.trim(),
        complete: false,
      }])
    } else {
      alert('Please, enter what you want to do');
    }
    setValue('');
  }

  return (
    <div className="App">
      <div>
        <input value={value} onChange={e => setValue(e.target.value)}></input>
        <button onClick={addTodo}> КНОПКА </button>
      </div>
    </div>
  );
}

export default App;
