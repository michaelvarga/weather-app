import React from "react";

class ForecastDetails extends React.Component {
  render() {
    const { selectedDay, setToClose } = this.props;
    console.log("PROPS: ", this.props)
    return (
      <div className="forecast-details">
        <button onClick={() => setToClose()}>Close</button>
        <div>{selectedDay.temp.min}</div>
        <div>{selectedDay.temp.max}</div>
      </div>
    )
  }
}

export default ForecastDetails;
