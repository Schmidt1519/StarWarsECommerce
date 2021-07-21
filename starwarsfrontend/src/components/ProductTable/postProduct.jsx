import React, { Component } from "react";
import NavbarHome from "../Navbar/navbar"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class PostProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: 0,
            rating: 0,
            category: "",
            errors: {
                name: "",
                description: "",
                price: "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async createListing() {
        let price = this.state.price;
        let rating = this.state.rating;
        let pNum = parseInt(price);
        let rNum = parseInt(rating);
        const product = {
            name: this.state.name,
            description: this.state.description,
            price: pNum,
            rating: rNum,
            category: this.state.category,
        }
        try {
            console.log(product);
            await axios.post("https://localhost:44394/api/products/", product);

            this.props.updateTable()
            this.setState({});
            alert(`${this.state.name} has been added to product listings`)
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch (event.target.name) {
            case 'name':
                errors.name = event.target.value.length < 1 ? 'Name Must Be Filled Out' : null;
                break;
            case 'description':
                errors.description = event.target.value.length < 1 ? 'Description Must Be Filled Out' : null;
                break;
            case 'price':
                errors.price = event.target.value.length < 1 ? 'Must have a Price' : null;
                break;
            case 'rating':
                errors.rating = event.target.value.length < 0 ? 'Must have a rating' : null;
                break;
        }
        this.setState({
            [event.target.name]: event.target.value,
            error: errors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createListing();
    }

    render() {
        return (
            <>
            <NavbarHome />
            <br/>
                <h2>
                Add a new product
                </h2>
                <Form className="addProduct" onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name of the product you want to list"
                                      name="name" onChange={this.handleChange} value={this.state.name}/>
                    </Form.Group>
                    {this.state.errors.name ? <p style={{color: 'red'}}>{this.state.errors.name}</p> : ''}

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter a description of the product" name="description"
                                      onChange={this.handleChange} value={this.state.description}/>
                    </Form.Group>
                    {this.state.errors.description ? <p style={{color: 'red'}}>{this.state.errors.description}</p> : ''}

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="How much you want to sell this item for" name="price"
                                      onChange={this.handleChange} value={this.state.price}/>
                    </Form.Group>
                    {this.state.errors.price ? <p style={{color: 'red'}}>{this.state.errors.price}</p> : ''}

                    <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" placeholder="What would you rate this product as 0-100" name="rating"
                                      onChange={this.handleChange} value={this.state.rating}/>
                    </Form.Group>
                    {this.state.errors.rating ? <p style={{color: 'red'}}>{this.state.errors.rating}</p> : ''}

                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter the category name of your product" name="category"
                                      onChange={this.handleChange} value={this.state.category}/>
                    </Form.Group>
                    {this.state.errors.category ? <p style={{color: 'red'}}>{this.state.errors.category}</p> : ''}
                    <br/>
                    <Button variant="primary" type="submit">Create Listing</Button>
                </Form>
            </>
        )
    }
}

export default withRouter (PostProduct);
