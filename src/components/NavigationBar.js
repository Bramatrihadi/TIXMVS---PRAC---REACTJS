import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <NavbarBrand href="/">TIXMVS</NavbarBrand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
