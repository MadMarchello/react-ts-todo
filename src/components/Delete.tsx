import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

//<button onClick={() => removeTodo(id)}> X </button>
interface DeleteButton {
    onClick: () => void;
}
const DeleteButton: React.FC<DeleteButton> = ({ onClick }) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={onClick} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </Stack>
    );
}

export default DeleteButton;