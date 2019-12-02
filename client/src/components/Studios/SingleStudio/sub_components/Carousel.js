import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    let { img, thumbnails } = this.props;
    return (
      <div className="single-room-details-area mb-50">
        <div className="room-thumbnail-slides mb-50">
          <div
            id="room-thumbnail--slide"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
          
              {thumbnails.map((studio, i)=>{
                return (
                <div className={`carousel-item ${i<1 ? "active": ""}`} style={{"width": "730px", "height":"430px"}}>
                <img src={studio} className="d-block w-100 img" alt="" />
              </div>)
              })}

            
            </div>

            <ol className="carousel-indicators">
           

            {thumbnails.map((studio, i)=>{
                return (<li style={{"width": "45px", "height":"90px"}}
                  data-target="#room-thumbnail--slide"
                  data-slide-to={i}
                  className="active"
                >
                  <img src={studio} className="d-block w-100" alt="" style={{"width": "45px", "height":"29px"}}/>
                </li>)
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
