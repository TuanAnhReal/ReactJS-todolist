import React from "react";
export default class TodoItem extends React.Component{
    render(){
        return (
            <li className="list-group-item d-flex justify-content-between align-item-center">
                <span>{this.props.index +1} - {this.props.task.name}</span>
                <div>
                    <button className="btn btn-sm btn-warning me-2">Sửa</button>
                    <button className="btn btn-sm btn-danger">Xóa</button>
                </div>
            </li>
        );
    }
}