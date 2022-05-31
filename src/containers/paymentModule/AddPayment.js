import React, { Component } from "react";
import axios from "axios";
//import Joi from "joi-browser";
import {withRouter} from "./withRouter"

class AddPayment extends Component {
  state = {
    payment: {
      payment: "",
      discount: "200",
      created_At: "",
      updated_At:"",
      userId: "",
      planId: "",
    },
    errors: {},
    errMsg: "",
  };
  // schema
//   schema = {
//     payment: Joi.number().integer().required(),
//     discount: Joi.number().integer().required(),
//     created_At: Joi.date().iso(),
//     updated_At: Joi.date().iso().min(Joi.ref('created_At')).max(Joi.ref('created_At')),
//     userId: Joi.string().alphanum().min(2).required(),
//     planId: Joi.number().required(),
//   };
//    // validate post with schema
//    validate = () => {
//     const errors = {};
//     const result = Joi.validate(this.state.payment, this.schema, {
//       abortEarly: false,
//     });
    //console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
   // if (result.error != null)
//       for (let item of result.error.details) {
//         errors[item.path[0]] = item.message;
//       }
//     return Object.keys(errors).length === 0 ? null : errors;
//   };

  handleChange = (event) => {
    // console.log("handleChange");
    // console.log(event);
    // console.log(event.target.name); //return name of the field
    // console.log(event.target.value); //return value entered by the user
    const newPayment = { ...this.state.payment };
    newPayment[event.target.name] = event.target.value;
    this.setState({ payment: newPayment });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
     // update state with errors after validation
    //  this.setState({ errors: this.validate() });
    //  console.log(this.state.errors);
    //  if (this.state.errors) return;
     // Send post request to rest api
    axios
      .post("https://nutritrics-backend.herokuapp.com/api/v1/payment/pay", this.state.payment)
      .then((res) => {
          console.log(res.data);
          alert("Added Payment to Log successfully!");
          this.props.navigate("/payments");
      })
      .catch((err) => {
        console.log(err);
       // this.setState({ errMsg: err.response.data.message });
      });
  };
  render() {
    const { errors, errMsg } = this.state;
    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Add Payment Page</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="payment" className="form-label float-start">
              Payment
            </label>
            <input
              type="number"
              className="form-control"
              id="payment"
              aria-describedby="emailHelp"
              value={this.state.payment.payment}
              name="payment"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.payment}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="discount" className="form-label float-start">
              Discount
            </label>
            <input
              type="number"
              className="form-control"
              id="discount"
              value={this.state.payment.discount}
              name="discount"
              // onChange={this.handleChange}
              disabled
            />
            {errors && <small className="text-danger">{errors.discount}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="created_At" className="form-label float-start">
              Date Created At
            </label>
            <input
              type="date"
              className="form-control"
              id="created_At"
              value={this.state.payment.created_At}
              name="created_At"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.created_At}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="updated_At" className="form-label float-start">
              Date Updated At
            </label>
            <input
              type="date"
              className="form-control"
              id="updated_At"
              value={this.state.payment.updated_At}
              name="updated_At"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.updated_At}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label float-start">
              User Id
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={this.state.payment.userId}
              name="userId"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.userId}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="planId" className="form-label float-start">
              Plan Id
            </label>
            <input
              type="number"
              className="form-control"
              id="planId"
              value={this.state.payment.planId}
              name="planId"
              onChange={this.handleChange}
            />
            {errors && <small className="text-danger">{errors.planId}</small>}
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

export default withRouter(AddPayment);



