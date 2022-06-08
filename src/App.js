import React, { useState } from "react";
import "./App.css";

const api = {
  key: "a7554c1e88ba66f0d735a50734399497",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.baseUrl}weather?q=${query}&units=imperial&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const displayDate = (timeOffset) => {
    //finds the local date/time in city that user searches for
    const newDate = new Date(new Date().getTime() + timeOffset * 1000 + new Date().getTimezoneOffset() * 60000);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[newDate.getDay()];
    const date = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    //set the time to display in 12hr format
    const time = newDate
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

    return `${day} ${month} ${date} ${year} ${time}`;
  };

  const weatherType = (id) => {
    if (id === 800) {
      return "clear";
    } else if (id >= 300 && id <= 531) {
      return "rain";
    } else if (id >= 803 && id <= 804) {
      return "overcast";
    } else if (id >= 200 && id <= 232) {
      return "storm";
    } else if (id >= 600 && id <= 622) {
      return "snow";
    } else if (id >= 700 && id <= 781) {
      return "hazy";
    } else {
      return "part-cloudy";
    }
  };

  const backgroundClass = () => {
    let time;
    //check API for presence of 'd' or 'n' in id, indicating day/night
    const isDay = weather.weather[0].icon.slice(-1) === 'd';
    isDay ? time = 'day' : time = 'night'
    const type = weatherType(weather.weather[0].id);
    return `app ${type}-${time}`;
  };

  return (
    <div className={(typeof weather.main !== "undefined") ? backgroundClass() : "app"}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)} //refactor this
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{displayDate(weather.timezone)}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}&deg;F
              </div>
              <div className="weather">
                {weather.weather[0].description.toUpperCase()}
              </div>
              <img src={require(`./icons/${weather.weather[0].icon}.png`)} alt="weather icon"/>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
