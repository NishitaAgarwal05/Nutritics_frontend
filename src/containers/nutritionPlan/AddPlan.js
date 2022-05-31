import axios from 'axios';
import React, { Component } from 'react';
import Joi from 'joi-browser';
import withRouter from '../withRouter';

class AddPlan extends Component {
    state = {  
        plan:{
            id:"",
            name: "",
            planDescription: "",
            created_At: "",
            updated_At: "",
            price: ""
          },
          errors: {},
          errMsg: "",
    } ;
    schema =  {
        name: Joi.string().min(5).required(),
        planDescription: Joi.string().required(),
        created_At: Joi.date().required(),
        updated_At: Joi.date().required(),
        price: Joi.required(),
        id: Joi.required()
      };

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.plan, this.schema, {
          abortEarly: false,
        }); 
        console.log(result);
        if (result.error != null)
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return Object.keys(errors).length === 0 ? null : errors;
    }
    

    handleChange = (event) =>{
        // console.log("handle change");
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const newPlan ={...this.state.plan};
        newPlan[event.target.name] = event.target.value;
        this.setState({plan: newPlan});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle Submit");
        
        // update state with errors after validation
       this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        
        // Send post request to rest api
        axios.post("https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/createPlan", this.state.plan)
        .then((res) => {
            console.log(res.data)
            alert("Plan added successfully!"); 
            this.props.navigate("/nutritionPlan")
        })
        .catch((err) => console.log(err));
    }
    render() { 
        const { errors, errMsg } = this.state;
        return (
            <div style={{marginLeft:'auto', marginRight: 'auto'}} className="w-75 border p-3 mt-3">
        <h1>Add Plan Page</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label float-start">Name:</label>
              <input 
                type="text" 
                class="form-control" 
                id = "name" 
                placeholder="Enter Nutrition Plan name" 
                value={this.state.name}
                name ="name"
                onChange={this.handleChange}
                />
                {errors && <small className="text-danger">{errors.name}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="planDescription" className="form-label float-start">Plan Description:</label>
              <input 
                type="text" 
                class="form-control" 
                id = "planDescription" 
                placeholder="Enter Nutrition Plan Description" 
                value={this.state.planDescription}
                name ="planDescription"
                onChange={this.handleChange}
                />
                {errors && <small className="text-danger">{errors.planDescription}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="createdOn" className="form-label float-start">Created On:</label>
              <input 
                type="date" 
                class="form-control" 
                id = "CreatedOn" 
                placeholder="Enter date on which nutrition plan was created" 
                value={this.state.created_At}
                name ="created_At"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.created_At}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label float-start">Updated On:</label>
              <input 
                type="date"  
                class="form-control" 
                id="updatedOn" 
                placeholder="Enter date on which nutrition plan was updated" 
                value={this.state.updated_At}
                name="updated_At"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.updated_At}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label float-start">Price:</label>
              <input 
                type="number" 
                step ="any"
                class="form-control" 
                id="body"  
                placeholder="Enter price of Nutrition plan" 
                value={this.state.price}
                name="price"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.price}</small>}
            </div>
            <div class="d-grid gap-2">
              <button type="Submit" className="btn btn-primary " >
              Submit
              </button>
             </div>
          </form>
      </div>
        );
    }
}
 
export default withRouter(AddPlan);