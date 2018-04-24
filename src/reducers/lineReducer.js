// const initialState = {
//    lines: [],
//    line: {}
// }

const initialState = {
  linesArray: [],
  selectedLine: null
};

export default function (state = initialState, action) {
   switch (action.type) {
      //with the SELECT_LINE action, we are setting the selectedLine in state
      case "SELECT_LINE":
         return {
            ...state,
            selectedLine: action.id
         };
      //NEW_LINE is used to create a new line and save to state
      case "NEW_LINE":
         // console.log("new line")
         return {
            ...state,
            linesArray: [...state.linesArray, action.payload]
         };
      //REMOVE_LINE is used to remove the line for the redux state
      case "REMOVE_LINE":
         console.log("REDUCE REMOVE line");

         return {
            ...state,
            linesArray: [...state.linesArray.filter((line) => {
               return line.id !== action.id
            })]
         };
      default:
         return state;
   }
}