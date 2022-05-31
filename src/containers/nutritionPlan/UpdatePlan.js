import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";

const UpdatePlan = () => {
  // initialize component state
  const [plan, setPlan] = useState({
    id:"",
    name: "",
    planDescription: "",
    created_At: "",
    updated_At: "",
    price: "",
  });

  // get plan id from url
  const params = useParams();
  //console.log(params);

  const navigate = useNavigate();

  // send get request
  useEffect(() => {
    axios
      .get(`https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/getPlan/${params.planId}`)
      .then((res) => {
        //console.log(res);
        setPlan((plan) => ({
          ...plan,
          id: res.data.id,
          name: res.data.name,
          planDescription: res.data.planDescription,
          created_At: res.data.created_At,
          updated_At: res.data.updated_At,
          price: res.data.price,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  //   const [count, setCount] = useState(0);
  //   setCount(10);

  const handleChange = (event) => {
    // event.target.name - name of the field
    // event.target.value - value entered in the field
    //setPost((prevState) => ({ ...prevState, userId: 10, id: 14, title:"title", body:"body" }));
    setPlan((plan) => ({ ...plan, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/changePlan/${params.planId}`, plan)
      .then((res) => {
        console.log(res);
        alert("Updated plan " + params.planId + " successfully!!");
        navigate("/nutritionPlan");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{marginLeft:'auto', marginRight: 'auto'}} className="w-75 border p-3 mt-3">
            <h1>Update Plan Page</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label float-start">Name:</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id = "name" 
                    placeholder="Enter Nutrition Plan name" 
                    value={plan.name}
                    name ="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="planDescription" className="form-label float-start">Plan Description:</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id = "planDescription" 
                    placeholder="Enter Nutrition Plan Description" 
                    value={plan.planDescription}
                    name ="planDescription"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="createdOn" className="form-label float-start">Created On:</label>
                  <input 
                    type="date" 
                    class="form-control" 
                    id = "CreatedOn" 
                    placeholder="Enter date on which nutrition plan was created" 
                    value={plan.created_At}
                    name ="created_At"
                    onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label float-start">Updated On:</label>
                  <input 
                    type="date"  
                    class="form-control" 
                    id="updatedOn" 
                    placeholder="Enter date on which nutrition plan was updated" 
                    value={plan.updated_At}
                    name="updated_At"
                    onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label float-start">Price:</label>
                  <input 
                    type="number" 
                    step ="any"
                    class="form-control" 
                    id="body"  
                    placeholder="Enter price of Nutrition plan" 
                    value={plan.price}
                    name="price"
                    onChange={handleChange}/>
                </div>
                <div class="d-grid gap-2">
                  <button type="Submit" className="btn btn-primary " >
                  Submit
                  </button>
                 </div>
              </form>
          </div>
  );
};

export default UpdatePlan;
