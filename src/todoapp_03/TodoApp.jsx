import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actionGetTodo } from './redux/reducers/todoSlice';
import TodoHeader from './TodoHeader';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import '../App.css';

class TodoApp extends React.Component {
    componentDidMount = () => {
        axios.get('http://localhost:5000/tasks').then((res) => this.props.dispatch(actionGetTodo(res.data)));
    }
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

export default connect()(TodoApp);  // nếu connect không chứa tham số thì trong props chỉ có thêm thispatch