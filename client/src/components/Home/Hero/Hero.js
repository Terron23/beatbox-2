import React, { Component } from "react";
import Herobg from "./sub_components/Herobg";
import { Carousel } from 'react-responsive-carousel';
import bg1 from "./images/01.jpg";
import navImg from "./images/sh_logo.png";
import "./css/hero.css";
//Wrapper for Component


const Wrapper = ({ children }) => (
  <section className="welcome-area">
    <div className="welcome-slides">{children}</div>
  </section>
);

export default class Hero extends Component {

  
 
  
  cycleImages = (container, step) => {
    const images = [`${bg1}`,`${navImg}`];
    const node = document.getElementsByClassName("single-welcome-slide");
    container=node;
    step=2000;
      images.forEach((image, index) => (
      setTimeout(() => {
          container.style.backgroundImage = `url(${image})`  
      }, step * (index + 1))
    ))
    setTimeout(() => this.cycleImages(container, step), step * images.length)
  }
  
  render() {
    return (
      <Wrapper>
     
        <Herobg bg={bg1} logo={navImg} />
       
  
      </Wrapper>
    );
  }
}
