import React,{ useEffect, useState}  from "react";
import {  useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import moment from "moment";

var DatePicker = require("reactstrap-date-picker");

const AddWeightLog= () => {

    const[weightLog,setWeightLog]=useState({
            id:"",
            weight:"",
            createdAt:"",
            updatedAt:"",
            user:{}
        });
        const navigate=useNavigate();

//  handleUser(u){
//     this.setState({
//         user:u
//     });
// }
useEffect(() => {
    axios
    .get(` https://nutritrics-backend.herokuapp.com/api/v1/user/getUser/${localStorage.email}`,{
      headers:{
        "Authorization": localStorage.jwtToken
      }
    })
    .then((res) => {
        console.log(res);
      setWeightLog((weightLog)=>({...weightLog, user:res.data}));
   })
    .catch((err) => console.log(err));
}, []);
    
    const handleChange=(event)=>{
       setWeightLog((weightLog)=>({
              ...weightLog,
              [event.target.name]: event.target.value,
        }));
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios
        .post("https://nutritrics-backend.herokuapp.com/api/v1/weightLog/addWeightLog",weightLog,{
            headers:{
                "Authorization":localStorage.jwtToken
            }
        })
        .then((response) => {
            alert("Weight Log added successfully!"); 
            navigate("/weightLogs");
        })
        .catch((e)=>{
                console.log(e);
                alert("Could not add WeightLog because of some error");
        });
    };   
        return (
        <div style={{marginLeft:'auto', marginRight: 'auto'}}  className="w-75 border p-3 mt-3">
             <h1>Add Weight Log Page</h1>
             <form onSubmit={handleSubmit}>
                    <div className="mb-3"> 
                        <label htmlFor="weight" className="form-label float-start" >Weight:</label>
                        <input 
                             type="number" 
                             id="weight" 
                             name="weight"
                             className="form-control" 
                             placeholder="Enter Weight"
                             required
                             value={weightLog.weight}
                             onChange={handleChange}
                             /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="createdAt" className="form-label float-start">Created At:</label>
                        <input
                            type="date"
                            name="createdAt"
                            className="form-control" 
                            id="createdAt"
                            value={weightLog.createdAt}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="updatedAt" className="form-label float-start">Updated At:</label>
                        <input
                            type="date"
                            name="updatedAt"
                            className="form-control" 
                            id="updatedAt"
                            value={weightLog.updatedAt}
                            onChange={handleChange}
                           />
                    </div>
                    {console.log(weightLog.createdAt)}
                    <div class="d-grid gap-2">
                        <button type="Submit" className="btn btn-primary " >
                            Add
                        </button>
                    </div>    
                </form>
        </div> 
        );
};


export default AddWeightLog;