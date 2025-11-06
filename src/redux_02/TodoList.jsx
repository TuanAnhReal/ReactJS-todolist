import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.tasks.map((task, index) => (
                    <TodoItem
                        key={task.id}
                        index={index}
                        task={task}
                    />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todoState.tasks
    }
}

export default connect(mapStateToProps)(TodoList);