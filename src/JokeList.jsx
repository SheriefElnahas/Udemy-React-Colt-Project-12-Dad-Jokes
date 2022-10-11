import React, { Component } from "react";
import axios from "axios";

import Joke from "./Joke";

export default class JokeList extends Component {
  static defaultProps = {
    jokesNum: 3,
  };

  state = { jokes: [] };

  async componentDidMount() {
    let jokesArr = [];

    for (let i = 0; i < this.props.jokesNum; i++) {

      const response = await axios.get(" https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
      jokesArr.push(response.data.joke)
    }
    this.setState({jokes: jokesArr})

  
  }

  
  render() {
    const jokesElement = this.state.jokes.map((joke) => {
      return < Joke jokeText={joke} key={joke} />
    })
    return (
      <div className="card-right-side">
        {jokesElement}
      </div>
    );
  }
}
