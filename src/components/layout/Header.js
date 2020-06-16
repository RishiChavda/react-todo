import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          background: "#333333",
          color: "#ffffff",
          padding: "10px",
          textAlign: "center"
        }}
      >
        <h1>
          TODO <span className="badge badge-warning">{this.props.count}</span>
        </h1>
      </header>
    );
  }
}
