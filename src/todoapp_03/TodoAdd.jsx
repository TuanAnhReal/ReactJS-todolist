import React from 'react';
import { connect } from 'react-redux';
import {actionAddTodo} from './redux/reducers/todoSlice';
import axios from 'axios';

class TodoAdd extends React.Component {
    state = {
        tenCV: ''
    }

    handleChangeText = (e) => {
        this.setState({ tenCV: e.target.value });
    }

    handleAddTask = () => {
        const task = { name: this.state.tenCV };
        axios.post('http://localhost:5000/tasks', task).then((res) => this.props.handleAddTask(res.data));
    }

    render() {
        return (
            <div className="d-flex gap-2 mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập công việc"
                    value={this.state.tenCV}
                    onChange={this.handleChangeText}
                />
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleAddTask}
                >Thêm</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTask: (item) => dispatch(actionAddTodo(item))
    }
}

export default connect(null,mapDispatchToProps)(TodoAdd);