import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

class PostProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            price: null,
            rating: null,
            category: null,
            errors: {
                name: null,
                description: null,
                price: null,
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async createListing() {
        const product = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category,
        }
        try {
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
                errors.description = event.target.value.length < 1 ? 'Must have a Price' : null;
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

                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter the category name of your product" name="category"
                                      onChange={this.handleChange} value={this.state.category}/>
                    </Form.Group>
                    {this.state.errors.category ? <p style={{color: 'red'}}>{this.state.errors.category}</p> : ''}

                    <Button variant="primary" type="submit">Create Listing</Button>
                </Form>
            </>
        )
    }
}

export default PostProduct;
