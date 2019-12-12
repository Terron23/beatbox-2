import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudio } from "../.././actions";
import Heading from "./sub_components/heading";
import { Link } from "react-router-dom";
import './css/feature.css'


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
   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
   
      <Link to={`/single-studio/${id}`}>
        
       
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="hovereffect">
    <img src={`${bg}`} className="gallery-img image-responsive"/>
        <div className="overlay">
        <Link to={`/single-studio/${id}`} className="info align-self-center">
          View Details
        </Link>
        </div>
    </div>
</div>
</Link>

       <div className="row text-muted">
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12"> 
      <span className="feature-name">{studioName}</span></div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 feature-price">{price}.00/hr</div>
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12"> {studiotype}</div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">{venue}</div>
      </div> 
    
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

    return (
      <section className="feature-section">
        <Heading
          title="Featured Studios"
          color="black"
          subtitle="View Our Top Rated Studios"
        />
     <div className="container">
     <div className="row ">
          
            {this.showStudio()}
         </div>
         </div>
      </section>
    );
  }
}

function mapStateToProps({ studio }) {
  return { studio };
}

export default connect(mapStateToProps, { fetchStudio })(FeaturedStudios);
