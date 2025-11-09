import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionAddTodo } from './redux/reducers/todoSlice';
import { actionShowNotification } from './redux/reducers/alertSlice';
import axios from 'axios';

export default function TodoAdd() {

    const [tenCV, setTenCV] = useState('');
    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        setTenCV(e.target.value);
    }

    const handleAddTask = () => {
        const task = { name: tenCV };
        axios.post('http://localhost:5000/tasks', task).then((res) => {
            dispatch(actionAddTodo(res.data));
            dispatch(actionShowNotification('ADD')); //gọi thanh thông báo thêm thành công
        });
    }
    return (
        <div className="d-flex gap-2 mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="Nhập công việc"
                value={tenCV}
                onChange={handleChangeText}
            />
            <button
                type="button"
                className="btn btn-success"
                onClick={handleAddTask}
            >Thêm</button>
        </div>
    );
}