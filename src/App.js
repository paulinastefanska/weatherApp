import React, { Component } from "react";

import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
