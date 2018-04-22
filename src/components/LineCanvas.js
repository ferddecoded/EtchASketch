import React, { Component } from "react";

class LineCanvas extends Component {
   render() {
      return (
         <div className="lineCanvas">
            <canvas id="exampleCanvas" width="500" height="300" />
         </div>
      )
   }
}

export default LineCanvas;