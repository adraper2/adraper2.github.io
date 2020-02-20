import React, { Component } from "react";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(this.props.state.project);
  }

  render() {
    const {
      projectImage,
      projectTitle,
      projectDesc,
      contentOne,
      contentTwo,
      contentThree,
      contentFour
    } = this.props.project;

    return (
      <div>
        <img
          src={require(`../images/${projectImage}`)}
          className=" rounded border project-page-image"
        />
        <br />
        <h3 className="project-page-title">{projectTitle}</h3>
        <br />
        <p>
          <b>Brief overview:</b> <i>{projectDesc}</i>
        </p>
        <h4>In-depth Overview:</h4>
        <hr className="hr-class" />
        {contentOne}
        <br />
        {contentTwo}
        <br />
        {contentThree}
        <br />
        {contentFour}
      </div>
    );
  }
}

export default ProjectPage;
