import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import Login from "./Login/login";
import Registration from "./Registration/registration";
import HomePage from "./HomePage/homepage";

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            token: [],
            user: [],
            currentUser: [],
            registeredUser: [],
            productTable: [],
            visible: false,
            loggedIn: false,
            cart: [],
            userCart: [],
            cartVisible: false,
        };
    }

    componentDidMount(){
      
        const jwt = localStorage.getItem('token');
        try{
            this.setState({user: jwtDecode(jwt)});
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
        let response = await axios.post('https://localhost:44394/api/authentication/login/', login);
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            token: response.data,
            loggedIn: !this.state.loggedIn,
          });
          localStorage.setItem('token', this.state.token.token);
          console.log(this.state.token.token);
          console.log(this.state.user);
          this.productTable();
          this.getUserCart(3);
        }
      };

      getCurrentUser = async () => {
        let response = await axios.get('https://localhost:44394/api/examples/user/', {headers: {Authorization: 'Bearer ' + this.state.token.token}});
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            user: response.data,
          });
          console.log(this.state.user)
        }
      };

    productTable = async () => {
        let response = await axios.get('https://localhost:44394/api/products/products/');
        if (response === undefined) {
            this.setState({});
        } else {
            this.setState({
                productTable: response.data
            });
            console.log(this.state.productTable);
        }
    }

    createCart = async (cart) => {
      let response = await axios.post('https://localhost:44394/api/cart', cart);
      if (response === undefined){
            this.setState({
            });
        }else{
          this.setState({
            cart: response.data
        });
        }
    }

    getUserCart = async (id) => {
      let response = await axios.get(`https://localhost:44394/api/cart/${id}`);
      if (response === undefined){
            this.setState({
            });
        }else{
          this.setState({
            userCart: response.data
        });
        }
    }

    showForm = () => {
        this.setState({
          visible: !this.state.visible,
        });
      };

      showCart = () => {
        this.setState({
          cartVisible: !this.state.cartVisible,
        });
      };

      render() {
        return (
            <div>
                <h1>STAR WARS</h1>
                <Switch>
                    <Route path='/' render={props =>{
                      if(this.state.loggedIn === false){
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
                          <Login {...props} login={this.login} currentUser={this.getCurrentUser}/>
                        </div>
                        )} else{
                        return <HomePage {...props} products={this.state.productTable} user={this.state.user} createCart={this.createCart} getUserCart={this.getUserCart} showCart={this.showCart} cartVisible={this.state.cartVisible} userCart={this.state.userCart}/>
                      }
                    }}/>
                </Switch>
            </div>  
        );
    }
}

export default App;