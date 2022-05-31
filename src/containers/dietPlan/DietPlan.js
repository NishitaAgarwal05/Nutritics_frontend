import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllPlansAction }  from "../../redux/actions/dietPlanActions";
import { connect } from "react-redux";
import {RiDeleteBinLine} from "react-icons/ri";
import {Button} from "reactstrap";
import {FiEdit2}from "react-icons/fi";
import {FcInfo} from "react-icons/fc";
import axios from "axios";
class DietPlan extends Component {
  state = {
    plans: [],
  };
  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    // Dispatch action to get all products
    this.props.getAllPlansAction();
    setTimeout(() => {
      this.setState({ plans: this.props.plans });
    }, 2000);
  }
  handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://nutritrics-backend.herokuapp.com/api/v1/dietPlan/removeDietPlan/${id}`)
      .then((response) => {
        window.location.reload(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.plans);
    return (
      <div className="w-75 mx-auto mt-3" style={{minHeight:"100vh"}}>
      <Link 
      to="/dietPlan/add"
      type="button" className="btn  float-end" style={{backgroundColor:"#f3a82f" ,color:"white"}}>
      Add Plan
      </Link>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Slot</th>
        <th>Food Type</th>
        <th>Price(Rs.)</th>
      </tr>
    </thead>
    <tbody>
      {this.state.plans.map((plan) => (
        <tr>
          <td>{plan.slots}</td>
          <td>{plan.foodType}</td>
          <td>{plan.total}</td>
          <td>
          <Link  to={`/dietPlan/update/${plan.id}`}>
            <Button style={{ margin: '.25rem' }} outline color="primary" size="sm"><FiEdit2></FiEdit2></Button>
          </Link>
          <Button style={{ margin: '.25rem' }} outline color="danger" size="sm" onClick={()=>this.handleDelete(plan.id)}><RiDeleteBinLine></RiDeleteBinLine></Button>
          <Link  to={`/dietPlan/details/${plan.id}`}>
            <Button style={{ margin: '.25rem' }} outline color="primary" size="sm"><FcInfo></FcInfo></Button>
          </Link>
          </td>
          <td>
          <Link  to={`/payment/add`}>
            <Button style={{ margin: '.25rem' }} outline color="primary" size="sm">Pay Now</Button>
          </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    plans: state.fakestorePlans.plans,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPlansAction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(DietPlan);