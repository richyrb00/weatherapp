import React, { Component, Fragment } from "react";
import LocationSearchResults from "./components/LocationSearchResults";

export default class Home extends Component {
  render() {
    console.log("home props", this.props.locationResults);

    return (
      <Fragment>
        <LocationSearchResults data={this.props.locationResults} />
        <div className="container mx-auto">
          <div>Homepage</div>
        </div>
      </Fragment>
    );
  }
}
