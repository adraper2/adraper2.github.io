import React, { Component } from "react";

class Project extends Component {
  render() {
    const {
      projectImage,
      projectTitle,
      projectDesc,
      projectLink
    } = this.props.project;
    return (
      <div className="project-box">
        <img src={projectImage} className="project-image" alt="project" />
        <h4>{projectTitle}</h4>
        <p>{projectDesc}</p>
        <a href={projectLink}>Link to project.</a>
      </div>
    );
  }
}

export default Project;
