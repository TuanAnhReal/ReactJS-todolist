import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
    const tasks = useSelector((state) => state.todoState.tasks);
        return (
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={task.id}
                        index={index}
                        task={task}
                    />
                ))}
            </ul>
        );
    }
