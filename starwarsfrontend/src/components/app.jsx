import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./Login/login";
import Registration from "./Registration/registration";
import HomePage from "./HomePage/homepage";

export class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
            token: [],
            user: [],
            registeredUser: [],
            productTable: [],
            visible: false,
            loggedIn: false,
        };
    }

    componentDidMount(){
        this.productTable();
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        }catch {}
    }

    register = async (registeredUser) => {
      console.log(registeredUser);
        let response = await axios.post('https://localhost:44394/api/authentication/', registeredUser);
        console.log(response.data);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            registeredUser: response.data,
          });
          console.log(registeredUser);
        }
    };

    login = async (login) => {
        // console.log(login);
        let response = await axios.post('https://localhost:44394/api/authentication/login/', login);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            token: response.data,
            loggedIn: !this.state.loggedIn,
          });
          console.log(this.state.token)
        }
      };

    productTable = async () => {
        let response = await axios.get('https://localhost:44394/api/products/products/');
        if (response === undefined) {
            this.setState({});
        } else {
            this.setState( {
                productTable: response.data
            });
        }
    }

      showForm = () => {
        this.setState({
          visible: !this.state.visible,
        });
      };
    
    render() {
        return (
            <div>
                <h1>STAR WARS</h1>
                <Switch>
                    <Route path='/homePage' render={props =>{
                      if(this.state.loggedIn == false){
                        return (
                        <div>
                          <div>
                            <button onClick={() => {
                              this.showForm();
                            }}>Register</button>
                              {this.state.visible? (
                              <Registration register={this.register}/>
                            ):null}
                          </div>
                          <Login {...props} login={this.login} />
                        </div>
                        )} else{
                        return <HomePage {...props} products={this.state.productTable}/>
                      }
                    }}/>
                </Switch>
            </div>  
        );
    }
}

export default App;