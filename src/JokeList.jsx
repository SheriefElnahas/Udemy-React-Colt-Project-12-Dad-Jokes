import React, { Component } from "react";

import Joke from "./Joke";

export default class JokeList extends Component {
  render() {
    return (
      <div className="card-right-side">

        <Joke />
        <Joke />
        <Joke />
      </div>
    );
  }
}
