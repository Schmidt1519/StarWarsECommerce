import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import Login from "./Login/login";
import Registration from "./Registration/registration";
import HomePage from "./HomePage/homepage";
import { Container, Button } from "react-bootstrap";

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          token: [],
          user: [],
          currentUser: [],
          registeredUser: [],
          productTable: [],
          categories: [],
          cartProducts: [],
          products: [],
          visible: false,
          loggedIn: false,
          cart: [],
          allCarts: [],
          filterCart: [],
          filterProductId: [],
          cartVisible: false,
        };
    }

    componentDidMount(){
      this.getAllCarts();
        const jwt = localStorage.getItem('token');
        try{
            this.setState({user: jwtDecode(jwt)});
        }catch {}
    }

// USER FUNCTIONS
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
        }
      };

      getCurrentUser = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('https://localhost:44394/api/examples/user/', {headers: {Authorization: 'Bearer ' + jwt}});
        if (response === undefined) {
          this.setState({});
        } else {
          this.setState({
            user: response.data,
          });
          console.log(this.state.user)
        }
      };

// PRODUCTS FUNCTIONS
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
    };

    getAllCategories = async () => {
      let response = await axios.get('https://localhost:44394/api/category/categories/');
      if (response === undefined) {
          this.setState({});
      } else {
          this.setState({
              categories: response.data
          });
          console.log(this.state.categories);
      }
    };

    filterProductTable = (searchQuery) => {
      console.log(this.state.productTable);
      const productFilter = this.state.productTable.filter(prod => 
        prod.name.includes(searchQuery) 
        //prod.categoryId.includes(searchQuery) 
      )
      console.log(productFilter);
      this.setState({
        productTable: productFilter
      })
    }

// SHOPPING CART FUNCTIONS
    getCartProducts = async (id) => {
      let response = await axios.get(`https://localhost:44394/api/products/${id}`);
      if (response === undefined) {
          this.setState({});
      } else {
          this.setState({
            cartProducts: response.data
          });
          // console.log(this.state.cartProducts);
          this.state.products.push(this.state.cartProducts);
      }
  };

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

    updateCart = async (id, cart) => {
      let response = await axios.post(`https://localhost:44394/api/cart/update/${id}`, cart);
      if (response === undefined){
            this.setState({
            });
        }else{
          this.setState({
            cart: response.data
        });
        }
    }

    getAllCarts = async () => {
      let response = await axios.get('https://localhost:44394/api/cart/carts/');
      if (response === undefined){
        this.setState({
        });
      } else{
        this.setState({
          allCarts: response.data,
        });
        console.log(this.state.allCarts);
        console.log(response.data);
        console.log(this.state.user.id);
        console.log(this.state.allCarts.userId);
        this.filterCart();
        this.productIdToList();
        this.getProducts();
      }
    }

    filterCart = () => {
      let filtered = this.state.allCarts.filter(cart => cart.userId.includes(this.state.user.id))
    //console.log(this.state.userid);  // test
    this.setState({
      filterCart: filtered
    })
    console.log(this.state.filterCart);
    }

    productIdToList =() => {
      let productIds = this.state.filterCart.map((product) => 
        ({productsId: product.productsId}));
      this.setState({
        filterProductId: productIds,
      });
      console.log(this.state.filterProductId);
    }

    getProducts = () => {
      for (let i = 0; i < this.state.filterProductId.length; i++){
        this.getCartProducts(this.state.filterProductId[i].productsId);
        console.log(this.state.cartProducts) 
      }
      console.log(this.state.products)
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
          <Container>
            <div>
              <h1>STAR WARS</h1>
              <Switch>
                <Route path='/' render={props =>{
                  if(this.state.loggedIn === false){
                    return (
                    <div>
                      <div>
                        <Button variant="outline-primary" onClick={() => {
                          this.showForm();
                        }}>Register</Button>
                          {this.state.visible? (
                          <Registration register={this.register}/>
                        ):null}
                      </div>
                      <Login {...props} login={this.login} currentUser={this.getCurrentUser}/>
                    </div>
                    )} else{
                      return <HomePage {...props} products={this.state.productTable} 
                      user={this.state.user} createCart={this.createCart} showCart={this.showCart}
                       cartVisible={this.state.cartVisible} userProducts={this.state.products}
                      getCartProducts={this.getCartProducts} cartProducts={this.state.cartProducts}
                      filterCart={this.state.filterCart} filterProductTable={this.filterProductTable}/>
                  }
                }}/>
              </Switch>
            </div>
            </Container>
        );
    }
}

export default App;