import React, { Component, Fragment } from "react";

export default class LocationSearchResults extends Component {
  showLocationCard = (location) => {
    if (location) {
      return (
        <div className="card flex flex-row content-center justify-center p-2 bg-white rounded-lg shadow-2xl m-6 items-center">
          <div className="prod-title flex-grow text-left mx-6">
            <p className="text-2xl uppercase text-gray-900 font-bold align-middle">
              {location.name}, {location.sys.country}
            </p>
          </div>
          <div className="prod-geo flex-grow text-right">
            <p className="uppercase text-sm text-gray-400 align-middle">
              [{location.coord.lat},{location.coord.lon}]
            </p>
          </div>
          <div className="prod-img text-right w-24">
            {location.weather[0].icon ? (
              <img
                src={`${process.env.PUBLIC_URL}/images/${location.weather[0].icon}.png`}
                alt={location.weather[0].description}
                className="w-2/4 mx-auto align-middle"
              />
            ) : null}
          </div>
          <div className="prod-info text-right mx-6">
            <p className="font-bold text-xl align-middle">
              {Math.round(10 * (location.main.temp - 273.15)) / 10}&#8451;
            </p>
          </div>
          <div className="prod-cta text-right mx-6">
            <a
              href={`${process.env.PUBLIC_URL}/#/location/${location.coord.lat}/${location.coord.lon}`}
              className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none align-middle"
            >
              View
            </a>
          </div>
        </div>
      );
    }
  };

  render() {
    if (this.props.data.length) {
      console.log("data on results", this.props.data);
      return (
        <Fragment>
          <div>
            <div className="container mx-auto">
              <h2 className="text-2xl mb-6">
                Results: {this.props.data.length}
              </h2>
              <ul className="flex flex-col mb-4">
                {this.props.data.map((location, index) => (
                  <li className="w-full" key={index}>
                    {this.showLocationCard(location)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fragment>
      );
    }
    return null;
  }
}
