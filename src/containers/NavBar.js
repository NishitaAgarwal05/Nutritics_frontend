import React, { Component } from "react";
import image from "../images/final.png";
import { Link, useNavigate } from "react-router-dom";
import {Navbar, Nav, NavDropdown,Container} from "react-bootstrap";
import {AiOutlineUserAdd} from "react-icons/ai";
import {RiLoginBoxLine} from "react-icons/ri";
import {FaSignOutAlt} from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux";
import {logoutUser} from "../redux/actions/authActions";

const NavBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const guestLinks = (
      <Nav className="navbar-right">
          <Nav.Link href="/registerUser"><AiOutlineUserAdd></AiOutlineUserAdd>Register </Nav.Link>
          <Nav.Link href="/login"><RiLoginBoxLine></RiLoginBoxLine>Login</Nav.Link>
      </Nav>
  );
  const userLinks = (
    <>
      <Nav className="mr-auto">
        <Link to={"/nutritionPlan"} className="nav-link">
          Nutrition Plans
        </Link>
        <Link to={"/weightLogs"} className="nav-link">
          Weight Logs
        </Link>
        <Link to={"/dietPlan"} className="nav-link">
          Diet Plans
        </Link>
        <Link to={"/payments"} className="nav-link">
          Payments
        </Link>
        <Link to={"/user"} className="nav-link">
          User
        </Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to={"/home"} className="nav-link" onClick={logout}>
          <FaSignOutAlt></FaSignOutAlt> Logout
        </Link>
      </Nav>
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
      <img
        src={image}
        width="50"
        height="30"
        alt="brand"
      />{" "}
      Nutritics
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    {auth.isLoggedIn ? userLinks : guestLinks}
    </Navbar.Collapse>
    
  </Navbar>
  );
};
export default NavBar;