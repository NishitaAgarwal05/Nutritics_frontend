import React, {Component, useEffect, useState} from "react";
import { connect } from "react-redux";
import { updateWeightLog } from "../../redux/actions/weightLogActions";
import axios from "axios";
import moment from 'moment';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditWeightLog = (props) => {
    const [currentWeightLog,setCurrentWeightLog]=useState({
        id: "",
        weight: "",
        createdAt: "",
        updatedAt: "",
        user:{}
    })
    const params = useParams();
    const navigate=useNavigate();

      useEffect(()=>{
        axios
        .get(`https://nutritrics-backend.herokuapp.com/api/v1/weightLog/getWeightLog/${params.id}`,{
          headers:{
            "Authorization": localStorage.jwtToken
          }
        })
        .then((res) => {
          setCurrentWeightLog((currentWeightLog) => ({
            ...currentWeightLog,
            id: res.data.id,
            weight: res.data.weight,
            createdAt: res.data.createdAt,
            updatedAt: res.data.updatedAt,
            user: res.data.user
          }));
        })
        .catch((err) => console.log(err));
      },[])

      const handleChangeWeight=(e)=>{
          let updatedValue={
              weight:e.target.value,
              updatedAt:moment().locale('en').format('YYYY-MM-DD'),
        }
        // setCurrentWeightLog((currentWeightLog) => ({ ...currentWeightLog, [event.target.name]: event.target.value }));
        setCurrentWeightLog( currentWeightLog=>({
            ...currentWeightLog,
            ...updatedValue
        }));
               
    }

    const handleSubmit=(event)=>{
        console.log(currentWeightLog);
        event.preventDefault();
    axios
      .put(`https://nutritrics-backend.herokuapp.com/api/v1/weightLog/updateWeightLog/${params.id}`, currentWeightLog,
      {
        headers:{
          "Authorization":localStorage.jwtToken
        }
      })
      .then((res) => {
        console.log(res);
        alert("Updated weightLog successfully!!");
        navigate("/weightLogs");
      })
      .catch((err) => {
        console.log(err);
      });
       
    }
    return (
        <div style={{marginLeft:'auto', marginRight: 'auto'}} className="w-75 border p-3 mt-3">
        <h1>Update WeightLog Page</h1>
        <Form>
            <FormGroup>
                <Label for="weight" className="form-label float-start">Weight</Label>
                <Input type="number" 
                id="weight" 
                name=" weight"
                 placeholder="Enter new Weight"
                 required
                 class="form-control" 
                 value={currentWeightLog.weight}
                 onChange={handleChangeWeight}/> 
            </FormGroup>

            <FormGroup>
                <Label for="createdAt" className="form-label float-start">Created At:</Label>
                <Input
                 type="date"
                name="createdAt"
                id="createdAt"
                disabled
                class="form-control" 
                value={currentWeightLog.createdAt}
                />
            </FormGroup>

            <FormGroup>
                <Label for="updatedAt" className="form-label float-start">Updated At:</Label>
                <Input
                 type="date"
                name="updatedAt"
                id="updatedAt"
                class="form-control" 
                disabled
                value={currentWeightLog.updatedAt}
               />
            </FormGroup>

            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
        </div>
      );
     
}

export default connect(null, { updateWeightLog })(EditWeightLog);