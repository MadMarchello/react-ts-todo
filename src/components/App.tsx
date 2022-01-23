import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

/*This is imports are for @matrial-ui */
//import { Input } from '@mui/material';


const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

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
        <input value={value} onChange={handleChange}></input>
        <button onClick={addTodo}> КНОПКА </button>
      </div>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
