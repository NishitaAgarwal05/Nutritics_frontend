import React, {Component, useEffect, useState} from "react";
import { connect } from "react-redux";
import { updateWeightLog } from "../../redux/actions/weightLogActions";
import weightLogService from "../../redux/services/weightLogService";
import moment from 'moment';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useParams } from "react-router-dom";

const EditWeightLog = (props) => {
    const [currentWeightLog,setCurrentWeightLog]=useState({
        id: null,
        weight: "",
        createdAt: "",
        updatedAt: "",
    })
      

    const [message,setMessage]=useState("");
    let { id } = useParams();

    const getWeightLog=(id)=>{
        weightLogService.get(id)
        .then((response)=>{
            setCurrentWeightLog(response.data,);
            console.log(response.data);
        })
        .catch((e)=>{
            console.log(e);
        })
      }

      useEffect(()=>{
          getWeightLog(id);
      },[])

      const handleChangeWeight=(e)=>{
          let updatedValue={
              weight:e.target.value,
              updatedAt:moment().locale('en').format('YYYY-MM-DD'),
        }
        setCurrentWeightLog( currentWeightLog=>({
            ...currentWeightLog,
            ...updatedValue
        }));
               
    }

    const handleSubmit=()=>{
        console.log(currentWeightLog);
      props.updateWeightLog(currentWeightLog.id,currentWeightLog);
      setMessage(" The weightLog has been updated successfully!!");
            // .then((response)=>{
            //     console.log(response);
            //     
            // })
            // .catch((e)=>{
            //     console.log(e);
            // })
       
    }
    return (
        <div>
{message!==""?<h3>{message}</h3>:""}
        <Form>
            <FormGroup>
                <Label for="weight">Weight</Label>
                <Input type="number" 
                id="weight" 
                name=" weight"
                 placeholder="Enter new Weight"
                 required
                 value={currentWeightLog.weight}
                 onChange={handleChangeWeight}/> 
            </FormGroup>

            <FormGroup>
                <Label for="createdAt">Created At</Label>
                <Input
                 type="date"
                name="createdAt"
                id="createdAt"
                disabled
                value={currentWeightLog.createdAt}
                />
            </FormGroup>

            <FormGroup>
                <Label for="updatedAt">Updated At</Label>
                <Input
                 type="date"
                name="updatedAt"
                id="updatedAt"
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