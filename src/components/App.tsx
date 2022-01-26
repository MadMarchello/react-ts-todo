import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

/*This is imports are for @matrial-ui */
import { TextField, Typography } from '@mui/material';
import { Button, Toolbar, IconButton } from '@mui/material';
import { Container, Grid, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const idCounter = useRef(0);
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
        id: idCounter.current,
        title: value.trim(),
        complete: false,
      }])
    } else {
      alert('Please, enter what you want to do');
    }
    setValue('');
    idCounter.current++;
  }
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        complete: !todo.complete,
      }
    }))
  }

  return (
    <Box>
    <AppBar position="static">
      <TextField
        id="filled-basic"
        label="Введите название дела"
        value={value}
        onKeyDown={onKeyDown}
        onChange={handleChange}
      />
      <Button onClick={addTodo} variant="contained"> Добавить </Button>
    </AppBar>
    <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </Box>
  );
}

export default App;
