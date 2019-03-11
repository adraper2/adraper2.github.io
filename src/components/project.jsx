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
        <img
          src={require(`../images/${projectImage}`)}
          className="project-image"
          alt="project"
        />
        <div className="project-subbox">
          <h4>{projectTitle}</h4>
          <p>{projectDesc}</p>
          <a href="/" style={{ paddingRight: 5 }}>
            [project]
          </a>
          <a href={projectLink}>[GitHub]</a>
        </div>
      </div>
    );
  }
}

export default Project;
