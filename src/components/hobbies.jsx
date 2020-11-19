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

  _checkHobbies(){
      this.setState({hobbies: json_hobbies});
  }
  render() {
    return (
      <div className="container">
        <div>
          Hello! You made it to my newest page. Sorry, I'm not quite finished
          with this one yet... if you cannot already tell.
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
