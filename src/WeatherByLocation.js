import React, { Component, Fragment } from "react";
import { useParams } from "react-router-dom";
import LocationSearchResults from "./components/LocationSearchResults";

export default class WeatherByLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: [],
      location_name: "",
    };
  }
  componentWillMount() {
    const { lat, lon } = this.props.match.params;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHERAPI}`
    )
      .then((res) => res.json())
      .then((location) => {
        console.log("data location", location);
        this.setState({ location_name: location.name });
      })
      .catch(console.log);

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHERAPI}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ weatherData: data });
      })
      .catch(console.log);
  }

  render() {
    console.log("weatherData", this.state.weatherData);
    console.log("location", this.state.location_name);
    return (
      <Fragment>
        <LocationSearchResults data={this.props.locationResults} />
        {this.props.locationResults == 0 ? (
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-2/6 px-6">
                <div className="bg-gray-200 p-6 rounded-md">
                  <h1 ariaLabel={`Weather in ${this.state.location_name}`}>
                    {this.state.location_name}
                  </h1>
                </div>
              </div>
              <div className="w-4/6 px-6">
                <div className="p-6">
                  <span>Main</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}
