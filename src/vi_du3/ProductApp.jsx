import React from "react";
import ProductList from './ProductList'

export default class ProductApp extends React.Component{
    data = [
        {id:1, name:'Áo khoác nam'},
        {id:2, name:'Áo sơ mi nữ'},
        {id:3, name:'Áo khoác nữ'},
        {id:4, name:'Áo choàng nam'}
    ];
    render(){
        return (
            <>
            <ProductList data={this.data} />
            </>
        );
    }
}