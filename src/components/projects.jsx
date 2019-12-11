import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  state = {
    projects: [],
    grad_projects: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let myProjects = this.props.state.projects;
    let gradProjects = this.props.state.grad_projects;
    this.setState({
      projects: myProjects,
      grad_projects: gradProjects
    });
  }

  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h3>Graduate:</h3>
        <hr className="hr-class" />
        <div>
          {this.state.projects.map(project => {
            if (project.id >= 100)
              return <Project key={project.id} project={project} />;
          })}
        </div>

        <div style={{ paddingTop: 20 }}>
          <h3>Undergraduate:</h3>
          <hr className="hr-class" />
          <div className="projects-container">
            {this.state.projects.map(project => {
              if (project.id < 100)
                return <Project key={project.id} project={project} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
