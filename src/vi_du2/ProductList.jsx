import React from "react";
import ProductItem from './ProductItem'

export default class ProductList extends React.Component {
    render() {
        return (
            <>
                {this.props.data.map((item, idx) => (
                <ProductItem key={idx} name={item.name} />
            ))}

            </>
        );
    }
}