import React from "react";

const Herobg = ({ bg, logo }) => {
  return (
    <div
      className="single-welcome-slide bg-img bg-overlay animateOut animateIn"
      style={{ backgroundImage: `url(${bg})` }}
    >
     
      <div className="welcome-content h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="welcome-text text-center">
                <h6 data-animation="fadeInUp" data-delay="200ms">
                
                </h6>
                <h2 data-animation="fadeInUp" data-delay="500ms">
                <img src={logo} width="25%" alt={`Studio Hunt Main bg pic`}/>
                </h2>
                <a
                  href="/search-studio"
                  className="btn roberto-btn btn-2"
                  data-animation="fadeInUp"
                  data-delay="800ms"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobg;
