import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import "./HomePage.css";
import src from "../images/dietPlan.jpg";
import NewsLetterForm from "./NewsLetterForm";

const HomePage = () => {
  const [apiData, setApiData] = useState([]);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    async function fetchMyApi() {
      axios
        .get(`https://nutritrics-backend.herokuapp.com/api/v1/weightLog/showAllWeightLog`)
        .then((response) => {
          setApiData(response.data);
        });
    }
    fetchMyApi();
  }, []);

  useEffect(() => {
    if (apiData) {
      setUserData({
        labels: apiData.map((data) => data.updatedAt),
        datasets: [
          {
            label: "Weight in Kg",
            data: apiData.map((data) => data.weight),
            backgroundColor: "#696969",
            borderColor: "#696969",
          },
        ],
      });
    }
  }, [apiData]);

  return (
    <div className="row">
      <div className="col-sm-6 col-lg-6 left-part" style={{textAlign:"center"}}>
        <h3 className="text">Get Your Customized Diet Plan now!</h3>
        <img className="left-img" src={src} alt="ads"></img>
        <button style={{margin:"15px"}}>
            <Link to="/contact">Contact Us</Link></button>
      </div>
      <div className="col-sm-6 col-lg-6">
        <h3 className="text">See your weight trends over the past days!</h3>
        <div className="chart-container">
          {userData.labels.length > 0 ? <LineChart charData={userData} /> : ""}
        </div>
      </div>
      <NewsLetterForm/>
    </div>
  );
};

export default HomePage;
