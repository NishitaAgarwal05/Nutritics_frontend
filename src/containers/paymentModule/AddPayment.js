import React, {useState ,useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getPlanByIdAction } from "../../redux/actions/nutritionPlanActions";
import axios from "axios";
//import Joi from "joi-browser";
import {withRouter} from "./withRouter"
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

const AddPayment=()=> {
   const [payment,setPayment]=useState( {
      payment: "",
      created_At: "",
      updated_At:"",
      user: {},
      planId:""
    });
    const [u,setU]=useState({});
    
  
  const [errors,setErrors]=useState({});
  const[errMsg,setErrMsg]= useState("");
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const params= useParams();
  useEffect(()=>{
    axios.get(`https://nutritrics-backend.herokuapp.com/api/v1/user/getUser/${localStorage.email}`,{
            headers:{
              "Authorization": localStorage.jwtToken
            }
          }).then((res)=>{
            // setPayment({...payment,"user":res.data})
            setU(res.data);
          });
  },[]);
  useEffect(() => {
    async function fetchData(){
      await axios
          .get("https://nutritrics-backend.herokuapp.com/api/v1/nutritionPlan/getPlan/"+params.planId,
          {
            headers:{
              'Authorization': localStorage.jwtToken
            }      
          }).then((res)=>{
          setPayment({...payment,"created_At":moment().locale('en').format('YYYY-MM-DD'), "payment":res.data.price,"planId":params.planId, "user":u});
        });
      }
      fetchData();
    }, [u.userId]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(payment);
    axios
      .post("https://nutritrics-backend.herokuapp.com/api/v1/payment/pay", payment,{
        headers:{
          "Authorization": localStorage.jwtToken
        }
      })
      .then((res) => {
          console.log(res.data);
          alert("Added Payment to Log successfully!");
          { localStorage.role[0]==='A'
            ?navigate("/payments"):
            navigate("/nutritionPlan")
          }
      })
      .catch((err) => {
        console.log(err);
       // this.setState({ errMsg: err.response.data.message });
      });
  };
    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Add Payment Page</h1>
        {/* {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )} */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="payment" className="form-label float-start">
              Payment
            </label>
            <input
              type="number"
              className="form-control"
              id="payment"
              value={payment.payment}
              name="payment"
              // onLoad={()=>{setPayment({...payment, "plan":p, "created_At":moment().locale('en').format('YYYY-MM-DD')})}}
              disabled
            />
            {/* {errors && <small className="text-danger">{errors.payment}</small>} */}
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
              disabled
            />
            {/* {errors && <small className="text-danger">{errors.created_At}</small>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label float-start">
              User Id
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={u.userId}
              name="userId"
              disabled
            />
            {/* {errors && <small className="text-danger">{errors.userId}</small>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="planId" className="form-label float-start">
              Plan Id
            </label>
            <input
              type="number"
              className="form-control"
              id="planId"
              value={params.planId}
              name="planId"
              disabled
            />
            {/* {errors && <small className="text-danger">{errors.planId}</small>} */}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div><br></br>
        </form>
      </div>
    );
}
export default withRouter(AddPayment);



