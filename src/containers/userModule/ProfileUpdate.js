import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";

const ProfileUpdate = () => {
    const [user, setUser] = useState({
        id:"",
        name:"",
        email:"",
        contact:"",
        gender:"",
        dob:"",
        role:"",
        status:"Active",
        weight:"0.00",
        height:"0.0",
        intensity:"1",
        goal:"NA",
        workOutTime:"",
        wakeUpTime:"",
        sleepTime:"",
        medicalCondition:"NA",
        allergicTo:"NA",
        password:"",
      });
      const params = useParams();
      const navigate = useNavigate();
      // send get request
      useEffect(() => {
        axios
          .get(`https://nutritrics-backend.herokuapp.com/api/v1/user/getUser/${localStorage.email}`,{
            headers:{
              "Authorization": localStorage.jwtToken
            }
          })
          .then((res) => {
            console.log(res);
            setUser((user) => ({
              ...user,
            id:res.data.userId,
            name:res.data.name,
            email:res.data.email,
            contact:res.data.contact,
            gender:res.data.gender,
            dob:res.data.dob,
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
            password:res.data.password
            }));
          })
          .catch((err) => console.log(err));
      }, []);

    const handleChange = (event) => {
        setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
        console.log(user);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .put(`https://nutritrics-backend.herokuapp.com/api/v1/user/updateProfile/${user.id}`, user,
          {
            headers:{
              "Authorization":localStorage.jwtToken
            }
          })
          .then((res) => {
            alert("Updated user " + user.id + " successfully!!");
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return ( 
        <div style={{marginLeft:'auto', marginRight: 'auto'}} className="w-75 border p-3 mt-3">
            <h1>Update Profile Page</h1>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                    <label htmlFor="id" className="form-label float-start">Id:</label>
                    <input
                        className="form-control"
                        id="id"
                        type="number"
                        value={user.id}
                        name="id"
                        placeholder="Id"
                        readonly
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label float-start">Name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id = "name" 
                    placeholder="Name" 
                    value={user.name}
                    name ="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label float-start">Email:</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id = "email" 
                    placeholder="Email" 
                    value={user.email}
                    name ="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label float-start">Contact No:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id = "contact" 
                    placeholder="Contact No." 
                    value={user.contact}
                    name ="contact"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-check-label float-start">Gender:</label>
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id = "gender"  
                    name ="gender"
                    value="Male"
                    checked={user.gender === "Male"}
                    onClick={handleChange}
                    />Male
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id = "gender"  
                    name ="gender"
                    value="Female"
                    checked={user.gender === "Female"}
                    onClick={handleChange}
                    
                    />Female
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label float-start">Date of Birth:</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id = "dob" 
                    placeholder="DOB" 
                    value={user.dob}
                    name ="dob"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label float-start">Role:</label>
                    <input
                        className="form-control"
                        id="role"
                        type="text"
                        value={localStorage.role[0]==='U'?"USER":"ADMIN"}
                        name="role"
                        placeholder="Role"
                        readonly
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label float-start">Status:</label>
                    <input
                        className="form-control"
                        id="status"
                        type="text"
                        value={user.status}
                        name="status"
                        placeholder="Status"
                        readonly
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label float-start">Weight(upto 2 decimal place):</label>
                    <input
                        className="form-control"
                        id="weight"
                        type="number"
                        value={user.weight}
                        name="weight"
                        placeholder="Weight"
                        onChange={handleChange}
                        step="0.01"
                    />
                </div>    
                <div className="mb-3">
                    <label htmlFor="height" className="form-label float-start">Height(upto 1 decimal place in feets):</label>
                    <input
                        className="form-control"
                        id="height"
                        type="number"
                        value={user.height}
                        name="height"
                        placeholder="Height"
                        onChange={handleChange}
                        step="0.1"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="intensity" className="form-label float-start">Intensity:</label>
                    <input
                        className="form-control"
                        id="intensity"
                        type="number"
                        value={user.intensity}
                        name="intensity"
                        placeholder="Intensity"
                        onChange={handleChange}
                        step="0.01"
                        min="1"
                        max="10"
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="goal" className="form-label float-start">Goal:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id = "goal" 
                    placeholder="Goal" 
                    value={user.goal}
                    name ="goal"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="workOutTime" className="form-label float-start">Workout Time(in hrs):</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id = "workOutTime" 
                    placeholder="Workout Time" 
                    value={user.workOutTime}
                    name ="workOutTime"
                    onChange={handleChange}
                    step="0.01"
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="wakeUpTime" className="form-label float-start">Wakeup Time:</label>
                  <input 
                    type="time" 
                    className="form-control" 
                    id = "wakeUpTime" 
                    placeholder="Wakeup Time" 
                    value={user.wakeUpTime}
                    name ="wakeUpTime"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="sleepTime" className="form-label float-start">Sleep Time:</label>
                  <input 
                    type="time" 
                    className="form-control" 
                    id = "sleepTime" 
                    placeholder="Sleep Time" 
                    value={user.sleepTime}
                    name ="sleepTime"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="medicalCondition" className="form-label float-start">Medical Condition:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id = "medicalCondition" 
                    placeholder="Medical Condition" 
                    value={user.medicalCondition}
                    name ="medicalCondition"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="allergicTo" className="form-label float-start">Allergic To:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id = "allergicTo" 
                    placeholder="Allergic To" 
                    value={user.allergicTo}
                    name ="allergicTo"
                    onChange={handleChange}
                    />
                </div>
                <div className="d-grid gap-2">
                  <button type="Submit" className="btn btn-primary " >
                  Update
                  </button>
                </div> 
                <br></br>
            </form>
          </div>
     );
}
 
export default ProfileUpdate;