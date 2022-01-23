import React from "react";
import { useEffect, useState, useRef } from "react";

import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        
    }
    return (
        <div style={{ display: 'flex' }}>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            <p> {title} </p>
            <button onClick={() => removeTodo(id)}> X </button>
        </div>
    )
}

export { TodoItem };