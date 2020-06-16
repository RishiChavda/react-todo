import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    title: ""
  };

  // generic that will add a field name and value to the state
  handleTextChange = e => {
    if (e.target.value.length > 0)
      this.setState({ [e.target.name]: e.target.value });
  };

  enterItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.enterItem} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.handleTextChange}
        />
        <button
          style={{ flex: "1" }}
          className="button btn btn-secondary btn-sm"
        >
          Add
        </button>
      </form>
    );
  }
}
