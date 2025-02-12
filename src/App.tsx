import React from 'react';

import { Header } from './components/Header/Header'
import { TodoPanel } from './components/TodoPanel/TodoPanel'

import styles from './App.module.css';

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task 1', description: 'description 1', checked: false },
    { id: 2, name: 'task 2', description: 'description 2', checked: false },
    {
        id: 3,
        name: 'task 3',
        description:
            'so long task description 3 so long task description so long task description so long task description so long task description',
        checked: true
    }
];

export const App = () => {
    const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);
    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

    const selectTodoIdForEdit = (id: Todo['id']) => {
        setTodoIdForEdit(id);
    };

    const deleteTodo = (id: Todo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
        setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
    };

}