import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { FaHeart } from 'react-icons/fa';

function NavScrollExample() {

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
            <Nav.Link href="/Home">HOME</Nav.Link>
            <NavDropdown title="SHOP" id="navbarScrollingDropdownShop">
              <NavDropdown.Item href="/Eyes"> EYES </NavDropdown.Item>
              <NavDropdown.Item href="/Skin"> SKIN </NavDropdown.Item>
              <NavDropdown.Item href="/Lips"> LIPS </NavDropdown.Item>
              <NavDropdown.Item href="/Eyebrows"> EYEBROWS </NavDropdown.Item>
            </NavDropdown>
              
    
              <NavDropdown title="MY ACCOUNT" id="navbarScrollingDropdownAccount" style={{ marginLeft: "auto" }}>
                <NavDropdown.Item href="/cart">MY CART</NavDropdown.Item>
                <NavDropdown.Item href="/liked">LIKED ITEMS</NavDropdown.Item>
              </NavDropdown>
  

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
