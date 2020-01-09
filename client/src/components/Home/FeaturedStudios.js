import React, { Component } from "react";
import Heading from "./sub_components/heading";
import { Link } from "react-router-dom";
import './css/feature.css'


const SingleFeaturedStudio = ({
  bg,
  studiotype,
  price,
  studioName,
  venue,
  id,
}) => {
  return (
   <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 feature-gallery">
     <div className="row text-muted">
      <Link to={`/single-studio/${id}`}>
    
       
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="hovereffect">
    <img src={`${bg}`} className="gallery-img"/>
        <div className="overlay">
        <Link to={`/single-studio/${id}`} className="info align-self-center">
          View Details
        </Link>
        </div>
    </div>
</div>
</Link>

       
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12"> 
      <h3 className="feature-name">{studioName}</h3></div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 feature-price">{price}.00/hr</div>
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12"> {studiotype}</div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">{venue}</div>
      </div> 
    
      </div>
        
     
  );
};

class FeaturedStudios extends Component {
  showStudio = () => {
    console.log("test", this.props)
    return this.props.featStudios
      .map(s => {
        return (
          <SingleFeaturedStudio
            key={s._id}
            bg={Object.values(s.studio_images)[0]}
            studiotype={s.studio_type}
            price={s.studio_price}
            studioName={s.studio_name}
            rating=""
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
     <div className="container-fluid container-fluid-feature">
     <div className="row ">
          
            {this.showStudio()}
         </div>
         </div>
      </section>
    );
  }
}



export default FeaturedStudios;
