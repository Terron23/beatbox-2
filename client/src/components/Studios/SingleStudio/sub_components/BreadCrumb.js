import React from "react";
import artImg from '../img/art.jpg'
import photoImg from '../img/photo.jpg'
import studioImg from '../img/studio.jpg'

const BreadCrumb = ({ studioName, price, image, studiotype }) => {
  return (
    <div
      className="breadcrumb-area bg-img bg-overlay jarallax"
      style={
      studiotype.toLowerCase()==="art" 
      ? 
      styles.artStyle
      : 
      studiotype.toLowerCase()==="recording - music"
      ?
      styles.studioStyle
      :
      {backgroundImage:"url(" + image  + ")" }}
      >
      <div className="container h-100">
        <div className="row h-100 align-items-end">
          <div className="col-12">
            <div className="breadcrumb-content d-flex align-items-center justify-content-between pb-5">
              <h2 className="room-title">
              {studioName} 
              <br />
              <small>{studiotype}</small></h2>
              <h2 className="room-price">
                ${price} <span>/ Per hour</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles={
  artStyle:{
    backgroundImage: "url(" + artImg  + ")" 
  },
  photoStyle:{
    backgroundImage: "url(" + photoImg  + ")" 
  },
  studioStyle:{
    backgroundImage: "url(" + studioImg  + ")" 
  },

}

export default BreadCrumb;
