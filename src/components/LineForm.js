import React, { Component } from "react";
import { connect } from "react-redux";
import { newLine } from "../actions/lineActions";

class LineForm extends Component {
constructor(props) {
   super(props);
//    this.state = {
//       title: "",
//       body: ""
//    };

//    this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
// }

// onChange(e) {
//    this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
   e.preventDefault();

   // const post = {
   //    title: this.state.title,
   //    body: this.state.body
   // };

   // this.props.createPost(post);

   const range = document.querySelector("input");
   console.log(e, range.value);

   this.props.newLine(range.value);
}

render() {
   return (
      <div>
         <h1>Line Details</h1>
         <form onSubmit={this.onSubmit}>
            <div>
               <label>choose a Y-coordinate: </label>
               <br />
               {/* <input
               type="text"
               name="title"
               onChange={this.onChange}
               value={this.state.title}
               /> */}
               <input type="range" name="yAxis" min="0" max="500" step="10"/>
            </div>
            <br />
            {/* <div>
               <label>Body: </label>
               <br />
               <textarea
               name="body"
               onChange={this.onChange}
               value={this.state.body}
               />
            </div> */}
            <br />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}
}

// PostForm.propTypes = {
// createPost: PropTypes.func.isRequired
// };

// export default connect(null, { createPost })(PostForm);

export default connect(null, { newLine })(LineForm);