import React, { Component, Fragment, useState } from "react";
import "./App.css";
import { Line } from "react-chartjs-2";
import moment from "moment";
import "moment-timezone";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import WeatherByLocation from "./WeatherByLocation";
import LocationSearch from "./components/LocationSearch";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      weather: [],
      location_results: [],
      location_input: "",
    };
  }

  location_input = (e) => {
    return this.state.location_input;
  };

  handleSearchChange = (e) => {
    this.setState({ location_input: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    let param = this.state.location_input;

    fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${param}&type=like&sort=population&cnt=30&appid=${process.env.REACT_APP_WEATHERAPI}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location_results: data.list });
      })
      .catch(console.log);
  };

  render() {
    const { location_results } = this.state;
    console.log("app lr", location_results);
    let environment;

    if (process.env.REACT_APP_NODE_ENV == "production") {
      environment = "weatherapp";
    } else {
      environment = "";
    }

    return (
      <div>
        <LocationSearch
          handleSearchChange={this.handleSearchChange.bind(this)}
          handleSearch={this.handleSearch.bind(this)}
          location_input={this.location_input.bind(this)}
        />
        <div className="mt-24">
          <Router basename={process.env.PUBLIC_URL}>
            <Route
              exact
              path={`/`}
              render={(props) => (
                <Home {...props} locationResults={location_results} />
              )}
            />
            <Route
              path={`/location/:lat/:lon`}
              render={(props) => (
                <WeatherByLocation
                  {...props}
                  locationResults={location_results}
                />
              )}
            />
          </Router>
        </div>
      </div>
    );
  }
}
