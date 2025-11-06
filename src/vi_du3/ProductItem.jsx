import React from "react";
import './product.css'

export default class ProductItem extends React.Component{
    render(){
        const myStyle = {color:'blue', fontSize:'15px', textAlign:'center'};
        return (
            <>
            <h1 style={{color:'blue', fontSize:'20px', textAlign:'center'}}>Danh mục</h1>
            <h2 style={myStyle}>Xem thông tin chi tiết</h2>
            <h3 className="product-item__title product-item--mausac">{this.props.name}</h3>
            </>
        );
    }
}