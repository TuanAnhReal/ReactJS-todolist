import React from "react";
import TodoHeader from './TodoHeader';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import '../App.css';

export default class TodoApp extends React.Component {
    tasks = [
        { id: '1', name: 'Quét nhà' },
        { id: '2', name: 'Giặt đồ' },
        { id: '3', name: 'Làm bài tập' },
        { id: '4', name: 'Đi chợ' }
    ];
    render() {
        return (
            <div className="container py-5">
                <div className="card shadow card--custom">
                    <TodoHeader />
                    <div className="card-body">
                        <TodoAdd />
                        <TodoList tasks={this.tasks} />
                    </div>
                </div>
            </div>
        );
    }
}

