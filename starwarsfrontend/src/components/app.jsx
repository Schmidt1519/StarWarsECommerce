import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import {Route, Switch, Link} from 'react-router-dom';
import Login from "./Login/login";
import Registration from "./Registration/registration";

export class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
            token: [],
            user: [],
        };
    }

    componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        }catch {}
    }

    register = async (user) => {
        let response = await axios.post("http://127.0.0.1:8000/api/authentication", user);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            user: response.data,
          });
        } 
    };

    login = async (login) => {
        let response = await axios.post("http://127.0.0.1:8000/api/authentication/login", login);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            token: response.data,
          });
        }
      };
    
    render() {
        return (
            <div>
                <div>
                <h1>STAR WARS</h1>
                <Link to='/register'><button>Register</button></Link>
                </div>
                <Switch>
                    <Route path='/' render={props => <Login {...props} login={this.login}/>}/>
                    <Route path='/register' render={props => <Registration {...props} register={this.register}/>}/>
                </Switch>
            </div>  
        );
    }
}

export default App;