import React, { Component, Fragment, useState } from "react";
import Geocode from "react-geocode";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_count: 0,
      data: [],
      weather: [],
      lat: "",
      lng: "",
      location_name: "",
      location_input: "",
      location_input_show: true,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("state location name", this.state.location_input);
    Geocode.setApiKey(`${process.env.REACT_APP_GOOGLEAPI}`);

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    // Geocode.setRegion("gb");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    // Get latidude & longitude from address.
    Geocode.fromAddress(this.state.location_input).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ lat: lat });
        this.setState({ lng: lng });
        this.setState({
          location_name: response.results[0].address_components[0].long_name,
        });
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHERAPI}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => {
            this.setState({ data: data });
            this.setState({ weather: data.current.weather[0] });
            this.setState({ location_input_show: false });
            this.setState({ search_count: this.state.search_count + 1 });
          })
          .catch(console.log);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    const {
      data = undefined,
      location_name = undefined,
      weather = undefined,
      location_input,
    } = this.state;
    const { main, clouds, coord, name, sys, wind } = this.state.data;

    console.log("data", this.state.data);
    console.log("weather", this.state.weather);

    return (
      <div className="App">
        <div
          className={`h-screen w-screen z-50 flex content-center items-center align-center justify-center ${
            this.state.location_input_show ? null : "hidden"
          }`}
        >
          <div className="w-full md:w-6/12 lg:w-3/12 mx-6">
            <h2 className="text-2xl mb-6">Enter Location</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="location_input"
                value={this.state.location_input}
                onChange={this.handleChange}
                className="text-black bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </form>
          </div>
        </div>
        <header>
          <div className="bg-blue-900 py-16">
            {location_name ? (
              <h1 className="text-white text-2xl mb-6">{location_name}</h1>
            ) : null}
            {weather.description ? (
              <p className="text-white text-lg">{weather.description}</p>
            ) : null}

            {weather.icon ? (
              <img
                src={`images/${weather.icon}.png`}
                alt={weather.description}
                className="weather-icon text-center rounded-full bg-white p-6 w-32 h-32"
              />
            ) : null}
          </div>
        </header>
        <main></main>
      </div>
    );
  }
}

export default App;
