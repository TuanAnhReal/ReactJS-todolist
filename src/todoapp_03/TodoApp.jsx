import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionGetTodo } from './redux/reducers/todoSlice';
import TodoHeader from './TodoHeader';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import '../App.css';

export default function TodoApp() {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:5000/tasks').then((res) => dispatch(actionGetTodo(res.data)));
    }, [dispatch]);

    return (
        <div className="container py-5">
            <div className="card shadow card--custom">
                <TodoHeader />
                <div className="card-body">
                    <TodoAdd />
                    <TodoList />
                </div>
            </div>
        </div>
    );
}