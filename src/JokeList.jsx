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
      const jokeObject = {
        jokeText: response.data.joke,
        jokeRate: 0,
      };
      jokesArr.push(jokeObject);
    }
    this.setState({ jokes: jokesArr });
  }

  increaseRate = (jokeIndex) => {
    this.setState((prevState) => {
      return [(prevState.jokes[jokeIndex].jokeRate += 0.5)];
    });
    this.sortJokes();
  };
  decreaseRate = (jokeIndex) => {
    this.setState((prevState) => {
      return [(prevState.jokes[jokeIndex].jokeRate -= 0.5)];
    });
    this.sortJokes();
  };

  sortJokes() {
    this.setState((prevState) => {
      return prevState.jokes.sort((a,b) => {
        if (a.jokeRate < b.jokeRate) return 1;
        if(a.jokeRate > b.jokeRate ) return -1;  
  
      })
    })
  }

  render() {
    // const sortedJokes = this.state.jokes.sort((a,b) => {
    //   if (a.jokeRate < b.jokeRate) return 1;
    //   if(a.jokeRate > b.jokeRate ) return -1;  

    // })


    const jokesElement = this.state.jokes.map((joke, index) => {

      return (
        <Joke  jokeText={joke.jokeText}   key={index}  jokeRate={joke.jokeRate}
          decreaseRate={this.decreaseRate}    increaseRate={this.increaseRate}   index={index}      />
      );
    });

    return <div className="JokeList">{jokesElement}</div>;
  }
}
