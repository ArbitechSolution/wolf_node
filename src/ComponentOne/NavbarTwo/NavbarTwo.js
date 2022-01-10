import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavbarTwo.css";
import { Link } from "react-router-dom";
import logo from "../../asset/logo1.jpg"
function NavbarTwo() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "black", border: "1px solid black" }}
      >
        <Container>
          <Navbar.Brand href="#home" >
            <img src={logo} className=" navbarimage" />
           
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end "
          >
            <Nav className="">
              <Link to="/" style={{textDecoration: "none"}}>
                <Nav.Link href="#deets" id="navitem" className="mt-2">
                  <b>HOME</b>
                </Nav.Link>
              </Link>
              <Nav.Link>
              <button className="btn btn2">CONNECT</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTwo;
