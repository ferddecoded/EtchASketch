import React, { Component } from "react";
import { connect } from "react-redux";

class LineCanvas extends Component {
   componentDidMount() {
      this.updateCanvas();
   }

   componentDidUpdate() {
      this.updateCanvas();
   }

   //used to update canvas of the linesArray to be used
   updateCanvas() {
      const linesArray = this.props.lines.linesArray;
      console.log(linesArray);
      {
         linesArray.length > 0 
         ?
            linesArray.forEach((line) => {
               const height = line.height;
               const id = line.id;
               const color = line.color;
               this.drawLines(height, id, color);
         })
         :
            null
      }
   }

   //method taking in arguments and draw lines specific to user selections
   drawLines(height, id, color) {
      console.log(height, id);
      const canvas = this.refs.canvas;
      const line = canvas.getContext("2d");
      

      line.beginPath();
      line.moveTo(20, height);
      line.lineTo(800, height);
      line.strokeStyle = color;
      line.stroke();
   }
   
   render() {
      //setting with of canvas window to width of innerWindow
      const width = window.innerWidth - (window.innerWidth*.05);
      return (
         <div className="lineCanvas">
            {/* using HTML Canvas to draw out lines from state */}
            <canvas ref="canvas" id="exampleCanvas" width={width} height="300" />
         </div>
      )
   }
}

const mapStateToProps = state => ({
  lines: state.lines
});

export default connect(mapStateToProps, null)(LineCanvas);