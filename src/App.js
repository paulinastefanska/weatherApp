import React, { Component } from "react";

import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmint = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=f262281ecaf37255968f7b381035a318&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Oops... something went wrong");
      })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmint}
        />
        <Result />
      </div>
    );
  }
}

export default App;
