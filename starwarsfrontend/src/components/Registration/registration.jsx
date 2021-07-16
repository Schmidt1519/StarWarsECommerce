import React, { Component } from "react";

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: " ",
            lastname: " ",
            username: " ",
            password: " ",
            email: " ",
            phonenumber: " ",
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
            firstname: " ",
            lastname: " ",
            username: " ",
            password: " ",
            email: " ",
            phonenumber: " ",
        });
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>First Name:  </label>
                    <input type='text' name='firstname' onChange={this.handleChange} value={this.state.username}/>
                    <label>Last Name:  </label>
                    <input type='text' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                    <label>Username:  </label>
                    <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <label>Password:  </label>
                    <input type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <label>Email:  </label>
                    <input type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                    <label>Phone Number:  </label>
                    <input type='text' name='phonenumber' onChange={this.handleChange} value={this.state.phonenumber}/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}
export default Registration;