import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap/';

const header = () => {
  return (
    <header>
       <Navbar expand="lg" className="bg-body-tertiary justify-content-between" variant="light" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">My Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link herf="/products">Products</Nav.Link>
            <Nav.Link herf="/login">Login</Nav.Link>
            <Nav.Link herf="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
            </Nav>
      </Container>
    </Navbar>
    </header>
  )
}

export default header