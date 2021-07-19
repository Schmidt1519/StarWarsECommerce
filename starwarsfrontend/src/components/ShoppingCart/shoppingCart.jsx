import React, {Component} from 'react';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            productsid: 0,
            userid: '',
            quantity: 0,
        }
    }

    handleChange = (event) => {
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
        
        console.log(cart);
        this.props.createCart(cart);
        this.setState({
            productsid: 0,
            userid: '',
            quantity: 0,
        });
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Quantity:  </label>
                    <input type='number' name='quantity' onChange={this.handleChange} value={this.state.quantity}/>
                    <input type='submit' value='Add'/>
                </form>
            </div>
        );
    }
}
export default ShoppingCart;