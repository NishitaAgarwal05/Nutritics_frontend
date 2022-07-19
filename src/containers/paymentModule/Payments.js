import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { getAllPaymentsAction } from '../../redux/actions/paymentActions';
import { connect } from "react-redux";

const Payments=()=> {
  
    const  [payments,setPayments]=useState([]);

  useEffect( ()=>{
    console.log("useEffect");
    axios
      .get("https://nutritrics-backend.herokuapp.com/api/v1/payment/listAllPayments",{
        headers:{
          "Authorization": localStorage.jwtToken
        }
      })
      .then((response) => {
        console.log(response);
        setPayments(response.data );
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
        <div className="w-75 mx-auto mt-3" style={{height: "100vh"}}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Created_At</th>
              <th>User Id</th>
              <th>Plan Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr>
                <td>{p.payment}</td>
                <td>{p.created_At}</td>
                <td>{p.user.userId}</td>
                <td>{p.planId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        );
}

export default Payments;