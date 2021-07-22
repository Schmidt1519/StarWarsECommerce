import React from "react";
import Table from "react-bootstrap/Table";
import ShoppingCart from "../ShoppingCart/shoppingCart";
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
                <td><ReviewsModal productid={product.productId} product={product} /></td>
                <td><ShoppingCart productid={product.productId} userid={props.user.id} createCart={props.createCart}
                updateFilterCart={props.updateFilterCart} updateFilter={props.updateFilter}
                filteredProductId={props.filteredProductId} updateCart={props.updateCart}/></td>
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
                            <th>Avg Rating</th>
                            <th>Category</th>
                            <th>Reviews</th>
                            <th>Qty</th>
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