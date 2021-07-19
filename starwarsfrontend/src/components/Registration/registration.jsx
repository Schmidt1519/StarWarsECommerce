import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: "",
            phonenumber: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phonenumber: this.state.phonenumber,

        }
        this.props.register(user);
        this.setState({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: "",
            phonenumber: "",
        });
    }

    render(){
        return(
            <div>
                <Form onSubmit ={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicRegister">
                    <Row>
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' name='firstname' onChange={this.handleChange} value={this.state.firstname}/>
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    </Col>
                    <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                    </Col>
                    <Col>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='text' name='phonenumber' onChange={this.handleChange} value={this.state.phonenumber}/>
                    </Col>
                    </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button variant="outline-success" type='submit' value='Submit'>Register Account</Button>{' '}
                    <Button variant="outline-danger" type='reset' value='reset'>Clear Form</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
export default Registration;