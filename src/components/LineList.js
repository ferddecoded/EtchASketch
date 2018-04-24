import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectLine, removeLine } from "../actions/lineActions";


class LineList extends Component {
   // componentWillMount() {
   //    this.props.fetchLines();
   // }

   // componentWillReceiveProps(nextProps) {
   //    if(nextProps.newLine) {
   //       this.props.lines.unshift(nextProps.newLine);
   //    }
   // }

   //method for when user is is clicking on specific line and is updating selectedLine in state
   selectedLine(id) {
      console.log("clicked", id);
      this.props.selectLine(id);
   }

   //method for when user wants to delete line from redux linArray state
   removeLine(id) {
      console.log("clicked", id);
      this.props.removeLine(id);
   }
   
   render() {
      //assigning our linesArray state to a variable
      const linesArray = this.props.lines.linesArray;

      // console.log(this.props.lines.selectedLine);
      
      return (
         <div className="wrapper">

            <div className="lineList">

               <h1>List of Lines</h1>
               <div className="wrapper">
                  {/* if our linesArray has items within it, we will map the items onto the list of lines */}
                  {linesArray.length > 0
                     ? linesArray.map(line => {
                        return   <div 
                                 className="lineItem" key={line.id}>
                                       <h3 onClick={() => this.selectedLine(line.id)}>Line ID: {line.id}</h3>
                                    <div className="itemDetails">
                                       <div className="detailsSpecs">
                                          <p><span>Line Height:</span>{line.height}</p>
                                          <p><span>Line Color:</span>{line.color}</p>
                                       </div>
                                       <div className="itemButtonContainer">
                                          <button 
                                             onClick={() => this.removeLine(line.id)}
                                             className={
                                                this.props.lines.selectedLine === line.id
                                                ? `buttonShown`
                                                : `buttonHidden`
                                             }>
                                             X
                                          </button>
                                       </div>
                                    </div>
                                    
                                 </div>
                     })
                     : null
                  }
               </div>
            </div>
         </div>
      )
   }
}

//function that maps State to the props of this component in order to be used
const mapStateToProps = state => ({
  lines: state.lines,
  selectedLine: state.selectedLine
});

//connecting to store to access our actions and mapstatetoprops to be used within the component
export default connect(mapStateToProps, { selectLine, removeLine })(LineList);