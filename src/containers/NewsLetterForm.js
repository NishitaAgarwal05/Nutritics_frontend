import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewsLetterForm = () => {

  const [user,setUser]=useState({
    name:"",
    email:""
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.id]:e.target.value})
  }

  const handleSubmit=()=>{
    console.log(user.name+ user.email);
    if(user.name!="" && user.email!=""){
    alert("Subscribed!");
    }
    else{
    alert("Please fill all the fields.");
    }
  }
    return ( 
        <div >
          <h3 style={{textAlign:"center",margin:"10px"}}>NewsLetter Subscription</h3>
            <Form style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
            <FormText color="muted">
            Want to hear regular updates from us?
            <br></br>
            Sign Up our NewsLetter
          </FormText>
          
            <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={handleChange}/>
        </FormGroup>
            <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleSubmit}>Count me in</Button>
            </Form>
        </div>
     );
}
 
export default NewsLetterForm;