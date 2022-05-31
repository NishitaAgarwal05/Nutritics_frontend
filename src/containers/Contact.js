import React,{ useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        message:""
      });
    
      const handleChange=(e)=>{
        setUser({...user,[e.target.id]:e.target.value})
      }
    
      const handleSubmit=()=>{
        console.log(user.name+ user.email);
        if(user.name!="" && user.email!="" && user.message!==""){
        alert("Sent!");
      
        } else{
            alert("Please fill all the fields!")
        }
      }
    return (
        <div data-testid="contact-1">
             <Form style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
            <FormText color="muted">
            Start a new Journey with us!
        
          </FormText>
          
            <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={handleChange}/>
        </FormGroup>
            <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="message"> Message</Label>
          <Input type="textarea" name="text" id="message" placeholder="Enter your message here" onChange={handleChange}/>
        </FormGroup>
        <Button onClick={handleSubmit}>Send</Button>
            </Form>
        </div>
      );
}
 
export default Contact;