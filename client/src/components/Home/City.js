import React, { Component } from "react";
import Heading from "./sub_components/heading";
import { Link } from "react-router-dom";
import './css/city.css';

const CityTemplate = ({ title, img }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="single-post-area mb-50 wow fadeInUp"
        data-wow-delay="700ms"
      >
        <Link to={`/search-studio//${title}`}>
          <img src={img} alt="" className="city-img"/>
        </Link>

        <div className="post-meta">
          <Link to={`/search-studio//${title}`} className="post-date">
            {title}
          </Link>
        </div>

        <Link to={`/search-studio//${title}`} className="post-title">
          Featured Studios in {title}
        </Link>
        <Link to={`/search-studio//${title}`} className="btn continue-btn">
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default class City extends Component {
  render() {
    return (
      <section className="roberto-blog-area">
        <div className="container">
          <Heading
            title={"Explore"}
            subtitle="Find & Book Studios At Your Convience"
          />

          <div className="row">
            <CityTemplate title="NYC" img={"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_720,q_75,w_1400/v1/clients/newyorkcity/Skyline_Manhattan_Bridge_Brooklyn_Manhattan_NYC_Julienne_Schaer_022_007885f9-2552-464f-9c78-12b4082b71c2.jpg"} />

            <CityTemplate title="London" img={"http://yourdream.s3.amazonaws.com/media/cache/60/66/6066a0afd389471a1d1fe505e7a14031.jpg"} />

            <CityTemplate title="Philadeliphia" img={"https://whyy.org/wp-content/uploads/2018/05/city-hall-profilex1200-768x432.jpg"} />
          </div>
        </div>
      </section>
    );
  }
}
