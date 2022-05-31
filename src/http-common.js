import axios from "axios";
export default axios.create({
  baseURL: "https://nutritrics-backend.herokuapp.com/api/v1/weightLog/",
  headers: {
    "Content-type": "application/json",
  }
});