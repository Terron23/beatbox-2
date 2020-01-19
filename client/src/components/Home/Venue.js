import React from "react";
import { Link } from "react-router-dom";


const VenueType =({img, description, link="/"})=>{
    return(
<div className="col-md-4">
<Link to={link}><h5><i className={`${img}`}></i> {description}</h5></Link>
</div>
    )
}

export default () => {
 

  return (
    <section className="container" style={{marginBottom:"50px"}}>
    <div className="row text-center">
<VenueType img="fa fa-home" description="Home Studios" /> 
<VenueType img="fa fa-building-o" description="Bussiness Studios" /> 
<VenueType img="fa fa-desktop" description="Online Studios" /> 
    </div>
    </section>
  );
};
