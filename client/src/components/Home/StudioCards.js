import React, { Component } from "react";
import Schedule from "../Schedule";
import Typist from "react-typist";
import Navbar from "./Nav/Nav";
import TopNav from "./Nav/TopNav";
import Hero from "./Hero";

const Cards = ({ img, title }) => {
  return (
    <div
      className="single-service--area mb-100 wow fadeInUp"
      data-wow-delay="100ms"
    >
      <i className={img} style={{ fontSize: "70px", color: "#1cc3b2" }}></i>
      <h5>{title}</h5>
    </div>
  );
};

const SectionHeader = ({ children }) => {
  return (
    <div className="roberto-service-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-content d-flex align-items-center justify-content-between">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class StudioCards extends Component {
  render() {
    return (
      <SectionHeader>
        <Cards title="Recording Studio" img="fa fa-microphone" />

        <Cards title="Dance" img="fa fa-arrows-alt" />
        <Cards title="Art" img="fa fa-paint-brush" />
        <Cards title="Photography" img="fa fa-camera" />
      </SectionHeader>
    );
  }
}
