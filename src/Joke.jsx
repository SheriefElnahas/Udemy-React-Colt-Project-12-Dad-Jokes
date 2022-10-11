import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Joke() {
  return (
    <div className="Joke">
      <div className="Joke-rate">
        <button className="up-arrow">
        <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p className="rate-number">10</p>
    
        <button className="down-arrow">
        <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <p className="Joke-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laudantium.</p>

      </div>
    </div>
  );
}
