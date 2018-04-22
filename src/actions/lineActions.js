
let nextLineId = 0;

export const newLine = yAxis => dispatch => {
   console.log("hello", yAxis);
   return {
      type: "NEW_LINE",
      payload: {
         height: yAxis,
         id: nextLineId++
      }
   }
}

export const fetchLines = () => dispatch => {
   console.log("lines");
   return {
      type: "FETCH_LINES",
      // payload: {

      // }
   }
}