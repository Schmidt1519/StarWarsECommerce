import React, { Component} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import homepage from "../HomePage/homepage";
import ShoppingCart from "../ShoppingCart/shoppingCart";

function ProductTable(props) {
    if (props.products === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        let products = props.products.map((product) => {
            console.log(props);
            return <tr key={product.id}>
            <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.categoryId}</td>
                <ShoppingCart productid={product.productId} userid={props.user.id} createCart={props.createCart}/>
            </tr>
        })
        return (
            <div>
                <Table className="productTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProductTable;