import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Heading from "./sub_components/heading";
import dance from "../../images/bg-img/60.png";
import art from "../../images/bg-img/62.jpg";
import photo from "../../images/bg-img/63.jpg";
import { Link } from "react-router-dom";

const CarouselItems = ({
  title,
  subtitle,
  description,
  hover,
  active,
  img
}) => {
  return (
    <div className="projects-slides">
      <div
        className={`single-project-slide active bg-img`}
        onClick={hover}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="project-content">
          <div className="text">
            <h6>{title}</h6>
            <h5> {subtitle}</h5>
          </div>
        </div>

        <div className="hover-effects wow fadeInUp" data-wow-delay="700ms">
          <div className="text">
            <h6>{title}</h6>
            <h5>{subtitle}</h5>
            <p>{description}</p>
          </div>
          <Link to={`/search-studio/${title}`} className="btn project-btn">
            Discover Now{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default class StudioType extends Component {
  render() {
    return (
      <section
        className="roberto-project-area"
        style={{ backgroundColor: "#0e2737" }}
      >
        <hr />
        <Heading
          title="Indulge Your Passion"
          color="white"
          subtitle="Find the Studio For You"
        />

        <OwlCarousel className="owl-theme" loop margin={2}>
          <CarouselItems
            title="Dance"
            description="Practice your moves."
            img={dance}
          />

          <CarouselItems
            title="Photography"
            description="Hold photo shoots like a boss."
            img={photo}
          />
          <CarouselItems
            title="Art"
            description="Paint, sketch and embrace your artistic side."
            img={art}
          />
        </OwlCarousel>
      </section>
    );
  }
}
