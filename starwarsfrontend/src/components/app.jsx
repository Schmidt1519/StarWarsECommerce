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
            visible: false,
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
        let response = await axios.post("https://localhost:44394/api/authentication", user);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            user: response.data,
          });
        } 
    };

    login = async (login) => {
        let response = await axios.post("https://localhost:44394/api/authentication/login", login);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            token: response.data,
          });
        }
      };

      showForm = () => {
        this.setState({
          visible: !this.state.visible,
        });
      };
    
    render() {
        return (
            <div>
                <h1>STAR WARS</h1>
                <div>
                <button onClick={() => {
                    this.showForm();
                }}>Register</button>
                {this.state.visible? (
                    <Registration register={this.register}/>
                ):null}
                </div>
                <Switch>
                    <Route path='/' render={props => <Login {...props} login={this.login}/>}/>
                </Switch>
            </div>  
        );
    }
}

export default App;