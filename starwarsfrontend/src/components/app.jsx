import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import Login from "./Login/login";
import Registration from "./Registration/registration";
import HomePage from "./HomePage/homepage";
import { Container, Button } from "react-bootstrap";
import ProductListingPage from "./ProductTable/ProductListingPage";

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
          updateFilter: [],
          filterProductId: [],
          cartVisible: false,
          reviewById: [],
          newReview: [],
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
      try{
        const jwt = localStorage.getItem('token');
        let response = await axios.get('https://localhost:44394/api/examples/user/', {headers: {Authorization: 'Bearer ' + jwt}});
        if (response === undefined) {
          this.setState({});
        } 
        else {
          this.setState({
            user: response.data,
          });
          console.log(this.state.user)
        }
      }
      catch(err) {
        console.log(err);
      }
    };

// PRODUCTS FUNCTIONS
    productTable = async () => {
      try{
        let response = await axios.get('https://localhost:44394/api/products/products/');
        if (response === undefined) {
            this.setState({});
        } 
        else {
            this.setState({
                productTable: response.data
            });
            console.log(this.state.productTable);
          }
      }
      catch (err) {
        console.log(err);
      }
    };

    getAllCategories = async () => {
      try{
        let response = await axios.get('https://localhost:44394/api/category/categories/');
        if (response === undefined) {
            this.setState({});
        } else {
            this.setState({
                categories: response.data
            });
            console.log(this.state.categories);
          }
        }
        catch (err) {
          console.log(err);
        }
    };

    filterProductTable = (searchQuery) => {
      console.log(this.state.productTable);
      const productFilter = this.state.productTable.filter(prod => 
        prod.name.toLowerCase().includes(searchQuery) || 
        prod.category.toLowerCase().includes(searchQuery) 
      )
      console.log(productFilter);
      this.setState({
        productTable: productFilter
      })
    }

// SHOPPING CART FUNCTIONS
    getCartProducts = async (id) => {
      try{
        let response = await axios.get(`https://localhost:44394/api/products/${id}`);
        if (response === undefined) {
            this.setState({});
        } else {
            this.setState({
              cartProducts: response.data
            });
            this.state.products.push(this.state.cartProducts);
          }
      }
      catch(err) {
        console.log(err);
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
      let response = await axios.put(`https://localhost:44394/api/cart/update/${id}/`, cart);
      if (response === undefined){
            this.setState({
            });
        }else{
          this.setState({
            cart: response.data
        });
        }
    }

    deleteFromCart = async (id) => {
      try{
        await axios.delete(`https://localhost:44394/api/cart/remove/${id}/`)
      }
      catch(err) {
        console.log(err);
      }
    }

    getAllCarts = async () => {
      try{
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
      catch(err) {
        console.log(err);
      }
    }

    filterCart = () => {
      let filtered = this.state.allCarts.filter(cart => cart.userId.includes(this.state.user.id))
    this.setState({
      filterCart: filtered
    })
    console.log(this.state.filterCart[0].productsId);
    }

    updateFilterCart = (productId) => {
      let filtered = this.state.filterCart.filter(cart => cart.productsId === productId)
      this.setState({
        updateFilter: filtered
      })
      console.log(filtered);
    }

    productIdToList =() => {
      let productIds = this.state.filterCart.map((product) => 
        (product.productsId));
      this.setState({
        filterProductId: productIds,
      });
      console.log(this.state.filterProductId);
    }

    getProducts = () => {
      for (let i = 0; i < this.state.filterProductId.length; i++){
        this.getCartProducts(this.state.filterProductId[i]);
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

// REVIEW FUNCTIONS
    reviewById = async (id) => {
      try{
        let response = await axios.get(`https://localhost:44394/api/reviews/${id}`);
        if (response === undefined) {
            this.setState({});
        } else {
            this.setState({
              reviewById: response.data
            });
          }
      }
      catch(err) {
        console.log(err);
      }
    };

    createReview = async (review) => {
      let response = await axios.post('https://localhost:44394/api/reviews/create/', review);
      if (response === undefined){
            this.setState({
            });
        }else{
          this.setState({
            newReview: response.data
        });
        }
    }

    render() {
      return (
        <Container>
        <div>
          <h1>STAR WARS</h1>
          <Switch>
              <Route path='/post' render={props => <ProductListingPage {...props}getProducts = {this.getProducts}/>}/>
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
                  filterCart={this.state.filterCart} filterProductTable={this.filterProductTable}
                  deleteFromCart={this.deleteFromCart} reviewById={this.reviewById}
                  newReview={this.createReview} updateFilterCart={this.updateFilterCart}
                  updateFilter={this.state.updateFilter} filteredProductId={this.state.filterProductId}
                  updateCart={this.updateCart} />
              }
            }}/>
          </Switch>
        </div>
        </Container>
      );
    }
}

export default App;