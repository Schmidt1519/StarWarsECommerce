import React from 'react';
import Table from "react-bootstrap/Table";

function ViewCart(props){
    props.getCartProducts(props.userCart.productsId);
    // console.log(props.cartProducts)  // test
    if (props == undefined) {
        return(
            null
        );
    }
    else {
        // let products = props.cartProducts.map((product) => {
        //     return <tr key={product.id}>
        //     <td>{product.name}</td>
        //         <td>{product.description}</td>
        //         <td>{product.price}</td>
        //         <td>{props.userCart.quantity}</td>
        //         </tr>
        // });
        return(
            <div>
                <Table className="cartTable">
                    <thead>
                        <tr>
                        <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Qauntity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{props.cartProducts.name}</th>
                            <th>{props.cartProducts.description}</th>
                            <th>{props.cartProducts.price}</th>
                            <th>{props.userCart.quantity}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ViewCart;