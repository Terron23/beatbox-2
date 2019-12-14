import React, { Component } from "react";
import Heading from "./sub_components/heading";
import dance from "./images/60.png";
import art from "./images/62.jpg";
import photo from "./images/63.jpg";
import viewAll from './images/sh_logo.png'
import { Link } from "react-router-dom";

const CarouselItems = ({
  title,
  subtitle,
  description,
  hover,
  link,
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

        <div className="hover-effects text-center" data-wow-delay="700ms">
          <div className="text">
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <p>{description}</p>
          </div>
          <Link to={`/search-studio/${link}`} className="btn project-btn text-center">
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
    let {width} =this.props
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

     
          <CarouselItems
            title="Dance"
            description="Practice your moves."
            img={dance}
            link={'Dance'}
          />

          <CarouselItems
            title="Photography"
            description="Hold photo shoots like a boss."
            img={photo}
            link={'Photography'}
          />
          <CarouselItems
            title="Art"
            description="Paint, sketch and embrace your artistic side."
            img={art}
            link={'Art'}
          />

            <CarouselItems
            title="View All"
            description="View All of Our Studios"
            img={viewAll}
            link=""
          />
   
      </section>
    );
  }
}
