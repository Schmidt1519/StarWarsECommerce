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
            
            <div className="productTable">
                 <ProductTable products={props.products} user={props.user} createCart={props.createCart} userCart={props.userCart}/>
                 
            </div>
            <div>
            
            </div>
        </React.Fragment>
    )
}

export default withRouter(HomePage);