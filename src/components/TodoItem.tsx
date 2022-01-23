import React from "react";
import { useEffect, useState, useRef } from "react";

import { ITodo } from '../types/data';

interface ITodoItem extends ITodo{

}
const TodoItem: React.FC<ITodoItem>= (props) => {
    const {id, title, complete } = props;

    return (
        <div style={{display: 'flex'}}>
            <input type="checkbox" checked={complete} />
            <p> {title} </p>
            <button> X </button>
        </div>
    )
}

export {TodoItem};