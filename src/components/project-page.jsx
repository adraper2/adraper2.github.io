import React, { Component } from "react";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.project);
  }

  render() {
    const { projectImage, projectTitle, projectDesc } = this.props.project;
    return (
      <div>
        <h3>{projectTitle}</h3>
        <img
          src={require(`../images/${projectImage}`)}
          className="project-image rounded border"
        />
        <p>Need to add custom content and formatting still!</p>
      </div>
    );
  }
}

export default ProjectPage;
