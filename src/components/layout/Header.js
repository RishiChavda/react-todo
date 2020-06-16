import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ color: "#ffffff" }}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="/about" style={{ color: "#ffffff" }}>
          About
        </Link>
      </header>
    );
  }
}
