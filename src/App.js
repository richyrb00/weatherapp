import React, { Component, Fragment, useState } from "react";
import Geocode from "react-geocode";
import "./App.css";
import { Line } from "react-chartjs-2";
import moment from "moment";
import "moment-timezone";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_hour: new Date().getHours(),
      search_count: 0,
      data: [],
      weather: [],
      lat: "",
      lng: "",
      location_name: "",
      location_input: "",
      location_input_show: true,
      localtime: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

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
            this.setState({ localtime: data.current.dt });
          })
          .catch(console.log);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  getHourlyTemp = () => {
    let i;
    let hourlyData = this.state.data.hourly;
    let hourlyTempArray = [];
    for (i in hourlyData) {
      hourlyTempArray.push(hourlyData[i].temp);
    }
    return hourlyTempArray;
  };

  getHoursCount(hours) {
    var dt = this.state.localtime;
    console.log("dt", dt);
    var toDate = new Date();
    var fromDate = new Date();
    var fromDate = moment.unix(dt).tz("MST").format("YYYY-MM-DD HH:mm");
    toDate.setTime(toDate.getTime() + hours * 60 * 60 * 1000);
    var result = [];

    while (fromDate <= toDate) {
      result.push(fromDate.getHours());
      // consider using moment.js library to format date

      fromDate.setTime(fromDate.getTime() + 1 * 60 * 60 * 1000);
    }

    return result;
  }

  render() {
    const {
      data = undefined,
      location_name = undefined,
      weather = undefined,
      location_input,
    } = this.state;
    const {
      main,
      clouds,
      coord,
      name,
      sys,
      wind,
      current,
      hourly,
    } = this.state.data;

    console.log("data", data);

    let temp_chart = {
      labels: this.getHoursCount(48),
      datasets: [
        {
          label: "Temperature",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#9b2c2c",
          borderColor: "#9b2c2c",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#9b2c2c",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#c53030",
          pointHoverBorderColor: "#c53030",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.getHourlyTemp(hourly, this.state.localtime),
        },
      ],
    };

    return (
      <div className="App">
        <div
          className={`h-screen w-screen z-50 flex content-center items-center align-center justify-center fixed bg-white ${
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
              <h1 className="text-white text-3xl font-bold mb-2">
                {location_name}
              </h1>
            ) : null}
            {weather.description ? (
              <p className="text-white text-lg">{weather.description}</p>
            ) : null}
            <div className="m-auto mt-6 mb-0 w-full px-6 flex content-center items-center align-center justify-center">
              {weather.icon ? (
                <img
                  src={`images/${weather.icon}.png`}
                  alt={weather.description}
                  className="weather-icon text-center rounded-full bg-white"
                />
              ) : null}
              {current ? (
                <div>
                  <span className="ml-6 text-5xl text-white font-bold">
                    {Math.floor(current.temp)}&#8451;
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </header>
        <main className="flex items-center justify-center">
          <div className="w-fill p-6 md:w-3/6 lg:w-3/6 relative">
            <Line data={temp_chart} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
