import { combineReducers } from "redux";
import lineReducer from "./lineReducer";

//we use combineReducers in order to merge all of our other reducer components
//unforotunately there is only one
export default combineReducers({
   lines: lineReducer
});