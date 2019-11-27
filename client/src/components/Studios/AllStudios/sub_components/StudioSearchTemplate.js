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
    className="single-room-area d-flex align-items-center mb-50 wow fadeInUp"
    data-wow-delay="100ms"
  >
    <div className="room-thumbnail">
      <img src={studioImage} alt={studioName} />
    </div>

    <div className="room-content">
      <h2>{studioName}</h2>
      <h4>
        ${price}.00 <span>/ hr</span>
      </h4>
      <div className="">
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
        {/* <h6>
          Capacity: <span>Max person {guest}</span>
        </h6> */}
      </div>
      <Link to={`/single-studio/${_id}`} className="btn view-detail-btn">
        View Details{" "}
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  </div>
);

export default StudioSearchTemplate;
