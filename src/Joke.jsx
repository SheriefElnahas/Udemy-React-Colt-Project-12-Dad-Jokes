import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Joke(props) {

  return (
    <div className="Joke">
      <div className="Joke-rate">
        <button onClick={() => props.increaseRate(props.index)} className="up-arrow">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p className="rate-number">{props.jokeRate}</p>

        <button onClick={() => props.decreaseRate(props.index)} className="down-arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <p className="Joke-text">{props.jokeText}</p>
      </div>
    </div>
  );
}
