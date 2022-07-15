import React, { Component } from "react";
import image from "../images/final.png";
import { Link, useNavigate } from "react-router-dom";
import {Navbar, Nav, NavDropdown,Container} from "react-bootstrap";
import {AiOutlineUserAdd} from "react-icons/ai";
import {RiLoginBoxLine, RiLockPasswordFill} from "react-icons/ri";
import {FaSignOutAlt, FaUserAlt, FaEdit} from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux";
import {logoutUser} from "../redux/actions/authActions";


const NavBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const guestLinks = (
      <Nav className="navbar-right">
          <Nav.Link href="/registerUser"><AiOutlineUserAdd></AiOutlineUserAdd>Register </Nav.Link>
          <Nav.Link href="/login"><RiLoginBoxLine></RiLoginBoxLine>Login</Nav.Link>
      </Nav>
  );
  const userLinks = (
    <div>
      <Nav className="mr-auto">
        <Link to={"/nutritionPlan"} className="nav-link">
          Nutrition Plans
        </Link>
        {/* <Link to={"/weightLogs"} className="nav-link">
          Weight Logs
        </Link>
        <Link to={"/dietPlan"} className="nav-link">
          Diet Plans
        </Link>
        <Link to={"/payments"} className="nav-link">
          Payments
        </Link>*/}
        { localStorage.length ===0?null:
          localStorage.role[0]==='A' ?
          <Link to={"/userlist"} className="nav-link">
            Users List
          </Link> : <div></div>
        }
      </Nav>
    </div>
  );
  const ProfileLinks = (
    <>
    <Nav>
        <NavDropdown align="end" id="nav-dark-example mr-5" menuVariant="dark" title={<FaUserAlt></FaUserAlt>}>
          <NavDropdown.Item href="/profileUpdate"><FaEdit></FaEdit>Edit Profile</NavDropdown.Item>
          <NavDropdown.Item href="/changePassword"><RiLockPasswordFill></RiLockPasswordFill>Change Password</NavDropdown.Item> 
          <NavDropdown.Item href="#" onClick={logout}><FaSignOutAlt></FaSignOutAlt>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/home" className="navbar-brand">
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
      <Navbar.Collapse id="responsive-navbar-nav">
        {auth.isLoggedIn ? userLinks: null}
      </Navbar.Collapse>
      {auth.isLoggedIn ? ProfileLinks : guestLinks}
    </Navbar.Collapse>
    
  </Navbar>
  
  );
};
export default NavBar;