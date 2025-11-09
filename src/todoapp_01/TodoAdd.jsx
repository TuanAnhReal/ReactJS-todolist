import React from "react";

export default class TodoAdd extends React.Component{
    render(){
        return (
            <div className="d-flex gap-2 mb-4">
                    <input type="text" className="form-control" placeholder="Nhập công việc" />
                    <button type="button" className="btn btn-success">Thêm</button>
            </div>
        );
    }
}