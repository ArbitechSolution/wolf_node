import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../asset/logo1.jpg";
import "./DeppNavbar.css";
import Button from "react-bootstrap/Button";
import { FaWallet } from "react-icons/fa";

// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
function DeppNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" id="wolfsss">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-center navbarimage1"
            />{" "}
            WOLF NODES
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home">
            <img src={logo} className=" navbarimage" />WOLF NODES
            
          </Navbar.Brand> */}

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link href="#features" style={{ color: "#b709d6" }} className="ms-md-5 mt-md-2">MY Nodes</Nav.Link>
              <Nav.Link href="#pricing" className="ms-md-5 mt-md-2">All Nodes<sub style={{color: "red"}} >(Commong Soon...)</sub></Nav.Link>
              <Nav.Link className="mt-md-2"><button className="btn btndeep ms-md-2" >WOLFABRA </button>
              <sub style={{color: "red"}}>(Commong Soon...)</sub>
              </Nav.Link>
              
            </Nav>
            <Nav>
            <Nav.Link className="ms-md-5 mt-md-2"> <button class="btn btn-outline-success btn-icon" size="sm">
                <FaWallet style={{ color: "white" }} />
                &ensp;
                <span style={{ color: "white" }}>Connect FaWallet</span>
              </button>
              </Nav.Link>
            </Nav>
            {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default DeppNavbar;
