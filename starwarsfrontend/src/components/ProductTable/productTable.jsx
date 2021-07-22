import React, { Component} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import homepage from "../HomePage/homepage";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import ViewCart from "../ShoppingCart/viewCart";
import ReviewsModal from "../Reviews/reviews";

function ProductTable(props) {
    if (props.products === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        console.log(props);
        let products = props.products.map((product) => {
            return <tr key={product.id}>
            <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.averageRating}</td>
                <td>{product.category}</td>
                <ReviewsModal productid={product.productId} products={props.productTable} />
                <ShoppingCart productid={product.productId} userid={props.user.id} createCart={props.createCart}
                updateFilterCart={props.updateFilterCart} updateFilter={props.updateFilter}
                filteredProductId={props.filteredProductId} updateCart={props.updateCart}/>
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