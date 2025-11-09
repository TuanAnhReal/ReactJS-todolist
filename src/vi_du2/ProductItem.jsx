import React from "react";

export default class ProductItem extends React.Component{
    render(){
        return (
            <h3>{this.props.name}</h3>
        );
    }
}