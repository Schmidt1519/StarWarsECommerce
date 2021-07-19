import React from 'react';
import Table from "react-bootstrap/Table";

function ViewCart(props){
    console.log(props)  // test
    if (props.userCart.userCart == undefined) {
        return(
            null
        );
    }else {
        let carts = props.userCart.userCart.map((cart) => {
            return <tr key = {cart.ShoppingCartId}>
                <td>{cart.ProductsId}</td>
                <td>{cart.UserId}</td>
                <td>{cart.Qauntity}</td>
            </tr>
        })
        return(
            <div>
                <Table className="cartTable">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>User</th>
                            <th>Qauntity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts}
                    </tbody>

                </Table>
            </div>
        )
    }



}

export default ViewCart;