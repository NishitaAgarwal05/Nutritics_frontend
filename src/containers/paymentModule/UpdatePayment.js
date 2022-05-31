import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const UpdatePayment = () => {
     // initialize component state
     const [payment, setPayment] = useState({
        id:"",
        payment: "",
        discount: "",
        created_At: "",
        updated_At:"",
        planId: "",
        user:{
          userId:"",
          userIdentification:"ABCD",
      name:"Muskan",
     contact:"9518789095",
     gender:"F",
     dob:"29-08-200",
     photo:"photo",
     email:"email",
     role:"role",
     status:"active",
     weight:60,
     height:5.6,
     intensity:12,
     goal:"goal",
     workOutTime:"32",
     wakeUpTime:"8:00",
     sleepTime:"9:00",
     medicalCondition:"good",
     allergicTo:"non",
     loginName:"ap",
     password:"123",
     diateryOrientation:123
      },
     })

    // get paymnet id from url
    const params = useParams();
    console.log(params);

    // Navigate
    const navigate = useNavigate();

    // send get request
  useEffect(() => {
    axios
      .get(`https://nutritrics-backend.herokuapp.com/api/v1/payment/${params.paymentId}`)
      .then((res) => {
        console.log(res);
        setPayment((payment) => ({
          ...payment,
          id : res.data.id,
          payment: res.data.payment,
          discount: res.data.discount,
          created_At : res.data.created_At,
          updated_At : res.data.updated_At,
          userId: res.data.userId,
          planId: res.data.planId,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

    const handleChange = (event) => {
    // event.target.name - name of the field
    // event.target.value - value entered in the field
    setPayment((payment) => ({ ...payment, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(payment);
    axios
      .put(`https://nutritrics-backend.herokuapp.com/api/v1/payment`, payment)
      .then((res) => {
        console.log(res);
        alert("Updated payment for id : " + params.paymentId + " successfully!!");
        navigate("/payments")
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return ( 
        <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Update Payment Page</h1>
        
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
            <label htmlFor="id" className="form-label float-start">
              Id
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              aria-describedby="emailHelp"
              value={payment.id}
              name="id"
              onChange={handleChange}
              disabled
            />
            </div>
          <div className="mb-3">
            <label htmlFor="payment" className="form-label float-start">
              Payment
            </label>
            <input
              type="number"
              className="form-control"
              id="payment"
              aria-describedby="emailHelp"
              value={payment.payment}
              name="payment"
              onChange={handleChange}
            />
         
          </div>
          <div className="mb-3">
            <label htmlFor="discount" className="form-label float-start">
              Discount
            </label>
            <input
              type="number"
              className="form-control"
              id="discount"
              value={payment.discount}
              name="discount"
              onChange={handleChange}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="created_At" className="form-label float-start">
              Date Created At
            </label>
            <input
              type="date"
              className="form-control"
              id="created_At"
              value={payment.created_At}
              name="created_At"
              onChange={handleChange}
            />
  
          </div>
          <div className="mb-3">
            <label htmlFor="updated_At" className="form-label float-start">
              Date Updated At
            </label>
            <input
              type="date"
              className="form-control"
              id="updated_At"
              value={payment.updated_At}
              name="updated_At"
              onChange={handleChange}
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label float-start">
              User Id
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={payment.user.userId}
              name="userId"
              onChange={handleChange}
            />
          
          </div>
          <div className="mb-3">
            <label htmlFor="planId" className="form-label float-start">
              Plan Id
            </label>
            <input
              type="number"
              className="form-control"
              id="planId"
              value={payment.planId}
              name="planId"
              onChange={handleChange}
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
 
export default UpdatePayment;