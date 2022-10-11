import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div>
          <div className="card-left-side">
        <h1> <span className="highlight">Dad</span>  Jokes</h1>
        <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f602.png" alt="" />
        <button className="jokes-btn">
          New Jokes
          </button>
        </div>
      </div>
    )
  }
}
