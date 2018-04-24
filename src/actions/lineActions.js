
let nextLineId = 0;

//reduce action that creates a new line from user information
export const newLine = (lineHeight, color) => dispatch => {
   // console.log("hello");
   dispatch({
      type: "NEW_LINE",
      payload: {
         height: parseInt(lineHeight),
         id: nextLineId++,
         color: color
      }
         
   })
}

//Method that places clicked on Line to be set in redux state
export const selectLine = (id) => dispatch => {
   // console.log("select");
   dispatch({
      type: "SELECT_LINE",
      id
   })
}

//method for deleting specific selected line
export const removeLine = (id) => dispatch => {
   console.log("remove");
   dispatch({
      type: "REMOVE_LINE",
      id
   })
}