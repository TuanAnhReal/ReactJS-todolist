import React from "react";
import TodoItem from './TodoItem'

export default class TodoList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {this.props.tasks.map((task, idx) =>(
                    <TodoItem key={idx} index={idx} task={task} />
                ))}
            </ul>
        );
    }
}