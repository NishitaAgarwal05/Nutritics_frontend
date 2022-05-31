import React, { Component } from 'react';
import axios from "axios";
//import Joi from "joi-browser";
import {withRouter} from "./withRouter"

class AddOffer extends Component {
    state = { 
      pay:{
        offerPrice : "",
      },
        errors: {},
        errMsg: "",
    };

    // // schema
    // schema = {
    // offerPrice: Joi.number().integer().required(),
    // }; 

  //   // validate post with schema
  //  validate = () => {
  //   const errors = {};
  //   const result = Joi.validate(this.state.offerPrice, this.schema, {
  //     abortEarly: false,
  //   });
  //   console.log(result);
  //   // setting error messages to error properties
  //   // ex: errors[username] = "username is required";
  //   // ex: errors[password] = "password is required";
  //   if (result.error != null)
  //     for (let item of result.error.details) {
  //       errors[item.path[0]] = item.message;
  //     }
  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  handleChange = (event) => {
    // console.log("handleChange");
    // console.log(event);
    // console.log(event.target.name); //return name of the field
    // console.log(event.target.value); //return value entered by the user
    const newPay =  this.state.pay ;
    newPay[event.target.name] = event.target.value;
    this.setState({ pay: newPay });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    //  // update state with errors after validation
    //  this.setState({ errors: this.validate() });
    //  console.log(this.state.errors);
    //  if (this.state.errors) return;
     // Send post request to rest api
    axios
      .post(`https://nutritrics-backend.herokuapp.com/api/v1/payment/addOffer?offerPrice=${this.state.pay.offerPrice}`)
      .then((res) => {
          console.log(res.data);
          alert("Added Offer successfully!");
          this.props.navigate("/payments");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: err.response.data.message });
      });
  };

    render() { 
        const { errors, errMsg } = this.state;
        return (
            <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Add Offer Page</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="offerPrice" className="form-label float-start">
              Offer Price
            </label>
            <input
              type="number"
              
              className="form-control"
              id="offerPrice"
              aria-describedby="emailHelp"
              value={this.state.pay.offerPrice}
              name="offerPrice"
              onChange={this.handleChange}
            />
            
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
        );
    }
}
 
export default withRouter(AddOffer);
