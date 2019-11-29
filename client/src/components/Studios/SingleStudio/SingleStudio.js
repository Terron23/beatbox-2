import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudio } from "../../../actions";
import { Link } from "react-router-dom";
import Title from "../../assets/Title";
import Wrapper from "./sub_components/Wrapper";
import Carousel from "./sub_components/Carousel";
import Features from "./sub_components/Features";
import Ameneties from "./sub_components/Ameneties";
import Reviews from "./sub_components/Reviews";
import BreadCrumb from "./sub_components/BreadCrumb";
import SingleStudioSideFilter from "./sub_components/SingleStudioSideFilter";

const Studios = ({
  studioName,
  price,
  guest,
  rules,
  id,
  image,
  availibility,
  thumbnails,
  capacity,
  equipment,
  description,
  services,
  includes,
}) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-12 col-lg-8">
          <Carousel img={image} thumbnails={thumbnails}/>
          <Features capacity={capacity} 
          description={description}
           equipment={equipment} 
          services={services}
          includes={includes}
           />
          <Ameneties services={services}/>
          <Reviews />
        </div>
        <SingleStudioSideFilter id={id} />
      </div>
    </Wrapper>
  );
};

class SingleStudio extends Component {
  componentDidMount() {
    this.props.fetchStudio();
  }

  render() {
    if (!this.props.studio) {
      return "";
    }
    //Needs to be refactored
    //Pulling in all data
    const { studio } = this.props;
    
    return (
      <div>
        {studio.map(studio => {
          if (this.props.match.params.id === studio._id) {
            return (
              <BreadCrumb studioName={studio.studioName} price={studio.price} />
            );
          }
        })}

        <div className="container">
          <div className="row">
            {studio.map(studio => {
              if (this.props.match.params.id === studio._id) {
                return (
                  <Studios
                    studioName={studio.studioName}
                    price={studio.price}
                    rules={studio.rules}
                    guest={studio.guest}
                    id={studio._id}
                    image={studio.studioImage}
                    availibility={studio.availibility}
                    thumbnails={studio.studioImageSecondary}
                    capacity={studio.capacity}
                    equipment={studio.equipment}
                    description={studio.description}
                    services={studio.services}
                    includes={studio.includes}
                  />
                );
              } else {
                return "";
              }
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ studio }) {
  return { studio };
}

export default connect(mapStateToProps, { fetchStudio })(SingleStudio);
