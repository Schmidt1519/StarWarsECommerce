import React from 'react';
import Table from "react-bootstrap/Table";

function ViewCart(props){
    console.log(props.userProducts);
    if (props == undefined) {
        return(
            null
        );
    }
    else {
        let carts = props.filterCart.map((cart) => {
            return <tr>
            <td>{cart.quantity}</td>
                </tr>
        });

        let products = props.userProducts.map((product) => {
            return <tr key={product.id}>
            <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                
                </tr>
        });
        return(
            <div>
                <div>
                <Table className="cartTable">
                    <thead>
                        <tr>
                        <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </Table>
                </div>
                <div>
                <Table className="cartTable">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts}
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}

export default ViewCart;