import React, { Component } from "react";
import { connect } from "react-redux";
import { newLine } from "../actions/lineActions";

class LineForm extends Component {
   constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
   }

   //onSubmit that takes the current values for the line height and line color to be sent to the newLine action
   onSubmit(e) {
      e.preventDefault();

      const range = document.querySelector(".lineHeight");
      const color = document.querySelector(".lineColor");
      // console.log(range.value, color.value);

      let rangeCheck = range.value.trim();
      // console.log(rangeCheck, rangeCheck.length);

      if (rangeCheck.length > 0) {
         this.props.newLine(parseInt(range.value), color.value);
      } else {
         alert("Please enter a valid number");
      }
   }

   render() {
      // console.log(this.props)
      return (
         <div className="wrapper">
            <div className="lineForm">
               <h1>Line Details</h1>
               {/* when the form is submitted, we pass our values from our inputs in order to save in state */}
               <form onSubmit={this.onSubmit}>
                  <div className="formInputContainer">
                     {/* input for line height within our canvas element */}
                     <div className="formInput">
                        <label>choose a height for your line: </label>
                        <br />
                        <input 
                           className="lineHeight" 
                           type="text" 
                           name="yAxis" 
                           placeholder={
                              this.props.selectedLine === undefined
                              ? `0 - 300`
                              : `selected`
                           }/>
                     </div>
                     {/* input for the color of our line */}
                     <div className="formInput">
                        <label>choose a color: </label>
                        <br />
                        <input className="lineColor" type="color" name="color"/>
                     </div>
                  </div>
                  <br />
                  {/* button that initiates our formSubmit method */}
                  <div className="formInput">
                     <button type="submit">Submit</button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

//
const mapStateToProps = state => ({
  lines: state.lines,
  selectedLine: state.selectedLine
});

//we use connect in order to use our actions and map our state to props to be used within the component
export default connect(mapStateToProps, { newLine })(LineForm);