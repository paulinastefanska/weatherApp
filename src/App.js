import React, { Component } from "react";

import Form from "./components/Form";
import Result from "./components/Result";
import "./App.scss";

const APIkey = "f262281ecaf37255968f7b381035a318";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    icon: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmint = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Oops... something went wrong");
      })
      .then(response => response.json())
      .then(result => {
        const time = new Date().toLocaleString();

        this.setState(prevState => ({
          date: time,
          city: prevState.value,
          icon: result.weather[0].icon,
          sunrise: result.sys.sunrise,
          sunset: result.sys.sunset,
          temp: Math.floor(result.main.temp),
          pressure: result.main.pressure,
          wind: result.wind.speed,
          err: false
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }));
      });
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
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
