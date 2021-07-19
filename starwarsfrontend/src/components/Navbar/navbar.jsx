import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
  
const NavbarHome = () => (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">StarWars</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add-product">Add Product</Nav.Link>
        <Nav.Link href="/">Logout</Nav.Link>
        <Nav.Link href="/view-cart">Cart{}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
  
export default NavbarHome