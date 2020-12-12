import React, { Component } from "react";
import Overview from "../overview/overview";
import Preview from "../preview/preview";
import "./project.css";

class Project extends Component {
  state = {};
  render() {
    const { project } = this.props;
    return (
      <div className="project">
        <Overview
          key={project.id}
          name={project.name}
          description={project.description}
          tags={project.tags}
        ></Overview>
        <Preview key={project.id} link={project.link}></Preview>
      </div>
    );
  }
}

export default Project;
