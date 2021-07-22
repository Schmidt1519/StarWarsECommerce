import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import ProductTable from "../ProductTable/productTable";
import ViewCart from "../ShoppingCart/viewCart";
import NavbarHome from "../Navbar/navbar"
import SearchBar from "../SearchBar/searchBar";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function HomePage(props) {
    console.log(props)
    return (
        <React.Fragment>
            <div>
            <NavbarHome />
            <br/>
            <Alert variant="success">Welcome {props.user.userName}!</Alert>
            </div>
            <div>
                <SearchBar filterProductTable={props.filterProductTable} products={props.productTable}/>
            </div>
            <div>
                <Button variant="secondary" onClick={() => {
                    props.showCart();
                }}>View Cart</Button>
                {props.cartVisible?(
                    <ViewCart userProducts={props.userProducts} getCartProducts={props.getCartProducts} 
                    cartProducts={props.cartProducts} filterCart={props.filterCart}
                    deleteFromCart={props.deleteFromCart} />
                ):null}
            </div>
            <div className="productTable">
                 <ProductTable products={props.products} user={props.user} createCart={props.createCart}
                 reviewById={props.reviewById} newReview={props.createReview} updateFilterCart={props.updateFilterCart}
                 updateFilter={props.updateFilter} filteredProductId={props.filteredProductId}
                 updateCart={props.updateCart} />
            </div>
        </React.Fragment>
    )
}

export default withRouter(HomePage);