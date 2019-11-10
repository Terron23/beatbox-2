import React, { Component } from "react";
import bg1 from "../../images/01.jpg";


const ImageGallery = () => {
  return (
    <div class="col-12 col-lg-6">
      <div
        class="about-us-thumbnail mb-100 wow fadeInUp"
        data-wow-delay="700ms"
      >
        <div class="row no-gutters">
          <div class="col-6">
            <div class="single-thumb">
              <img src="img/bg-img/56.jpeg" alt="" />
            </div>
            <div class="single-thumb">
              <img src="img/bg-img/57.jpg" alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="single-thumb">
              <img
                src="img/bg-img/58.jpg"
                alt=""
                style={{ width: "400px", height: "400px" }}
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
              <h6>About Us</h6>
              <h2>
                Welcome to <br />
                Studio Hunt
              </h2>
            </div>
            <div class="about-us-content mb-100">
              <h5 class="wow fadeInUp" data-wow-delay="300ms">
                The Worlds number one spot for creatives to bring their ideas to
                life. Whether recording music or looking for a place to sip &
                paint find a studio that meets your needs.
              </h5>
              <p class="wow fadeInUp" data-wow-delay="400ms">
                Founder: <span>Terron M. Johnson</span>
              </p>
              <img
                src="img/core-img/signature.png"
                alt=""
                class="wow fadeInUp"
                data-wow-delay="500ms"
              />
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
