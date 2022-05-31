import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { getAllPaymentsAction } from '../../redux/actions/paymentActions';
import { connect } from "react-redux";

class Payments extends Component {
    state = { 
        payments: []
     };
     // Life cycle methods

    //  handleDelete = (payId) => {
    //     console.log(payId);
    //     axios
    //       .delete(`http://localhost:8080//api/v1/payment/${payId}`)
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };

  componentDidMount() {
    console.log("componentDidMount");
    // axios
    //   .get("http://localhost:8080//api/v1/payment")
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ payments: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Dispatch action to get all products
    this.props.getAllPaymentsAction();
    setTimeout(() => {
      this.setState({ payments: this.props.payments });
    }, 1000);
  } 
    render() { 
        // console.log("render method");
        console.log(this.state.payments);
        return (
            <div className="w-75 mx-auto mt-3" style={{minHeight:"100vh"}}>
        <h1 data-testid="title">Payments Page</h1>
        
        <Link to="/payment/AddOffer" type="button" className="btn btn-info mb-3 float-end">
          Add Offer
        </Link>
        <table className="table table-info table-hover">
          <thead>
            <tr className="table table-dark">
              <th>Id</th>
              <th>Payment</th>
              <th>Discount</th>
              <th>Created_At</th>
              <th>Updated_At</th>
              <th>User_Id</th>
              <th>Plan_Id</th>
              <th>Action</th>
              {/* <th>Delete</th>  */}
            </tr>
          </thead>
          <tbody>
            {this.state.payments.map((p) => (
              <tr>
                <td>{p.id}</td>
                <td>{p.payment}</td>
                <td>{p.discount}</td>
                <td>{p.created_At}</td>
                <td>{p.updated_At}</td>
                <td>{p.user.userId}</td>
                <td>{p.planId}</td>
                <td>
                <Link to={`/payment/update/${p.id}`}>
                <button style={{fontSize :"18px",backgroundColor:'black',color :"skyblue"}}>Update
                    <i className="fa fa-edit ms-2 mt-1" style={{
                        fontSize: "25px",
                        color : 'skyblue'
                    }}></i>
                    </button>
                  </Link>
                </td>
                {/* <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    //onClick={() => this.handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td> */}
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
    payments: state.fakestore.payments,
  };
};
 
// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPaymentsAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Payments);