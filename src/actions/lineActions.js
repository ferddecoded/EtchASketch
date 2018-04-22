import { NEW_LINE } from "./types";

let nextLineId = 0;

export const newLine = yAxis => dispatch => {
   console.log("hello");
   return {
      type: NEW_LINE,
      payload: {
         height: yAxis,
         id: nextLineId++
      }
   }
}