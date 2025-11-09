import React from 'react';

export default function ConfirmModal({ show, title, message, onConfirm, onClose }) {
    if (!show) return null;

    const handleConfirm = () => {
        onConfirm();
        // onConfirm sẽ tự động dispatch actionCloseModal() trong TodoApp
    };

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', display: 'block' }}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger">{title}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Không
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleConfirm}>
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}