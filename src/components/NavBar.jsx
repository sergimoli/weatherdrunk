import { Button } from "bootstrap";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Weather drunk navigator</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/yourubication">
                <Nav.Link>Predicció d'on estàs tu</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sergiubication">
                <Nav.Link>Predicció on viu en Sergi</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Predicció per ciutat</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
