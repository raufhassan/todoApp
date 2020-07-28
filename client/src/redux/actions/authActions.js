import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
} from "./types";
// const baseUrl = "http://construct11.com/app";
import { baseUrl } from "../BaseUrl";

export const registerUser = (userData,history) => (dispatch) => {
  axios
    .post(`${baseUrl}/api/users/register`, userData)
    .then((res) => {
      history.push("./login");
      console.log("successfully registered", res.data);
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const LoginUser = (userData, history) => (dispatch) => {
  axios
    .post(`${baseUrl}/api/users/login`, userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      // push to homepage
      history.push("./");
    })
    .catch((err) =>
      // console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  console.log(decoded);
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
  