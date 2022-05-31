import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    state = {
      
         user_name: "",
          password: "",
          
        }
      

  OnSubmit = (event) =>{
      //Login post 
      event.preventDefault()
     
    //   axios.get(`localhost:8081/api/v1/user/authenticateUser?=loginid={user_name}`)

  }  

 


    render() { 
        return (

            <div>
                    <form onSubmit={this.OnSubmit} className="w-50 mx-auto border p-3 mt-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={(e)=>this.setState({user_name:e.target.value})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="user_name" value={this.state.user_name}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                        <input onChange={(e)=>this.setState({password:e.target.value})} type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Accept terms and conditions</label>
                    </div>
                    {/* <Link className="submit_button" to="\Admin"> */}
                        
                        <button type="submit" className="btn btn-success" >Sign in</button> 
                        {/* </Link>  */}
                   
                    </form>

            </div>
        );
    }
}
 
export default Login;