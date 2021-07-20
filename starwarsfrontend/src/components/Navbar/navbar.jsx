import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavbarHome = () => (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">StarWars</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Link to="/post">Add Product</Link>
        <Nav.Link href="/">Logout</Nav.Link>
        <Nav.Link href="/view-cart">Cart{}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
  
export default NavbarHome