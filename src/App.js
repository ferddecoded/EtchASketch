import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';

import LineForm from "./components/LineForm";
import LineList from "./components/LineList";
import LineCanvas from "./components/LineCanvas";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
         </header>
         <hr />
         <LineForm />
         <div className="lineContainer">
            <LineList />
            <LineCanvas />
         </div>

          
      </div>
      </Provider>
    );
  }
}

export default App;
