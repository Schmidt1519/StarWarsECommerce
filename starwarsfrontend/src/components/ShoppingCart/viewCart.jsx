import React from 'react';
import Table from "react-bootstrap/Table";
function ViewCart(props){
    //console.log(props.userCart.quantity)  // test
    if (props == undefined) {
        return(
            null
        );
    }
    else {
        // let carts = props.userCart.map((cart) => {
        //     return <tr>
        //         <td>{cart.productsId}</td>
        //         <td>{cart.userId}</td>
        //         <td>{cart.qauntity}</td>
        //     </tr>
        // });
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
                        <tr>
                        <td>{props.userCart.productsId}</td>
                        <td>{props.userCart.userId}</td>
                        <td>{props.userCart.quantity}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default ViewCart;