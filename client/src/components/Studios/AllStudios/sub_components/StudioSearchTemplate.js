import React, { Component } from "react";
import { Link } from "react-router-dom";

const StudioSearchTemplate = ({
  studioName,
  _id,
  studioImage,
  price,
  guest,
  studioType,
  city,
  availibility
}) => (
  <div
    className="single-room-area d-flex align-items-center mb-50"
  >
    <div className="room-thumbnail">
    <Link to={`/single-studio/${_id}`} >
      <img src={studioImage} alt={studioName} className="search-img"/>
      </Link>
    </div>

    <div className="room-content">
      <h2>{studioName}</h2>
      <h4>
        ${price}.00 <span>/ hr</span>
      </h4>
      <div className="studio-content">
        <h6>
          Studio Type: <span>{studioType}</span>
        </h6>
        <h6>
          Hours of Operation:{" "}
          {availibility.map(hours => (
            <li>
              <span>
                {hours.day} :{hours.starttime} - {hours.endtime}
                {}
              </span>
            </li>
          ))}
        </h6>
        <h6>
          Location: <span>{city}</span>
        </h6>
      </div>
      <Link to={`/single-studio/${_id}`} className="btn view-detail-btn">
        View Details{" "}
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  </div>
);

export default StudioSearchTemplate;
