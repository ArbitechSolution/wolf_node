import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../asset/logo1.jpg";
import "./Navbar.css";
import {Link} from "react-router-dom"
function NavbarOne() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "black", border: "1px solid black" }}
      >
        <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="mx-sm-3 navbarimage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end "
        >
          <Nav className="">
            <Link to="/presale" style={{textDecoration: "none"}}>
            <Nav.Link href="#deets" id="navitem">
              <b>PRESALE</b>
            </Nav.Link>
            </Link>
            <Nav.Link id="navitem" href="#memes">
              <b>SOCIAL</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarOne;
