import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


import { useState, useEffect } from 'react';

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 2, text: "walk the cat", completed: false },
    { id: 3, text: "walk the fish", completed: false },
    { id: 4, text: "walk the dino", completed: true },
    { id: 5, text: "walk the chickens", completed: false },
]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return []
    return data;
}

export default function TodoList() {

    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos])

    const removeTodo = (todoRemove) => {
        setTodos(currTodo => {
            return currTodo.filter(todo => todo.id !== todoRemove.id); /// kad su ove {} mora return
        });
    };

    const changeCompleted = (id) => {
        setTodos(currTodo => {
            return currTodo.map(t => {
                if (t.id === id) {
                    return { ...t, completed: !t.completed };
                } else {
                    return t;
                }
            })
        });
    };

    const addTodo = (text) => {
        setTodos(currTodo => {
            return [...currTodo, { id: crypto.randomUUID(), text: text, completed: false }];
        });
    }




    return (
        <Box sx={{
            display: "flex", justifyContent: "center", marginTop: "10px", flexDirection: "column", alignItems: "center"
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem todo={todo} removeTodo={removeTodo} key={todo.id} toggle={changeCompleted} /> /// kad su () ne treba return
                ))}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );

}


