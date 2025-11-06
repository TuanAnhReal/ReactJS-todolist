import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { actionDeleteTodo, actionEditTodo, actionSaveTodo } from './redux/reducers/todoSlice';

class TodoItem extends React.Component {
    state = {
        noiDung: ''
    }

    handleChangeText = (e) => {
        this.setState({ noiDung: e.target.value });
    }
    // vì xóa chỉ cần id nên không truyền nguyên mảng task, chỉ truyền id
    handleDelTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`).then(() => this.props.handleDelTask(id));
    }

    handleEditTask = (task) => {
        if (task) {
            this.setState({ noiDung: task.name });
        } else {
            this.setState({ noiDung: '' });
        }
        this.props.handleEditTask(task);
    }

    handleSaveTask = (task) => {
        const updateTask = { ...task, name: this.state.noiDung };
        axios.put(`http://localhost:5000/tasks/${task.id}`, updateTask).then((res) => this.props.handleSaveTask(res.data));
    }

    render() {
        let isEmptyTodoItem = Object.keys(this.props.editItem) === 0;
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {
                    !isEmptyTodoItem && this.props.editItem.id === this.props.task.id ?
                        <>
                            <input
                                className="form-control w-auto flex-grow-1"
                                type="text"
                                value={this.state.noiDung}
                                onChange={(e) => this.handleChangeText(e)} autoFocus />
                            <div>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => this.handleSaveTask(this.props.task)}>Lưu</button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => this.handleEditTask({})}>Không</button>
                            </div>
                        </>
                        :
                        <>
                            <span>{this.props.index + 1}. {this.props.task.name}</span>
                            <div>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => this.handleEditTask(this.props.task)}>Sửa</button>
                                <button className="btn btn-sm btn-danger"
                                    onClick={() => this.handleDelTask(this.props.task.id)}>Xóa</button>
                            </div>
                        </>
                }
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editItem: state.todoState.editItem,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleDelTask: (item) => {
        dispatch(actionDeleteTodo(item));
    },
    handleEditTask: (item) => {
        dispatch(actionEditTodo(item));
    },
    handleSaveTask: (item) => {
        dispatch(actionSaveTodo(item));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);