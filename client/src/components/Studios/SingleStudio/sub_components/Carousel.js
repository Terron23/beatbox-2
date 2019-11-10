import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    let { img } = this.props;
    return (
      <div className="single-room-details-area mb-50">
        <div className="room-thumbnail-slides mb-50">
          <div
            id="room-thumbnail--slide"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="" />
              </div>
            </div>

            <ol className="carousel-indicators">
              <li
                data-target="#room-thumbnail--slide"
                data-slide-to="0"
                className="active"
              >
                <img src={img} className="d-block w-100" alt="" />
              </li>
              <li data-target="#room-thumbnail--slide" data-slide-to="1">
                <img src={img} className="d-block w-100" alt="" />
              </li>
              <li data-target="#room-thumbnail--slide" data-slide-to="2">
                <img src={img} className="d-block w-100" alt="" />
              </li>
              <li data-target="#room-thumbnail--slide" data-slide-to="3">
                <img src={img} className="d-block w-100" alt="" />
              </li>
              <li data-target="#room-thumbnail--slide" data-slide-to="4">
                <img src={img} className="d-block w-100" alt="" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
