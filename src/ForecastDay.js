import React from "react";

class ForecastDay extends React.Component {
  displayDate(date, days, timezone) {
    const d = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    const result = new Date(new Date(date * 1000).toLocaleString("en-US", {timeZone: timezone}));
    const month = result.getMonth() + 1;
    const day = result.getDate();
    const weekDay = d[result.getDay()]
    return days === 0 ? 'Today' : `${weekDay} ${month}/${day}`;
  }

  render() {
    const { day, idx, timezone } = this.props;

    return (
      <div className="forecast-day">
        <div id="forecast-date">{this.displayDate(day.dt, idx, timezone)}</div>
        <div><img src={require(`./icons/${day.weather[0].icon}.png`)} alt="weather icon"/></div>
        <div><span>{day.weather[0].main}</span></div>
        <div>Min <span className="temp">{Math.round(day.temp.min)}&#8457;</span></div>
        <div>Max <span className="temp">{Math.round(day.temp.max)}&#8457;</span></div>
      </div>
    );
  }
}

export default ForecastDay;
