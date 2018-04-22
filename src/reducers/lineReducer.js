import { NEW_LINE } from "../actions/types";

const initialState = {
   lines: [],
   line: {}
}

export default function (state = initialState, action) {
   switch (action.type) {
      case "FETCH_LINES":
         return {
            ...state,
            lines: action.payload
         };
      case NEW_LINE:
         return {
            ...state,
            line: action.payload
         };
      default:
         return state;
   }
}