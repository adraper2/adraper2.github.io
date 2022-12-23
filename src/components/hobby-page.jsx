import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class HobbyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {md: null}
  }
  
  // from https://stackoverflow.com/questions/57654378/dynamically-loading-markdown-file-in-react
  async componentDidMount() {
    const hobbyFileName = this.props.hobby.hobbyLink; // or however you get your articleId
    const file = await import(`../content/hobbies/${hobbyFileName}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({ md: text })
  }


  render() {
    const {
      hobbyImage,
      hobbyTitle,
      hobbyDesc,
      hobbyLink
    } = this.props.hobby;

    return (
      <div>
        <br />
        <h2 className="blog-page-title">{hobbyTitle}</h2>
        <hr className="hr-class" />
        <br />
        <img
          src={require(`../images/${hobbyImage}`)}
          className=" rounded border project-page-image"
        />
        <br />
        <ReactMarkdown children={this.state.md} />
        <br />
      </div>
    );
  }
}

export default HobbyPage;
