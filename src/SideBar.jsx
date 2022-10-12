import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="SideBar-content">
          <h1> <span className="highlight">Dad</span> Jokes   </h1>
          <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f602.png" alt="emjo img"  />
          {/* <button className="SideBar-btn">New Jokes</button> */}
        </div>
      </div>
    );
  }
}
