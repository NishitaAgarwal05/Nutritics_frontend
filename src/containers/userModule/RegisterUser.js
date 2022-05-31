import React, { Component } from "react";
import axios from "axios";
//import Joi from "joi-browser";

class RegisterUser extends Component {
  state = {
    user: {
      userIdentification:"",
      name:"",
      email:"",
      contact:"",
      gender:"",
      dob:"",
      photo:"",
      role:"user",
      status:"active",
      weight:"",
      height:"",
      intensity:"",
      goal:"",
      workOutTime:"",
      wakeUpTime:"",
      sleepTime:"",
      medicalCondition:"",
      allergicTo:"",
      loginName:"",
      password:"",
      diateryOrientation:""
    },
    errors: {},
    errMsg: "",
  };
  
  // schema = {
  //   name: Joi.string().required(),
  //   email: Joi.string(3).required(),
  //   contact:Joi.integer().required(),


  // };

  //  // validate post with schema
  //  validate = () => {
  //   const errors = {};
  //   const result = Joi.validate(this.state.user, this.schema, {
  //     abortEarly: false,
  //   });
  //   console.log(result);
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
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
   // update state with errors after validation
    this.setState({ errors: this.validate() });
     console.log(this.state.errors);
    if (this.state.errors) return;
  

    console.log(this.state.user);

    // Send post request to rest api
    axios
      .post('https://nutritrics-backend.herokuapp.com/api/v1/user/createUser', this.state.user)
      .then((res) => {
        console.log(res.data);
        alert("User added successfully!");
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
        <h1>Register User</h1>
        {/* {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )} */}
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <label htmlFor="userIdentification" className="form-label float-start">
              User identification
            </label>
            <input
              type="text"
              className="form-control"
              id="userIdentification"
              value={this.state.user.userIdentification}
              name="userIdentification"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.userIdentification}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label float-start">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.user.name}
              name="name"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.name}</small>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label float-start">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={this.state.user.email}
              name="email"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.email}</small>} */}
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="form-label float-start">
            password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.user.password}
              name="password"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.password}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label float-start">
              contact
            </label>
            <input
              type="contact"
              className="form-control"
              id="contact"
              value={this.state.user.contact}
              name="contact"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.contact}</small>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label float-start">
              Gender
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              value={this.state.user.gender}
              name="gender"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.gender}</small>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label float-start">
              D.O.B
            </label>
            <input
              type="text"
              className="form-control"
              id="dob"
              value={this.state.user.dob}
              name="dob"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.dob}</small>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label float-start">
             photo
            </label>
            <input
              type="text"
              className="form-control"
              id="photo"
              value={this.state.user.photo}
              name="photo"
              onChange={this.handleChange}
            />
            <button>Add Image</button>
            {/* {errors && <small className="text-danger">{errors.photo}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="weight" className="form-label float-start">
              weight
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={this.state.user.weight}
              name="weight"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.weight}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="height" className="form-label float-start">
              height
            </label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={this.state.user.height}
              name="height"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.height}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="intensity" className="form-label float-start">
              intensity
            </label>
            <input
              type="number"
              className="form-control"
              id="intensity"
              value={this.state.user.intensity}
              name="intensity"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.intensity}</small>} */}
          </div>
          
          <div className="mb-3">
            <label htmlFor="goal" className="form-label float-start">
              goal
            </label>
            <input
              type="text"
              className="form-control"
              id="goal"
              value={this.state.user.goal}
              name="goal"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.goal}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="workOutTime" className="form-label float-start">
              workOutTime
            </label>
            <input
              type="text"
              className="form-control"
              id="workOutTime"
              value={this.state.user.workOutTime}
              name="workOutTime"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.workOutTime}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="wakeUpTime" className="form-label float-start">
              wakeUpTime
            </label>
            <input
              type="text"
              className="form-control"
              id="wakeUpTime"
              value={this.state.user.wakeUpTime}
              name="wakeUpTime"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.wakeUpTime}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="sleepTime" className="form-label float-start">
              sleepTime
            </label>
            <input
              type="text"
              className="form-control"
              id="sleepTime"
              value={this.state.user.sleepTime}
              name="sleepTime"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.sleepTime}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="medicalCondition" className="form-label float-start">
              medicalCondition
            </label>
            <input
              type="text"
              className="form-control"
              id="medicalCondition"
              value={this.state.user.medicalCondition}
              name="medicalCondition"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.medicalCondition}</small>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="allergicTo" className="form-label float-start">
              allergicTo
            </label>
            <input
              type="text"
              className="form-control"
              id="allergicTo"
              value={this.state.user.allergicTo}
              name="allergicTo"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.allergicTo}</small>} */}
          </div>
          
         <div className="mb-3">
            <label htmlFor="diateryOrientation" className="form-label float-start">
            diateryOrientation
            </label>
            <input
              type="text"
              className="form-control"
              id="diateryOrientation"
              value={this.state.user.diateryOrientation}
              name="diateryOrientation"
              onChange={this.handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.diateryOrientation}</small>} */}
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

export default RegisterUser;