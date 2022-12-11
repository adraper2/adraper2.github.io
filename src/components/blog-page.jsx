import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {md: null}
  }
  
  // from https://stackoverflow.com/questions/57654378/dynamically-loading-markdown-file-in-react
  async componentDidMount() {
    const blogFileName = this.props.blog.blogMarkdownFile; // or however you get your articleId
    const file = await import(`../content/blog_posts/${blogFileName}`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({ md: text })
  }
  

  render() {
    const {
      blogImage,
      blogTitle,
      blogDesc,
      blogLink,
      blogMarkdownFile
    } = this.props.blog;

    return (
      <div>
        <br />
        <h2 className="blog-page-title">{blogTitle}</h2>
        <hr className="hr-class" />
        <br />
        <img
          src={require(`../images/${blogImage}`)}
          className=" rounded border project-page-image"
        />
        <br />
        <ReactMarkdown children={this.state.md} />
        <br />
      </div>
    );
  }
}

export default BlogPage;
