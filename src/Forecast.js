import React from "react";
import ForecastDay from "./ForecastDay";
import ForecastDetails from "./ForecastDetails";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedDay: {}
    }
    this.selectDay = this.selectDay.bind(this);
    this.setToClose = this.setToClose.bind(this);
  }

  selectDay(day) {
    this.setState({
      isOpen: true,
      selectedDay: day
    })
    console.log("SELECTED DAY: ", this.state.selectedDay)
  }

  setToClose() {
    this.setState({
      isOpen: false,
      selectedDay: {}
    })
    console.log("SELECTED DAY: ", this.state.selectedDay)
  }

  render() {
    const { forecast, timezone } = this.props;
    // console.log("FORECAST: ", forecast);

    return (
      <div>
        <div className="forecast-container">
          {!forecast
            ? "There is no forecast to display for this location"
            : forecast.map((day, idx) => (
                <a key={idx} onClick={() => this.selectDay(day)}>
                  <ForecastDay
                  day={day}
                  idx={idx}
                  timezone={timezone}
                />
                </a>
              ))}
        </div>
        {this.state.isOpen && <ForecastDetails selectedDay={this.state.selectedDay} setToClose={this.setToClose}/>}
      </div>
    );
  }
}

export default Forecast;
