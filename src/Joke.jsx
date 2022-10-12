import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const modes = {
  exteremlyBadJoke: {
    color:'#baffa3',
    imgSrc: 'https://cdn.pixabay.com/photo/2020/12/25/22/38/face-5860295_960_720.png'
  },
  awfulJoke: {
    color:'#9dd88a',
    imgSrc: 'https://cdn.pixabay.com/photo/2018/12/21/07/52/graphic-3887416_960_720.png'
  },
  badJoke: {
    color:'#7cac6d',
    imgSrc: 'https://cdn.pixabay.com/photo/2021/08/24/04/55/emoji-6569495_960_720.png'
  },
  default: {
    color: '#103c3d',
    imgSrc : 'https://cdn.pixabay.com/photo/2019/11/14/03/22/arrogant-4625238_960_720.png'
  },
  happy: {
    color: '#2bd0d3',
    imgSrc : 'https://cdn.pixabay.com/photo/2019/02/19/23/35/graphic-4008068_960_720.png'
  },
  joy: {
    color: '#31fcff',
    imgSrc: 'https://cdn.pixabay.com/photo/2017/10/10/15/50/emoji-2837680_960_720.png'
  }, 
  extermeHappnies: {
    color: 'orange',
    imgSrc: 'https://cdn.pixabay.com/photo/2020/06/04/12/56/emoji-5258621_960_720.png'
  }
  
}

export default function Joke(props) {

  function changeMode(rate) {
    if(rate < -9 && rate > -15) {
      return modes.exteremlyBadJoke;
    }
    if(rate < -4 && rate > -10) {
      return modes.awfulJoke;
    }
    if(rate < 0 && rate > -5) {
      return modes.badJoke
    }
    if(rate === 0) {
      return modes.default;
    } 
     if(rate > 0 && rate < 5) {
      return modes.happy;
    } 
    if(rate > 4 && rate < 10) {
      return modes.joy
    }  if(rate > 9 && rate < 15) {
      return modes.extermeHappnies;
    }
      
  }





  return (
    <div className="Joke">
      <div className="Joke-rate">
        <div className="Joke-buttons">
        <button onClick={() => props.increaseRate(props.index)} className="up-arrow">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p className="rate-number" style={{border: `3px solid ${changeMode(props.jokeRate).color}`}}>{props.jokeRate}</p>

        {/* <p className="rate-number" >{props.jokeRate}</p> */}

        <button onClick={() => props.decreaseRate(props.index)} className="down-arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <p className="Joke-text">{props.jokeText}</p>
        </div>


        <img className="Joke-img" src={changeMode(props.jokeRate).imgSrc} alt="" />
      </div>
    </div>
  );
}
