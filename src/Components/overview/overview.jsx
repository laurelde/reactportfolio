import React, { Component } from "react";
import "./overview.css";

class Overview extends Component {
  render() {
    const { name, description, tags, themeColor } = this.props;
    const tagNames = tags.map((tag) => <li key={tag}>{tag}</li>);
    return (
      <div>
        <h1 style={{ backgroundColor: { themeColor } }}> {name} </h1>
        <h2> {description} </h2>
        <ul>{tagNames}</ul>
      </div>
    );
  }
}

export default Overview;
