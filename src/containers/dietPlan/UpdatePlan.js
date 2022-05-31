import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

const UpdatePlan = () => {
  // initialize component state
  const [plan, setPlan] = useState({
    id:"",
    slots:"",
    foodType:"",
    proteinRatio:"",
    fatRatio:"",
    carbsRatio:"",
    total:"",
  });

  // get plan id from url
  const params = useParams();
  console.log(params);

  // const navigate = useNavigate();

  // send get request
  useEffect(() => {
    axios
      .get(`https://nutritrics-backend.herokuapp.com/api/v1/dietPlan/getDietPlan/${params.planId}`)
      .then((res) => {
        console.log(res);
        setPlan((plan) => ({
          ...plan,
          id: res.data.id,  
          slots: res.data.slots,
          foodType: res.data.foodType,
          proteinRatio: res.data.proteinRatio,
          fatRatio: res.data.fatRatio,
          carbsRatio: res.data.carbsRatio,
          total: res.data.total,
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
      .put(`https://nutritrics-backend.herokuapp.com/api/v1/dietPlan/changeDietPlan/${params.planId}`, plan)
      .then((res) => {
        console.log(res);
        alert("Updated plan " + params.planId + " successfully!!");
        // navigate("/dietPlan");
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
                <label htmlFor="slots" className="form-label float-start">Slots:</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id = "slots" 
                  placeholder="Enter Diet Plan Slot" 
                  value={this.state.slots}
                  name ="slots"
                  onChange={this.handleChange}
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="foodType" className="form-label float-start">Food Type:</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id = "foodType" 
                  placeholder="Enter Food Type" 
                  value={this.state.foodType}
                  name ="foodType"
                  onChange={this.handleChange}
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="proteinRatio" className="form-label float-start">Protein Ratio:</label>
                <input 
                  type="number" 
                  step="any"
                  class="form-control" 
                  id = "proteinRatio" 
                  placeholder="Enter the Protein Ratio" 
                  value={this.state.proteinRatio}
                  name ="proteinRatio"
                  onChange={this.handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="fatRatio" className="form-label float-start">Fat Ratio:</label>
                <input 
                  type="number" 
                  step="any"
                  class="form-control" 
                  id = "fatRatio" 
                  placeholder="Enter the Fat Ratio" 
                  value={this.state.fatRatio}
                  name ="fatRatio"
                  onChange={this.handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="carbsRatio" className="form-label float-start">Carbs Ratio:</label>
                <input 
                  type="number" 
                  step="any"
                  class="form-control" 
                  id = "carbsRatio" 
                  placeholder="Enter the Carbs Ratio" 
                  value={this.state.carbsRatio}
                  name ="fatRatio"
                  onChange={this.handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="total" className="form-label float-start">Total calories:</label>
                <input 
                  type="number" 
                  step="any"
                  class="form-control" 
                  id = "total" 
                  placeholder="Enter the Total calories" 
                  value={this.state.total}
                  name ="fatRatio"
                  onChange={this.handleChange}/>
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
