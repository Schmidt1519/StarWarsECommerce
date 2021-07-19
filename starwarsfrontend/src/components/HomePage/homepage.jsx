import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import ProductTable from "../ProductTable/productTable";
import ViewCart from "../ShoppingCart/viewCart";

function HomePage(props) {
    console.log(props)
    return (
        <React.Fragment>
            <div>
            <h1>Welcome {props.user.username}!</h1>
            
            </div>
            {/* <div>
                <button onClick={() => {
                    props.showCart();
                }}>View Cart</button>
                {props.cartVisible?(
                    <ViewCart userCart={props.userCart}/>
                ):null}
            </div> */}
            <div className="productTable">
                 <ProductTable products={props.products} user={props.user} createCart={props.createCart}/>
            </div>
            <div>
            <ViewCart userCart={props.userCart}/>
            </div>
        </React.Fragment>
    )
}

export default withRouter(HomePage);