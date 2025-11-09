import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionEditTodo } from './redux/reducers/todoSlice';
import { actionOpenModal } from './redux/reducers/alertSlice';

export default function TodoItem(props) {

    const [noiDung, setNoiDung] = useState('');

    const dispatch = useDispatch();

    const editItem = useSelector((state) => state.todoState.editItem);

    // Mở Modal Xác nhận Xóa
    const handleDelTask = (task) => {
        dispatch(actionOpenModal({
            title: 'Xác nhận xóa',
            message: `Bạn có chắc chắn muốn xóa công việc: "${task.name}" không?`,
            task: task,
            actionType: 'DELETE'
        }));
    }

    const handleChangeText = (e) => {
        setNoiDung(e.target.value);
    }

    const handleEditTask = (task) => {
        if (task && task.id) {
            setNoiDung(task.name);
        } else {
            setNoiDung('');
        }
        dispatch(actionEditTodo(task));
    }

    // Mở Modal Xác nhận Lưu
    const handleSaveTask = (task) => {
        const updateTask = { ...task, name: noiDung };
        dispatch(actionOpenModal({
            title: 'Xác nhận lưu',
            message: `Bạn có chắc chắn muốn thay đổi thành công việc: "${updateTask.name}" không?`,
            task: { updateTask },
            actionType: 'SAVE'
        }));
    }

    let isEmptyTodoItem = Object.keys(editItem).length === 0;
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
                                onClick={() => handleDelTask(props.task)}>Xóa</button>
                        </div>
                    </>
            }
        </li>
    );
}