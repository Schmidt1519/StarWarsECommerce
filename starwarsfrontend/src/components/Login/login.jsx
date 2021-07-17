import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        }
        
        this.props.login(login);
        this.setState({
            username: '',
            password: '',
        });
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Username:  </label>
                    <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <label>Password:  </label>
                    <input type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}
export default Login;