import React, { PureComponent } from "react";
import "./Header.css";
import dogImg from "../assets/dog_meme.png";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src={dogImg}
          width="110"
          height="80"
          alt=""
        />
        Emoji Search
        <img
          src={dogImg}
          width="110"
          height="80"
          alt=""
        />
      </header>
    );
  }
}
