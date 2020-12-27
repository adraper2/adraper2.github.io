import React, { Component } from "react";
import Hobby from "./hobby";
import json_hobbies from '../content/hobbies.json'

class Hobbies extends Component {
  state = {
    hobbies: json_hobbies
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._checkHobbies();
    console.log(this.state.hobbies);
  }

  _checkHobbies(){
      this.setState({hobbies: json_hobbies});
  }
  render() {
    return (
      <div className="container">
        <div>
          I have been busy. There are more content updates coming soon.
          <br />
          <br />
        </div>
        <div>
          {this.state.hobbies.map(hobby => {
            if (hobby.id >= 100)
              return <Hobby key={hobby.id} hobby={hobby} />;
          })}
        </div>
        
      </div>
    );
  }
}

export default Hobbies;
