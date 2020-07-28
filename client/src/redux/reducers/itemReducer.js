import isEmpty from "../../validation/is-empty";
import {
  GET_ITEMS,ITEM_ADDED
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  items:[],
  itemAdded:null,
  isLoading:true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        items: action.payload,
        isLoading:false
      };
    case ITEM_ADDED:
    return {
      ...state,
      itemAdded: action.payload,
    };
    

    default:
      return state;
  }
}
