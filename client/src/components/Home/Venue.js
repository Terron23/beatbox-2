import React from "react";
import { Link } from "react-router-dom";
import "./css/venue.css";

const VenueType = ({ img, description, link = "/" }) => {
  return (
    <div className="row text-center">
      <div className="col-12 venue-card single-service--area">
        <div className="service-content d-flex align-items-center justify-content-between">
          <Link to={link}>
            <h5>
              <i className={`${img}`}></i> {description}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <section className="container mb-50 roberto-service-area">
      <VenueType img="fa fa-home" description="Home Studios" />
      <VenueType img="fa fa-building-o" description="Bussiness Studios" />
      <VenueType img="fa fa-desktop" description="Online Studios" />
    </section>
  );
};
