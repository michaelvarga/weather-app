import React from "react";
import ForecastDay from "./ForecastDay";

class Forecast extends React.Component {
  render() {
    const { forecast } = this.props;
    // console.log("FORECAST: ", forecast);
    return (
      <div className="forecast-container">
        {!forecast
          ? "There is no forecast to display for this location"
          : forecast.map((day) => (
            <ForecastDay key={day.dt} day={day}/>
          ))}
      </div>
    )

  }
}

export default Forecast;
