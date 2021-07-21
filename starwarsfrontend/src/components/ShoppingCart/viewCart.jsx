import React from 'react';
import Table from "react-bootstrap/Table";
import DeleteFromCart from './deleteFromCart';

function ViewCart(props){
    console.log(props.userProducts);
    console.log(props.filterCart);
    if (props == undefined) {
        return(
            null
        );
    }
    else {
        let carts = props.filterCart.map((cart) => {
            return <tr key={cart.id}>
                <td>{cart.productName}</td>
                <td>{cart.productDesc}</td>
                <td>{cart.productPrice}</td>
            <td>{cart.quantity}</td>
            <DeleteFromCart cartid={cart.shoppingCartId} deleteFromCart={props.deleteFromCart}/>
                </tr>
        });
        return(
            <div>
                <div>
                <Table className="cartTable">
                    <thead>
                        <tr><th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
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