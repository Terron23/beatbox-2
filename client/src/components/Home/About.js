import React, { Component } from "react";
import bg1 from "../../images/01.jpg";
import phoneImg from './images/iphone.png';


const ImageGallery = () => {
  return (
    <div class="col-12 col-lg-6">
      <div
        class="about-us-thumbnail mb-100 wow fadeInUp"
        data-wow-delay="700ms"
      >
        <div class="row no-gutters">
          <div class="col-12">
            <div class="single-thumb">
              <img
                src={`${phoneImg}`}
                alt="i-phone image"
                style={{ width:"100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class About extends Component {
  render() {
    return (
      <div class="container mt-100">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <div class="section-heading wow fadeInUp" data-wow-delay="100ms">
              <h6>Find, Book , Go</h6>
              <h2>
                How <br />
                It Works
              </h2>
            </div>
            <div class="about-us-content mb-100">
              <h5 class="wow fadeInUp" data-wow-delay="300ms">
               <ul>
                 <li><span className="phone-text">Find</span> studios of all types. Music, Art, Dance... whatever your creative heart desires. Then...</li>
                 <li><span className="phone-text">Book </span>the date and times you will like to attend and</li>
                 <li><span className="phone-text">G0</span>... Thats It!</li>
               </ul>
              </h5>
             
            </div>
          </div>
          <ImageGallery />
        </div>
      </div>
    );
  }
}

const styles = {
  background: {
    backgroundImage: `url(${bg1})`
  }
};
