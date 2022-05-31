import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
    const [user,setUser]=useState({
        userId:"",
        password:""
    });
    
    const handleChange=(e)=>{
        setUser(user=>({
            ...user,
            [e.target.id]:e.target.value
        }

        ))
    }

     const handleSubmit=()=>{
        async function submit(){
          console.log(user);
          let userData={};
          await axios
          .get(`https://nutritrics-backend.herokuapp.com/api/v1/user/authenticateUser?loginid=${user.userId}&password=${user.password}`)
          .then((response) => {
          userData=response.data;
          console.log(userData);
           if(userData.role==="admin"){
           navigate('/weightLogs/admin');
           } else {
            navigate(`/weightLogs/${userData.userId}`);
           }
          })
          .catch((err)=>{
            
            alert('Enter correct values');
        })
        }
       submit();
    }
    return (
        <div>
<Form>
        <FormGroup>
          <Label for="userId">User Identification</Label>
          <Input type="text" name="userId" id="userId" placeholder="Enter user Identification" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter the password"  onChange={handleChange}/>
        </FormGroup>
        <Button onClick={handleSubmit}>Log in</Button>
        </Form>
        </div>
      );
}
 
export default Login;