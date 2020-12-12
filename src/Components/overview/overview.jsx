import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { name, description, tags } = this.props;
    return (
      <div>
        <h2> {name} </h2>
        <p> {description} </p>
        <ul> {tags} </ul>
      </div>
    );
  }
}

export default Overview;
