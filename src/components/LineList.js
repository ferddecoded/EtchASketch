import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLines } from "../actions/lineActions";


class LineList extends Component {
   componentWillMount() {
      this.props.fetchLines();
   }

   componentWillReceiveProps(nextProps) {
      if(nextProps.newLine) {
         this.props.lines.unshift(nextProps.newLine);
      }
   }
   
   render() {
      console.log(this.props.newLine);
      const lineItems = this.props.lines.map(line => (
         <div className="lineItem" key={line.id}>
            <h3>{line.id}</h3>
            <p>{line.yAxis}</p>
         </div>
      ))
      return (
         <div className="lineListContainer">
            <h1>hello</h1>
            {lineItems}
         </div>
      )
   }
}

const mapStateToProps = state => ({
  lines: state.lines.lines,
  newLine: state.lines.line
});

// export default LineList;
export default connect(mapStateToProps, { fetchLines })(LineList);