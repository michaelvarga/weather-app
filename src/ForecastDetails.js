import React from "react";

class ForecastDetails extends React.Component {
  displayTime(date, timezone) {
    const result = new Date(
      new Date(date * 1000).toLocaleString("en-US", { timeZone: timezone })
    );
    const time = result
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    return time;
  }

  render() {
    const { selectedDay, setToClose, timezone } = this.props;
    console.log("PROPS: ", this.props);
    return (
      <div className="forecast-details">
        <span class="close" onClick={() => setToClose()} aria-hidden="true">
          &times;
        </span>
        <div className="temp-wind-forecast">
          <div>Min <span>{Math.round(selectedDay.temp.min)}&#8457;</span></div>
          <div>Max <span>{Math.round(selectedDay.temp.max)}&#8457;</span></div>
          <div>Humidity <span>{selectedDay.humidity}%</span></div>
          <div>UV Index <span>{selectedDay.uvi}</span></div>
        </div>
        <div className="sun-forecast">
        <div className="wind-forecast">
          <img src={require(`./icons/dark-wind.png`)} alt="wind" id="dark-wind"/>
          <span>{selectedDay.wind_speed} mph</span>
        </div>
          <div className="sunrise-sunset">
            <img src={require(`./icons/sunrise.png`)} alt="sunrise" />
            <span>{this.displayTime(selectedDay.sunrise, timezone)}</span>
          </div>
          <div className="sunrise-sunset">
            <img src={require(`./icons/sunset.png`)} alt="sunset" />
            <span>{this.displayTime(selectedDay.sunset, timezone)}</span>
          </div>
        </div>
        <div className="feels-like-forecast">
          <h4>Feels Like</h4>
          <div>
            <div className="feels-like-day">
              <span className="feels-like-temp">
                {Math.round(selectedDay.feels_like.morn)}&#8457;
              </span>
              <span>Morning</span>
            </div>
            <div className="feels-like-day">
              <span className="feels-like-temp">
                {Math.round(selectedDay.feels_like.day)}&#8457;
              </span>
              <span>Day</span>
            </div>
            <div className="feels-like-day">
              <span className="feels-like-temp">
                {Math.round(selectedDay.feels_like.eve)}&#8457;
              </span>
              <span>Evening</span>
            </div>
            <div className="feels-like-day">
              <span className="feels-like-temp">
                {Math.round(selectedDay.feels_like.night)}&#8457;
              </span>
              <span>Night</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastDetails;
