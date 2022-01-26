import React from "react";
import { useEffect, useState, useRef } from "react";
import { styled } from '@mui/material/styles';

import { ITodo } from '../types/data';


import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Delete from './Delete';
import { StringLiteralLike } from "typescript";

import CircleIcon from '@mui/icons-material/Circle';
interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

interface IconCheckbox {
    checked: boolean;
    onChange: () => void;
}

const IconCheckboxes: React.FC<IconCheckbox> = (props) => {
    const { checked, onChange } = props;
    return (
        <div>
            <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
}

interface IconNumber {
    number: number;
}
const IconNumber: React.FC<IconNumber> = ({
    number
}) => {
    return (
        <span style={{
            display: 'flex',
            position: "relative",
            justifyContent: "space-around",
            alignItems: "center",
        }}>
            <Typography sx={{ position: 'absolute', marginBottom: '', color: 'green' }}> {number}</Typography>
            <CircleIcon sx={{ top: '50%', bottom: "50%" }} />
        </span>
    )
}

//TODO: Make a line break
const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;
    return (
        <Grid container
            sx={{

                borderRight: 1,
                borderBottom: 1,
                borderLeft: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: '100%'
            }}
        >
            <Grid item xs={3}>
                <IconCheckboxes checked={complete} onChange={() => toggleTodo(id)} />
            </Grid>


            <Grid item xs={3}>
                <div>
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                </div>
            </Grid>


            <Grid item xs={3}>
                <Delete onClick={() => removeTodo(id)} />
            </Grid>
        </Grid>
    )
}

export { TodoItem };