import axios from "axios";
import React, { useState, useEffect } from "react";
import {GiCancel} from "react-icons/gi";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdPassword, MdDoneOutline} from "react-icons/md";

import {
    Row,
    Col,
    Card,
    Form,
    Button,
    Alert,
  } from "react-bootstrap";
import { Component } from "react";
const ChangePassword = (props) => {
    const [error, setError] = useState();
    const [show, setShow] = useState(true);
    const [id,setId] = useState();
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    useEffect(() => {
        axios
          .get(`https://nutritrics-backend.herokuapp.com/api/v1/user/getUser/${localStorage.email}`,{
            headers:{
              "Authorization": localStorage.jwtToken
            }
          })
          .then((res) => {
            setId(res.data.userId);
         })
          .catch((err) => console.log(err));
        }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data={};
        axios
          .put("https://nutritrics-backend.herokuapp.com/api/v1/user/changePassword/"+id+"?oldPassword="+oldPassword+"&newPassword="+newPassword,
          data,{
            headers:{
              "Authorization":localStorage.jwtToken
            }
          })
          .then((res) => {
            alert("Password changed successfully!!");
            // navigate("/nutritionPlan");
          })
          .catch((err) => {
            setShow(true);
            resetPasswordFields();
            setError(err.message);
          });
      };
      const resetPasswordFields = () => {
        setOldPassword("");
        setNewPassword("");
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
                    <RiLockPasswordLine></RiLockPasswordLine> Change Password
                </div>
                </Card.Header>
                <Card.Body>
                    <Form>
                    <Form.Group className="mb-3  ">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" ><i className="bi bi-aspect-ratio"><MdPassword></MdPassword></i></span>
                        </div>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Old Password" 
                        required
                        value = {oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)} 
                        />
                    </div>
                    </Form.Group>
                    <Form.Group className="mb-3  ">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" ><i className="bi bi-aspect-ratio"><MdPassword></MdPassword></i></span>
                        </div>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="New Password" 
                        required
                        value= {newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} 
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
                    onClick={handleSubmit}
                    // disabled={email.length === 0 || password.length === 0}
                    >
                    <MdDoneOutline></MdDoneOutline> Change
                    </Button>{" "}
                    <Button
                    size="sm"
                    type="button"
                    variant="danger"
                    // onClick={resetLoginForm}
                    // disabled={email.length === 0 && password.length === 0}
                    >
                    <GiCancel></GiCancel> Cancel
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
        </Row>
      );
}
 
export default ChangePassword;