import React, { useState } from "react";
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
  };

  const [user, setUser] = useState(initialState);
  const userChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const resetRegisterForm = () => {
    setUser(initialState);
  };

  // state = {
  //   user: {
  //     userIdentification:"",
  //     name:"",
  //     email:"",
  //     contact:"",
  //     gender:"",
  //     dob:"",
  //     photo:"",
  //     role:"user",
  //     status:"active",
  //     weight:"",
  //     height:"",
  //     intensity:"",
  //     goal:"",
  //     workOutTime:"",
  //     wakeUpTime:"",
  //     sleepTime:"",
  //     medicalCondition:"",
  //     allergicTo:"",
  //     loginName:"",
  //     password:"",
  //     diateryOrientation:""
  //   },
  //   errors: {},
  //   errMsg: "",
  // };
  
  // // schema = {
  // //   name: Joi.string().required(),
  // //   email: Joi.string(3).required(),
  // //   contact:Joi.integer().required(),


  // // };

  // //  // validate post with schema
  // //  validate = () => {
  // //   const errors = {};
  // //   const result = Joi.validate(this.state.user, this.schema, {
  // //     abortEarly: false,
  // //   });
  // //   console.log(result);
  // //   if (result.error != null)
  // //     for (let item of result.error.details) {
  // //       errors[item.path[0]] = item.message;
  // //     }
  // //   return Object.keys(errors).length === 0 ? null : errors;
  
  // // };

  // handleChange = (event) => {
  //   // console.log("handleChange");
  //   // console.log(event);
  //   // console.log(event.target.name); //return name of the field
  //   // console.log(event.target.value); //return value entered by the user
  //   const newUser = { ...this.state.user };
  //   newUser[event.target.name] = event.target.value;
  //   this.setState({ user: newUser });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("handleSubmit");
  //  // update state with errors after validation
  //   this.setState({ errors: this.validate() });

    return (
      <Row className="justify-content-md-center" style={{margin:"10vh", height:"100vh"}}>
      <Col xs={5}>
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
            // onClick={validateUser}
            disabled={user.email.length === 0 || user.password.length === 0}
          >
            <FaSignInAlt></FaSignInAlt> Login
          </Button>{" "}
          <Button
            size="sm"
            type="button"
            variant="primary"
            onClick={resetRegisterForm}
            disabled={user.email.length === 0 && user.password.length === 0}
          >
            <FaUndo></FaUndo> Reset
          </Button>
        </Card.Footer>
        </Card>
      </Col>
    </Row>
    );
  }

export default RegisterUser;