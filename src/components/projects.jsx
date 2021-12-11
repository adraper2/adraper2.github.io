import React, { Component } from "react";
import Project from "./project";
import json_projects from '../content/projects.json'

class Projects extends Component {
  state = {
    projects: json_projects
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._checkProjects();
    console.log(this.state.projects);
  }

  _checkProjects(){
      this.setState({projects: json_projects});
  }

  _checkProjects(){
      this.setState({projects: json_projects});
  }

  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h3>Current:</h3>
        <hr className="hr-class" />
        <div>
          {this.state.projects.map(project => {
            if (project.id >= 200)
              return <Project key={project.id} project={project} />;
          })}
        </div>

      <div style={{ paddingTop: 20 }}>
        <h3>Graduate:</h3>
        <hr className="hr-class" />
        <div>
          {this.state.projects.map(project => {
            if (project.id >= 100 && project.id < 199)
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
      </div>
    );
  }
}

export default Projects;
