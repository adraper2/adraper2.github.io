import React, { Component } from "react";
import Blog from "./blog";
import json_blogs from '../content/blogs.json'

class Blogs extends Component {
  state = {
    blogs: json_blogs
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._checkBlogs();
    console.log(this.state.blogs);
  }

  _checkBlogs(){
      this.setState({blogs: json_blogs});
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.blogs.map(blog => {
              return <Blog key={blog.id} blog={blog} />;
          })}
        </div>
        
      </div>
    );
  }
}

export default Blogs;
