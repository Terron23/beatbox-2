import React, { Component } from "react";
import Herobg from "./sub_components/Herobg";
import "./css/hero.css";
import bg1 from "./images/01.jpg";
import navImg from "./images/sh_logo.png";

//Wrapper for Component
const Wrapper = ({ children }) => (
  <section className="welcome-area">
    <div className="welcome-slides">{children}</div>
  </section>
);

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Herobg bg={bg1} logo={navImg} />
      </Wrapper>
    );
  }
}
