import React from "react";

class ForecastDay extends React.Component {
  render() {
    const { day } = this.props;
    // console.log("Day: ", day)
    return (
      <div className="forecast-day">
        <div><img src={require(`./icons/${day.weather[0].icon}.png`)} alt="weather icon"/></div>
        <div>{day.weather[0].main}</div>
        <div>{day.temp.min}</div>
        <div>{day.temp.max}</div>
      </div>
    );
  }
}

export default ForecastDay;
