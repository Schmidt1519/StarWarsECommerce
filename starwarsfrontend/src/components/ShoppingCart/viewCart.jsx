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
        let products = props.userProducts.map((product) => {
            return <tr key={product.id}>
            <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                
                </tr>
        });
        return(
            <div>
                <Table className="cartTable">
                    <thead>
                        <tr>
                        <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
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

export default ViewCart;