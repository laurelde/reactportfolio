import React, { Component } from "react";
import Header from "../header/header";
import Project from "../project/project";

class Projects extends Component {
  state = {
    projects: [
      {
        id: "1",
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
        link: "classify",
      },
      {
        id: "2",
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
        link: "hdc",
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <>
        <Header />
        <div>
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
