import React from "react";
import "./Result.scss";

const Result = props => {
  const {
    date,
    icon,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div className="content">
        <div className="content-info">
          <p>
            <strong>{date}</strong>
          </p>
          <p className="content-city">
            <strong>{city}</strong>
          </p>
        </div>
        <div className="content-weather">
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weather-img"
          />
          <span className="content-temp">
            <strong>{temp}&deg;C</strong>
          </span>
          <span>
            Sunrise time: <strong>{sunriseTime}</strong>
          </span>
          <span>
            Sunset time: <strong>{sunsetTime}</strong>
          </span>
          <span>
            Pressure: <strong>{pressure} hPa</strong>
          </span>
          <span>
            Wind: <strong>{wind} m/s</strong>
          </span>
        </div>
      </div>
    );
  }

  return (
    <>{err ? `Sorry, we do not have ${city} in the database...` : content}</>
  );
};

export default Result;
