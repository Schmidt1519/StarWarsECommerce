import React, {Component} from 'react';
import { Button, Form, Col, Row } from "react-bootstrap";

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoppingcartid: 0,
            productsid: 0,
            userid: '',
            quantity: 0,
        }
    }

    handleChange = (event) => {
        this.filter();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let string = this.state.quantity;
        let number = parseInt(string);
        const cart = {
            productsid: this.props.productid,
            userid: this.props.userid,
            quantity: number,
        }
            this.productIdCheck(cart);   
    }

    productIdCheck = (cart) => {
        if(this.props.filteredProductId.includes(cart.productsid)){
            this.props.updateFilterCart(cart.productsid);
            this.props.updateCart(this.props.updateFilter[0].shoppingCartId, cart);
            this.setState({
                shoppingcartid: this.props.updateFilter[0].shoppingCartId,
                productsid: this.props.productid,
                userid: this.props.userid,
                quantity:  this.props.updateFilter[0].quantity,
            });
        }else{
            this.props.createCart(cart);
            this.setState({
            productsid: 0,
            userid: '',
            quantity: 0,
            });
        }
    }

    filter = () => {
        this.props.updateFilterCart(this.props.productid);
    }

    render(){
        return(
            <div>
                <Form onSubmit ={this.handleSubmit}>
                    <Row>
                    <Col>
                    <Form.Control type='number' name='quantity' onChange={this.handleChange} value={this.state.quantity}/>
                    </Col>
                    <Col>
                    <Button variant="outline-success" type='submit'>Add</Button>
                    </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default ShoppingCart;