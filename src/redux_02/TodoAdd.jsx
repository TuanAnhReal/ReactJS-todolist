import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class TodoAdd extends React.Component {
    state = {
        tenCV: ''
    }

    handleChangeText = (e) => {
        this.setState({ tenCV: e.target.value });
    }

    handleAddTask = () => {
        const task = { id: Math.floor(Math.random() * 100), name: this.state.tenCV };
        this.props.handleAddTask(task);
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
        handleAddTask: (item) => dispatch(actions.actionAddTodo(item))
    }
}

export default connect(null,mapDispatchToProps)(TodoAdd);