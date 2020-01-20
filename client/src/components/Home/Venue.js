import React from "react";
import { Link } from "react-router-dom";
import homeBg from './images/10-accessories-home-studio.jpg'
import yogaBg from './images/yoga-bg.jpeg'
import "./css/venue.css";

const VenueType = ({ img, description, link = "/", bg }) => {
  return (
  
      <div className="col-md-4 venue-card single-service--area" id={bg}>
        <div className="service-content ">

          <Link to={link}>
            <h5>
              <i className={`${img}`}></i> {description}
            </h5>
          </Link>
         
        </div>
      </div>

  );
};

export default () => {
  return (
    <section className="container mb-50 roberto-service-area">
        <div className="row text-center">
      <VenueType img="fa fa-home" description="Home Studios" bg="homeBg"/>
      <VenueType img="fa fa-building-o" description="Bussiness Studios" />
      <VenueType img="fa fa-desktop" description="Online Studios" />
      </div>
    </section>
  );
};
