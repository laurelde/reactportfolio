import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./preview.css";

class Preview extends Component {
  render() {
    console.log("Preview RENDERED");
    console.log(this.props);
    return (
      <div>
        <img></img>
        <Link to={`/projects/${this.props.id}`} className="view-link">
          <button>View Project</button>
        </Link>
      </div>
    );
  }
}

export default Preview;
