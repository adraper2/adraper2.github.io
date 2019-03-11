import React, { Component } from "react";
import Star from "../content/star.svg";
import Commit from "../content/history.svg";
import Fork from "../content/repo-forked.svg";
import axios from "axios";

class Project extends Component {
  state = {
    projectInfo: [],
    projectCommits: []
  };

  componentDidMount() {
    const { projectLink } = this.props.project;
    axios
      .get("https://api.github.com/repos/adraper2/" + projectLink)
      .then(res => {
        this.setState({
          projectInfo: res.data
        });
      });
    axios
      .get(
        "https://api.github.com/repos/adraper2/" + projectLink + "/contributors"
      )
      .then(res => {
        this.setState({
          projectCommits: res.data[0]
        });
      });
  }

  render() {
    const {
      projectImage,
      projectTitle,
      projectDesc,
      projectLink
    } = this.props.project;

    const { projectInfo, projectCommits } = this.state;
    //console.log(projectInfo);
    const githubData = projectInfo.has_projects ? (
      <div className="github_box">
        Written in {projectInfo.language}
        {", "}
        <img className="project_tag" src={Fork} alt="tag" />:{" "}
        {projectInfo.forks_count}{" "}
        <img className="project_tag" src={Star} alt="tag" />:{" "}
        {projectInfo.stargazers_count}{" "}
        <img className="project_tag" src={Commit} alt="tag" />:{" "}
        {projectCommits.contributions}
      </div>
    ) : (
      <div className="github_box">(no repo)</div>
    );

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
          <div className="project-tag-container">
            <a className="project_tag" href="/" style={{ paddingRight: 5 }}>
              [project]
            </a>
            <a
              className="project_tag"
              href={"https://github.com/adraper2/" + projectLink}
              style={{ paddingRight: 5 }}
            >
              [GitHub]
            </a>
            {githubData}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
