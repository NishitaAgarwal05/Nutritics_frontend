import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import {
    FaSignInAlt,
    FaEnvelope,
    FaLock,
    FaUndo,
  } from "react-icons/fa"; 

import { authenticateUser } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [error, setError] = useState();
  const [show, setShow] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateUser = () => {
    dispatch(authenticateUser(email, password))
      .then((response) => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
        setShow(true);
        resetLoginForm();
        setError("Invalid email and password");
      });
  };

  const resetLoginForm = () => {
    setEmail("");
    setPassword("");
  };

    return (
      <Row className="justify-content-md-center" style={{margin:"10vh", height:"100vh"}}>
        <Col xs={5}>
        {show && props.message && (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            {props.message}
          </Alert>
        )}
        {show && error && (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            {error}
          </Alert>
        )}
        <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <div style={{float:"left"}}>
            <FaSignInAlt ></FaSignInAlt> Login
          </div>
          </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3  ">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="bi bi-aspect-ratio"><FaEnvelope ></FaEnvelope></i></span>
                </div>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  aria-label="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
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
                  className="form-control" 
                  placeholder="Password" 
                  aria-label="Password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              onClick={validateUser}
              disabled={email.length === 0 || password.length === 0}
            >
              <FaSignInAlt></FaSignInAlt> Login
            </Button>{" "}
            <Button
              size="sm"
              type="button"
              variant="primary"
              onClick={resetLoginForm}
              disabled={email.length === 0 && password.length === 0}
            >
              <FaUndo></FaUndo> Reset
            </Button>
          </Card.Footer>
          </Card>
        </Col>
      </Row>
      );
}
export default Login;