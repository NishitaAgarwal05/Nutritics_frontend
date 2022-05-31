import axios from 'axios';
import React, { Component } from 'react';
//import Joi from 'joi-browser';

class AddPlan extends Component {
    state = {  
        plan:{
            id:"",
            slots:"",
            foodType:"",
            proteinRatio:"",
            fatRatio:"",
            carbsRatio:"",
            total:""
          },
          errors: {},
          errMsg: "",
    } ;
    // schema =  {
    //     id: Joi.required(),
    //     userId: Joi.required(),  
    //     slots: Joi.string().required(),
    //     foodType: Joi.string().required(),
    //     proteinRatio: Joi.required(),
    //     fatRatio: Joi.required(),
    //     carbsRatio: Joi.required(),
    //     total: Joi.required(),
    //   };

    // validate = () => {
    //     const errors = {};
    //     const result = Joi.validate(this.state.plan, this.schema, {
    //       abortEarly: false,
    //     }); 
    //     console.log(result);
    //     if (result.error != null)
    //     for (let item of result.error.details) {
    //         errors[item.path[0]] = item.message;
    //     }
    //     return Object.keys(errors).length === 0 ? null : errors;
    // }
    

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
        // this.setState({ errors: this.validate() });
        // console.log(this.state.errors);
        // if (this.state.errors) return;
        
        // Send post request to rest api
        axios.post("https://nutritrics-backend.herokuapp.com/api/v1/dietPlan/createDietPlan", this.state.plan)
        .then((res) => {
            console.log(res.data)
            alert("Diet Plan added successfully!");   
        })
        .catch((err) => console.log(err));
    }
    render() { 
        const { errors, errMsg } = this.state;
        return (
            <div style={{marginLeft:'auto', marginRight: 'auto'}} className="w-75 border p-3 mt-3">
        <h1>Add Diet Plan Page</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="slots" className="form-label float-start">Slots:</label>
              <input 
                type="text" 
                className="form-control" 
                id = "slots" 
                placeholder="Enter Diet Plan Slot" 
                value={this.state.slots}
                name ="slots"
                onChange={this.handleChange}
                />
                {errors && <small className="text-danger">{errors.slots}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="foodType" className="form-label float-start">Food Type:</label>
              <input 
                type="text" 
                className="form-control" 
                id = "foodType" 
                placeholder="Enter Food Type" 
                value={this.state.foodType}
                name ="foodType"
                onChange={this.handleChange}
                />
                {errors && <small className="text-danger">{errors.foodType}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="proteinRatio" className="form-label float-start">Protein Ratio:</label>
              <input 
                type="number" 
                step="any"
                className="form-control" 
                id = "proteinRatio" 
                placeholder="Enter the Protein Ratio" 
                value={this.state.proteinRatio}
                name ="proteinRatio"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.proteinRatio}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="fatRatio" className="form-label float-start">Fat Ratio:</label>
              <input 
                type="number" 
                step="any"
                className="form-control" 
                id = "fatRatio" 
                placeholder="Enter the Fat Ratio" 
                value={this.state.fatRatio}
                name ="fatRatio"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.fatRatio}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="carbsRatio" className="form-label float-start">Carbs Ratio:</label>
              <input 
                type="number" 
                step="any"
                className="form-control" 
                id = "carbsRatio" 
                placeholder="Enter the Carbs Ratio" 
                value={this.state.carbsRatio}
                name ="fatRatio"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.carbsRatio}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="total" className="form-label float-start">Total calories:</label>
              <input 
                type="number" 
                step="any"
                className="form-control" 
                id = "total" 
                placeholder="Enter the Total calories" 
                value={this.state.total}
                name ="fatRatio"
                onChange={this.handleChange}/>
                {errors && <small className="text-danger">{errors.total}</small>}
            </div>
            <div className="d-grid gap-2">
              <button type="Submit" className="btn btn-primary " >
              Submit
              </button>
             </div>
          </form>
      </div>
        );
    }
}
 
export default AddPlan;