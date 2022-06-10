import React from "react";

class ForecastDay extends React.Component {
  displayDate(date, days, timezone) {
    const result = new Date(new Date(date * 1000).toLocaleString("en-US", {timeZone: timezone}));
    const month = result.getMonth() + 1;
    const day = result.getDate();
    return days === 0 ? 'Today' : `${month}/${day}`;
  }

  render() {
    const { day, idx, timezone } = this.props;

    return (
      <div className="forecast-day">
        <div>{this.displayDate(day.dt, idx, timezone)}</div>
        <div><img src={require(`./icons/${day.weather[0].icon}.png`)} alt="weather icon"/></div>
        <div>{day.weather[0].main}</div>
        <div>Min: {Math.round(day.temp.min)}&#8457;</div>
        <div>Max: {Math.round(day.temp.max)}&#8457;</div>
      </div>
    );
  }
}

export default ForecastDay;
