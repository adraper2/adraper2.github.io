import React, { Component } from "react";
import Project from "./project";
import reactLogo from "../logo.svg";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        projectImage: { reactLogo },
        projectTitle: "Test Project 1",
        projectDesc:
          "This is a test description of what a project might look like on this page using components.",
        projectLink: "https://github.com/adraper2"
      },
      {
        id: 2,
        projectImage: { reactLogo },
        projectTitle: "Test Project 2",
        projectDesc:
          "This is a test description of what a project might look like on this page using components.",
        projectLink: "https://github.com/adraper2"
      },
      {
        id: 3,
        projectImage: { reactLogo },
        projectTitle: "Test Project 3",
        projectDesc:
          "This is a test description of what a project might look like on this page using components.",
        projectLink: "https://github.com/adraper2"
      },
      {
        id: 4,
        projectImage: { reactLogo },
        projectTitle: "Test Project 4",
        projectDesc:
          "This is a test description of what a project might look like on this page using components.",
        projectLink: "https://github.com/adraper2"
      },
      {
        id: 5,
        projectImage: { reactLogo },
        projectTitle: "Test Project 5",
        projectDesc:
          "This is a test description of what a project might look like on this page using components.",
        projectLink: "https://github.com/adraper2"
      }
    ]
  };

  render() {
    return (
      <div className="projects-container">
        {this.state.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    );
  }
}

export default Projects;
