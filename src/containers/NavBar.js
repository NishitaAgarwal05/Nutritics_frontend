import React, { Component } from "react";
import image from "../images/final.png";
import {Navbar, Nav, NavDropdown,Container} from "react-bootstrap";
import {AiOutlineUserAdd} from "react-icons/ai";
import {RiLoginBoxLine} from "react-icons/ri";
// class component with constructor
class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      show : true,
    }
  }
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src={image} width="50" height="30" alt="Logo" padding="20px" object-fit="cover" />
                       <a href="/" style={{textDecoration:"none"}}> Nuritics </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/nutritionPlan">Nutrition Plans</Nav.Link>
                <Nav.Link href="/weightLogs">Weight Logs</Nav.Link>
                <Nav.Link href="/dietPlan">Diet Plans</Nav.Link>
                <Nav.Link href="/payments">Payments</Nav.Link>
                <Nav.Link href="/userlist">User</Nav.Link>
              </Nav>
              <Nav className="navbar-right">
                <Nav.Link href="/registerUser"><AiOutlineUserAdd></AiOutlineUserAdd>Register </Nav.Link>
                <Nav.Link href="/login"><RiLoginBoxLine></RiLoginBoxLine>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
  
      </div>
    );
  }
}

export default NavBar;
