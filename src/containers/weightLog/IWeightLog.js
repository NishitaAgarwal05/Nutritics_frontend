import axios from "axios";
import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import { Link } from "react-router-dom";
import {RiDeleteBinLine} from "react-icons/ri";
import {Button} from "reactstrap";
import {FiEdit2}from "react-icons/fi";
const IWeightLog = () => {
    const [apiData, setApiData] = useState([]);
    const [id,setId] = useState("");
    const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });
  const handleClick = (id) => {
    axios
      .delete(`https://nutritrics-backend.herokuapp.com/api/v1/weightLog/removeWeightLog/${id}`,{
        headers:{
          "Authorization": localStorage.jwtToken
        }
      })
      .then((response) => {
        window.location.reload(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
      axios
        .get(`https://nutritrics-backend.herokuapp.com/api/v1/user/getUser/${localStorage.email}`,{
          headers:{
            "Authorization":localStorage.jwtToken
          }
        })
        .then((res) => {
            localStorage.setItem("user",res.data);
            setId(res.data.userId);
         });
    }, []);
  
    useEffect(() => {
        async function fetchMyApi() {
      await axios
      .get(`https://nutritrics-backend.herokuapp.com/api/v1/weightLog/showWeightLog/${id}`,{
        headers:{
          "Authorization":localStorage.jwtToken
        }
      })
      .then((response) => {
        setApiData(response.data);
        console.log(response.data);
      }); 
        }
        fetchMyApi();
      }, [id]);

  useEffect(() => {
    if (apiData) {
      setUserData({
        labels: apiData.map((data) => data.updatedAt),
        datasets: [
          {
            label: "Weight in Kg",
            data: apiData.map((data) => data.weight),
            position: "absolute",
            backgroundColor: "#696969",
            borderColor: "#696969",
            
          },
        ],
      });
    }
  }, [apiData]);
  
  
    return ( 
    <div className="container">
        { userData.labels.length>0?
        <><h3 className="text">See your weight trends over the past days!</h3><br></br></>:null
        }
        <div className="row">
            <div className="col-sm-1 col-md-1 col-lg-2">
            </div>
            <div className="col-sm-10 col-md-10 col-lg-8">
                <div className="chart-container">
                   {userData.labels.length > 0 ? <LineChart charData={userData} /> : ""}
                 </div>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-2">
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-sm-4 col-md-4 col-lg-4">
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 my-2">
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <a className=" btn  float-end" style={{width:"50%", backgroundColor:"#f3a82f" ,color:"white"}} role="button"  href="/weightLog/add">Add a Weight Log</a>
            </div>
        </div>
        <div className="row mt-5">
          { userData.labels.length>0?
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Weight</th>
                  <th>Created On</th>
                  <th>Updated On</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.weight}</td>
                    <td>{data.createdAt}</td>
                    <td>{data.updatedAt}</td>
                    <td>
                      <Link  to={`/weightLog/update/${data.id}`}>
                        <Button style={{ margin: '.25rem'}}  outline color="primary" size="sm"><FiEdit2></FiEdit2></Button>
                      </Link>
                      <Button style={{ margin: '.25rem' }} outline color="danger" size="sm" onClick={()=>{handleClick(data.id)}}><RiDeleteBinLine></RiDeleteBinLine></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot><br></br></tfoot>
            </table>
            :
            <h3>Add weight log!!!!</h3>
                }
        </div>

    </div>
    );
}
 
export default IWeightLog;