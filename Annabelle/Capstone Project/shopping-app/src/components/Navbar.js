import React, { useState, useEffect, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { FaHeart } from 'react-icons/fa';
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function NavScrollExample() {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg" style={{ fontFamily: 'Montserrat' }}>
      <Container fluid>
        <Navbar.Brand href="#">SIMPLY MAKEUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width:'100%', alignItems: 'center'}}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Home">HOME</Nav.Link>
            <NavDropdown title="SHOP" id="navbarScrollingDropdownShop">
              <NavDropdown.Item as={Link} to="/Eyes"> EYES </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Skin"> SKIN </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Lips"> LIPS </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Eyebrows"> EYEBROWS </NavDropdown.Item>
            </NavDropdown>
              
            { user ? 
              <NavDropdown title="MY ACCOUNT" id="navbarScrollingDropdownAccount" style={{ marginLeft: "auto" }}>
              <NavDropdown.Item as={Link} to="/account">MY ACCOUNT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart">MY CART</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/liked">LIKED ITEMS</NavDropdown.Item>
              </NavDropdown>
            : 
            <NavDropdown title="NEW USER" id="navbarScrollingDropdownAccount" style={{ marginLeft: "auto" }}>
              <NavDropdown.Item as={Link} to="/login">LOGIN</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">SIGNUP</NavDropdown.Item>
            </NavDropdown>
}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
