import React, { Component } from "react";

export default class NewHero extends Component {
  state = {
    name: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log("Submitting form...");
    // console.log(this.state);
    this.props.changeName(this.state.name);
  };

  handleChange = event => {
    // console.log("NEW NAME IS");
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // console.log("PROPS IN NEW HERO", this.props);
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
