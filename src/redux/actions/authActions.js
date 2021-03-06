import * as AT from "../constants/authTypes";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AUTH_URL = "https://nutritrics-backend.herokuapp.com/api/v1/user/authenticateUser";

export const authenticateUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(AUTH_URL, {
      email: email,
      password: password,
    });
    localStorage.setItem("jwtToken", response.data.token);
    localStorage.setItem("role",response.data.authorities);
    localStorage.setItem("email",response.data.name);
    localStorage.setItem("isLoggedIn",true);
    dispatch(success({ username: response.data.name, isLoggedIn: true}));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(failure());
    return Promise.reject(error);
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    dispatch(success({ username: "", isLoggedIn: false }));
  };
};

const loginRequest = () => {
  return {
    type: AT.LOGIN_REQUEST,
  };
};

const logoutRequest = () => {
  return {
    type: AT.LOGOUT_REQUEST,
  };
};

const success = (isLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};