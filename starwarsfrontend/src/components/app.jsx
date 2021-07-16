import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import Login from "./Login/login";

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
                </div>
                <Switch>
                    <Route path='/' render={props => <Login {...props} login={this.login}/>}/>
                </Switch>
            </div>  
        );
    }
}

export default App;