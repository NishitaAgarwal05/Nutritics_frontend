import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {

   // get post id from url
   const params = useParams();
   console.log(params);
    
  // initialize component state
  const [user, setUser] = useState({
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
  });

 

  // send get request
 useEffect(() => {
    axios
      .get(`https://nutritrics-backend.herokuapp.com/api/v1/user/listUsers/${params.id}`)
      .then((res) => {
        //console.log(res);
        setUser((user) => ({
          ...user,
          userIdentification:res.data.useridentification,
            name:res.data.name,
            email:res.data.email,
            contact:res.data.contact,
            gender:res.data.gender,
            dob:res.data.dob,
            photo:res.data.photo,
            role:res.data.role,
            status:res.data.status,
            weight:res.data.weight,
            height:res.data.height,
            intensity:res.data.intensity,
            goal:res.data.goal,
            workOutTime:res.data.workOutTime,
            wakeUpTime:res.data.wakeUpTime,
            sleepTime:res.data.sleepTime,
            medicalCondition:res.data.medicalCondition,
            allergicTo:res.data.allergicTo,
            loginName:res.data.loginName,
            password:res.data.UpdateUser,
            diateryOrientation:res.data.diateryOrientation,
        }));
      })
      .catch((err) => console.log(err));
  }, []);



  const handleChange = (event) => {
   
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put('https://nutritrics-backend.herokuapp.com/api/v1/user/updateProfile',user)
      .then((res) => {
        console.log(res);
        alert("Updated User " + params.id + " successfully!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-50 mx-auto border p-3 mt-3">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
      

          <div className="mb-3">
            <label htmlFor="name" className="form-label float-start">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={user.name}
              name="name"
              onChange={handleChange}
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
              value={user.email}
              name="email"
              onChange={handleChange}
            />
            {/* {errors && <small className="text-danger">{errors.email}</small>} */}
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="contact" className="form-label float-start">
              contact
            </label>
            <input
              type="contact"
              className="form-control"
              id="contact"
              value={user.contact}
              name="contact"
              onChange={handleChange}
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
              value={user.gender}
              name="gender"
              onChange={handleChange}
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
              value={user.dob}
              name="dob"
              onChange={handleChange}
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
              value={user.photo}
              name="photo"
              onChange={handleChange}
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
              value={user.weight}
              name="weight"
              onChange={handleChange}
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
              value={user.height}
              name="height"
              onChange={handleChange}
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
              value={user.intensity}
              name="intensity"
              onChange={handleChange}
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
              value={user.goal}
              name="goal"
              onChange={handleChange}
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
              value={user.workOutTime}
              name="workOutTime"
              onChange={handleChange}
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
              value={user.wakeUpTime}
              name="wakeUpTime"
              onChange={handleChange}
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
              value={user.sleepTime}
              name="sleepTime"
              onChange={handleChange}
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
              value={user.medicalCondition}
              name="medicalCondition"
              onChange={handleChange}
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
              value={user.allergicTo}
              name="allergicTo"
              onChange={handleChange}
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
              value={user.diateryOrientation}
              name="diateryOrientation"
              onChange={handleChange}
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
};

export default UpdateUser;