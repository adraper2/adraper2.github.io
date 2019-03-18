import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  state = {
    projects: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let myProjects = this.props.state.projects;
    this.setState({
      projects: myProjects
    });
  }

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
