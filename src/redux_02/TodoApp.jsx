import React from 'react';
import TodoHeader from './TodoHeader';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    render() {
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
}

export default TodoApp;