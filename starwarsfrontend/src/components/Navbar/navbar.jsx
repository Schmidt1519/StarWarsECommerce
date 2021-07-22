import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavbarHome = () => (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">StarWars Homepage</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/post">Add Product</Nav.Link>
        <Nav.Link href="/">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  )
  
export default NavbarHome