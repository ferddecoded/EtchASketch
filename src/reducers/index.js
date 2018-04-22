import { combineReducers } from "redux";
import lineReducer from "./lineReducer";

export default combineReducers({
   lines: lineReducer
});