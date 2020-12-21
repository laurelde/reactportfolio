import React, { Component } from "react";
import "./projects.css";
import Header from "../header/header";
import Project from "../project/project";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

class Projects extends Component {
  state = {
    projects: [
      {
        id: "classify-app",
        name: "Classify App",
        description:
          "Mobile app connecting students with local classes, providing exposure to new fields without the commitment of semester-long courses.",
        tags: [
          "UI/UX Design",
          "Persona Creation",
          "Storyboarding Sketching",
          "Wireframing",
          "Prototyping",
          "Usability Testing",
        ],
        themeColor: "purple",
      },
      {
        id: "hdc-app",
        name: "Hagerty HDC App",
        description:
          "Connecting an overlooked user group to a company's developing business structure and culture.",
        tags: [
          "UX Design",
          "Persona Creation",
          "Wireframing",
          "Prototyping",
          "Business Analysis",
        ],
        themeColor: "blue",
      },
      {
        id: "cellport",
        name: "CellPort Software",
        description:
          "Connecting an overlooked user group to a company's developing business structure and culture.",
        tags: [
          "UX Design",
          "Persona Creation",
          "Wireframing",
          "Prototyping",
          "Business Analysis",
        ],
        themeColor: "orange",
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <>
        <Header />
        <Carousel interval={99999}>
          {projects.map((project) => (
            <Carousel.Item className="carousel-item">
              <Project
                className="project-slide d-block"
                key={project.id}
                project={project}
              ></Project>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
}

export default Projects;
