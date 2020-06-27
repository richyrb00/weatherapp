import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    weather: [],
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Knutsford,uk&appid=${process.env.REACT_APP_WEATHERAPI}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data });
        this.setState({ weather: data.weather[0] });
      })
      .catch(console.log);
  }

  render() {
    const { data = undefined } = this.state;
    const { weather = undefined } = this.state;
    console.log("env", process.env.REACT_APP_WEATHERAPI);

    if (data && weather) {
      const { main, clouds, coord, name, sys, wind } = this.state.data;
      console.log("data", this.state.data);
      console.log("weather", this.state.weather);
      return (
        <div className="App" data-api={[process.env.REACT_APP_WEATHERAPI]}>
          <header className="App-header">
            <h1>{name}</h1>

            <p>{this.state.weather.description}</p>

            {this.state.weather.icon ? (
              <img
                src={`images/${this.state.weather.icon}.png`}
                alt={this.state.weather.description}
                className="weather-icon"
              />
            ) : null}
          </header>
          <main></main>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default App;
