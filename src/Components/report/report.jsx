import React, { Component } from "react";
import Header from "../header/header";

class Report extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <h1>Report FOR {this.props.id} </h1>
      </div>
    );
  }
}

export default Report;
