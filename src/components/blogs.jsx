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
    this._checkHobbies();
    console.log(this.state.blogs);
  }

  _checkHobbies(){
      this.setState({blogs: json_blogs});
  }

  render() {
    return (
      <div className="container">
        <div>
          Content updates coming soon!
          <br/>
          <br/>
        </div>
        <div>
          {this.state.blogs.map(blog => {
            if (blog.id >= 100)
              return <Blog key={blog.id} blog={blog} />;
          })}
        </div>
        
      </div>
    );
  }
}

export default Blogs;
