import React, { Component } from "react";
import { connect } from "react-redux";

class LineCanvas extends Component {
   //rund update Canvas immediately
   componentDidMount() {
      this.updateCanvas();
   }

   //if there are any updates, will render any new lines that need to be done
   componentDidUpdate() {
      this.updateCanvas();
   }

   //used to update canvas of the linesArray to be used
   updateCanvas() {
      //this is is to reset the canvas to a blank canvas before drawing every instance of lines
      const canvas = this.refs.canvas;
      const clear = canvas.getContext("2d");
      clear.clearRect(0, 0, canvas.width, canvas.height);
      
      const linesArray = this.props.lines.linesArray;
      //if the linesArray contains items within it, we will go over each line and draw it within the canvas element
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

// function that maps our state to props in order to draw our lines
const mapStateToProps = state => ({
  lines: state.lines
});

//use connect in order to map state to our props to be used within the component
export default connect(mapStateToProps, null)(LineCanvas);