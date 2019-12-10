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
    <div className="col-md-4 feature-images">
      <Link to={`/single-studio/${id}`}>
        
        <img src={`${bg}`} className="feat-img" />

      <div className="middle">
      <div className="text"><button className="btn btn-primary roberto-btn">View Details</button></div>
       </div>
       </Link>

      <div className="row feature-text text-muted">
      <div className="col-md-8"> <span className="feature-name">{studioName}</span></div>
      <div className="col-md-4 feature-price">{price}.00/hr</div>
      <div className="col-md-8 "> {studiotype}</div>
      <div className="col-md-4">{venue}</div>
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
      <section style={{padding:"100px"}}>
        <Heading
          title="Featured Studios"
          color="black"
          subtitle="View Our Top Rated Studios"
        />
     <div className="container">
     <div className="row" id="feature-section">
          
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
