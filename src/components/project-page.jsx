import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {md: null}
  }

  // from https://stackoverflow.com/questions/57654378/dynamically-loading-markdown-file-in-react
  async componentDidMount() {
    const projectFileName = this.props.project.pageLink; // TODO: move this prop to its own projectMarkdown
    const file = await import(`../content/projects/${projectFileName}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({ md: text })
  }

  render() {
    const {
      projectImage,
      projectTitle,
      projectDesc,
      pageLink
      //projectMarkdownFile
      // old way of storing content
      //contentOne,
      //contentTwo,
      //contentThree,
      //contentFour
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
          <b>Summary:</b> <i>{projectDesc}</i>
        </p>
        <hr />
        <br />
        <ReactMarkdown children={this.state.md} />
        <br />
      </div>
    );
  }
}

export default ProjectPage;
