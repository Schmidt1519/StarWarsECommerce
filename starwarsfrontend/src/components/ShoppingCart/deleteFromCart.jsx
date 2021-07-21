import React from 'react';

function DeleteFromCart(props){
    console.log(props)   // test
    
    return(
        <td>
            <button type="button" onClick={() =>
                props.deleteFromCart(props.cartid)}>Remove</button>
        </td>
    )
}

export default DeleteFromCart;