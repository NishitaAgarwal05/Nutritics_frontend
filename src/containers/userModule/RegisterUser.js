import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/services/user/userActions";
import MyToast from "../MyToast";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import {
    FaUserPlus,
    FaEnvelope,
    FaLock,
    FaUndo,
    FaUser,
    FaPhone,
  } from "react-icons/fa"; 
//import Joi from "joi-browser";
const RegisterUser = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const initialState = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: "active"
  };

  const [user, setUser] = useState(initialState);

  const userChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveUser = () => {
    dispatch(registerUser(user))
      .then((response) => {
        setShow(true);
        setMessage(response.message);
        resetRegisterForm();
        setTimeout(() => {
          setShow(false);
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetRegisterForm = () => {
    setUser(initialState);
  };
    return (
      <div>
        <div style={{ display: show ? "block" : "none" }}>
          <MyToast show={show} message={message} type={"success"} />
        </div>
        <Row className="justify-content-md-center" style={{margin:"10vh", height:"100vh"}}>
        <Col className="col-sm-10 col-md-6 col-lg-5">
        <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <div style={{float:"left"}}>
            <FaUser ></FaUser> Register
          </div>
          </Card.Header>
        <Card.Body>
          <Form>
          <Form.Group className="mb-3  ">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="bi bi-aspect-ratio"><FaUser ></FaUser></i></span>
                </div>
                <input 
                  type="text"
                  name="name"
                  className="form-control" 
                  value={user.name}
                  onChange={userChange}
                  placeholder="Name"
                  />
              </div>
            </Form.Group>
            <Form.Group className="mb-3  ">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="bi bi-aspect-ratio"><FaEnvelope ></FaEnvelope></i></span>
                </div>
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Email" 
                  value={user.email}
                  onChange={userChange}
                  />
              </div>
            </Form.Group>
            <Form.Group className="mb-3  ">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="bi bi-aspect-ratio"><FaLock></FaLock></i></span>
                </div>
                <input 
                  type="password" 
                  name="password"
                  className="form-control" 
                  placeholder="Password" 
                  value={user.password}
                  onChange={userChange}
                  />
              </div>
            </Form.Group>
            <Form.Group className="mb-3  ">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="bi bi-aspect-ratio"><FaPhone></FaPhone></i></span>
                </div>
                <input 
                  type="text"
                  name="mobile"
                  className="form-control" 
                  placeholder="Mobile Number"
                  value={user.mobile}
                  onChange={userChange}
                  />
              </div>
            </Form.Group>
          </Form>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button
              size="sm"
              type="button"
              variant="success"
              onClick={saveUser}
              disabled={user.email.length === 0 || user.password.length === 0}
            >
              <FaUserPlus></FaUserPlus> Register
            </Button>{" "}
            <Button
              size="sm"
              type="button"
              variant="primary"
              onClick={resetRegisterForm}
            >
              <FaUndo></FaUndo> Reset
            </Button>
          </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
    );
  }

export default RegisterUser;