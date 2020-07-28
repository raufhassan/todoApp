import axios from "axios"
import {ITEM_ADDED,GET_ITEMS, GET_ERRORS} from "./types"                   
import { baseUrl } from "../BaseUrl";

export const fetchitems=()=>(dispatch)=>{
  axios
      .get(`${baseUrl}/api/items/allItems`)
      .then((res) => {
        dispatch({
          type: GET_ITEMS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
};


export const additem = (data) => (dispatch) => {
    axios
      .post(`${baseUrl}/api/items/addItem`, data)
      .then((res) => {
        dispatch({
          type: ITEM_ADDED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
  
  export const deleteitem = (id) => (dispatch) => {
    axios
      .post(`${baseUrl}/api/items/DeleteItem`, { itemId: id })
      .then((res) => {
        console.log(res.data);  
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  