import React, { Component } from "react";

export default class LocationSearch extends Component {
  render() {
    return (
      <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div className="container relative mx-auto px-6">
          <div className="w-full lg:px-6 xl:w-3/4 xl:px-12 mx-auto">
            <div className="relative">
              <form onSubmit={this.props.handleSearch}>
                <span className="algolia-autocomplete">
                  <input
                    id="locationsearch"
                    className="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
                    onChange={this.props.handleSearchChange}
                    type="text"
                    placeholder="Search Location"
                    spellCheck="false"
                    role="search"
                    aria-expanded="false"
                    aria-label="search input"
                    aria-owns="algolia-autocomplete-listbox-0"
                    dir="auto"
                  />
                </span>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                  <svg
                    className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
