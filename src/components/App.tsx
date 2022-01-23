import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

/*This is imports are for @matrial-ui */
//import { Input } from '@mui/material';


const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
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
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return {
        ...todo,
        complete: !todo.complete,
      }
    }))
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])
  return (
    <div className="App">
      <div>
        <input value={value} onKeyDown={onKeyDown} onChange={handleChange} ref={inputRef}></input>
        <button onClick={addTodo}> КНОПКА </button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
