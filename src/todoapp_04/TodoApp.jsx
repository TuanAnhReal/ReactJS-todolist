import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetTodo, actionDeleteTodo, actionSaveTodo } from './redux/reducers/todoSlice';
import { actionCloseModal, actionShowNotification, actionCloseNotification } from './redux/reducers/alertSlice';
import TodoHeader from './TodoHeader';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import ConfirmModal from './ConfirmModal';
import '../App.css';

// Component con hiển thị thông báo (Toast/Alert)
const NotificationAlert = () => {
    const dispatch = useDispatch();
    // Lấy trạng thái notification từ alertState
    const { show, message } = useSelector((state) => state.alertState.notification);

    const onClose = useCallback(() => {
        dispatch(actionCloseNotification());
    }, [dispatch]);

    // Tự động ẩn sau 3 giây
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => { onClose(); }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{message}</strong>
                <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
    );
};

export default function TodoApp() {

    const url = 'http://localhost:5000/tasks';
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.alertState.modal);

    const handleConfirmAction = () => {
        const { task, actionType } = modalState;

        dispatch(actionCloseModal());

        if (actionType === 'DELETE') {
            axios.delete(`${url}/${task.id}`).then(() => {
                dispatch(actionDeleteTodo(task.id));
                dispatch(actionShowNotification('DELETE'));
            });

        } else if (actionType === 'SAVE') {
            const updateTask = task.updateTask;
            axios.put(`${url}/${updateTask.id}`, updateTask).then((res) => {
                dispatch(actionSaveTodo(res.data));
                dispatch(actionShowNotification('SAVE'));
            });
        }
    };

    useEffect(() => {
        axios.get(url).then((res) => dispatch(actionGetTodo(res.data)));
    }, [dispatch]);

    return (
        <>
            <NotificationAlert />
            <ConfirmModal
                show={modalState.show}
                title={modalState.title}
                message={modalState.message}
                onConfirm={handleConfirmAction}
                onClose={() => dispatch(actionCloseModal())}
            />

            <div className="container py-5">
                <div className="card shadow card--custom">
                    <TodoHeader />
                    <div className="card-body">
                        <TodoAdd />
                        <TodoList />
                    </div>
                </div>
            </div>
        </>
    );
}