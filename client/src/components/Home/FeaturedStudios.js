import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudio } from "../.././actions";
import Heading from "./sub_components/heading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";


const SingleFeaturedStudio = ({
  bg,
  studiotype,
  price,
  group,
  amenities,
  studioName,
  venue,
  rating,
  id,
  equipment
}) => {
  return (
    <div className="col-md-4 cell">
    <a class="rig-cell" >
        <img class="rig-img" src={bg} />
        <span class="rig-overlay"></span>
        <span class="rig-text">
      
           Studio Nam: {studioName}
            Studio Type: {studiotype}
            Price: {price}
          <Link 
          to={`/single-studio/${id}`}
          className="btn roberto-btn mt-30"
        >
          View Details
        </Link>
       
        </span>
    </a>
</div>
        
     
  );
};

class FeaturedStudios extends Component {
  showStudio = () => {
    return this.props.studio
      .sort((s1, s2) => {
        return s2["price"] - s1["price"];
      })
      .filter((curr, i, arr) => {
        return i <= 5;
      })
      .map(s => {
        return (
          <SingleFeaturedStudio
            key={s._id}
            bg={s.studioImage}
            studiotype={s.studioType}
            price={s.price}
            studioName={s.studioName}
            rating={s.rating.map(star => (
              <i className="icon_star"></i>
            ))}
            group={s.guest}
            id={s._id}
            amenities={s.services}
            equipment={s.equipment}
          />
        );
      });
  };

  render() {
    if (!this.props.studio) {
      window.location.reload();
    }

    return (
      <section className="">
        <Heading
          title="Featured Studios"
          color="black"
          subtitle="View Our Top Rated Studios"
        />
     
     <div id="rig" className="row">
          
            {this.showStudio()}
         </div>
      </section>
    );
  }
}

function mapStateToProps({ studio }) {
  return { studio };
}

export default connect(mapStateToProps, { fetchStudio })(FeaturedStudios);
