import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { actionDeleteTodo, actionEditTodo, actionSaveTodo } from './redux/reducers/todoSlice';

export default function TodoItem(props) {

    const [noiDung, setNoiDung] = useState('');

    const dispatch = useDispatch();

    const editItem = useSelector((state) => state.todoState.editItem);

    const handleChangeText = (e) => {
       setNoiDung(e.target.value);
    }
    
    const handleDelTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`).then(() => dispatch(actionDeleteTodo(id)));
    }

    const handleEditTask = (task) => {
        if (task) {
            setNoiDung(task.name);
        } else {
            setNoiDung('');
        }
        dispatch(actionEditTodo(task));
    }

    const handleSaveTask = (task) => {
        const updateTask = { ...task, name: noiDung };
        axios.put(`http://localhost:5000/tasks/${task.id}`, updateTask).then((res) => dispatch(actionSaveTodo(res.data)));
    }

        let isEmptyTodoItem = Object.keys(editItem) === 0;
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {
                    !isEmptyTodoItem && editItem.id === props.task.id ?
                        <>
                            <input
                                className="form-control w-auto flex-grow-1"
                                type="text"
                                value={noiDung}
                                onChange={(e) => handleChangeText(e)} autoFocus />
                            <div>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => handleSaveTask(props.task)}>Lưu</button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleEditTask({})}>Không</button>
                            </div>
                        </>
                        :
                        <>
                            <span>{props.index + 1}. {props.task.name}</span>
                            <div>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => handleEditTask(props.task)}>Sửa</button>
                                <button className="btn btn-sm btn-danger"
                                    onClick={() => handleDelTask(props.task.id)}>Xóa</button>
                            </div>
                        </>
                }
            </li>
        );
    }
