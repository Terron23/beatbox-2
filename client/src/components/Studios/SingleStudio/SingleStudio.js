import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudio, fetchUser } from "../../../actions";
import Wrapper from "./sub_components/Wrapper";
import Carousel from "./sub_components/Carousel";
import Features from "./sub_components/Features";
import Ameneties from "./sub_components/Ameneties";
import Reviews from "./sub_components/Reviews";
import BreadCrumb from "./sub_components/BreadCrumb";
import SingleStudioSideFilter from "./sub_components/SingleStudioSideFilter";
import MobileBook from "./sub_components/SingleStudioMobileFilter"

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
  auth,
  width
}) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-8">
          <Carousel img={image} thumbnails={thumbnails} width={width}/>
          <Features capacity={capacity} 
          description={description}
           equipment={equipment} 
          services={services}
          includes={includes}
           />
          <Ameneties services={services} contact={auth}/>
          {/* <Reviews /> */}
        </div>
        {width < 1000 ? <MobileBook price={price} studioName={studioName}> <SingleStudioSideFilter id={id} /></MobileBook>:
        <SingleStudioSideFilter id={id} />
        }
      </div>
    </Wrapper>
  );
};

class SingleStudio extends Component {
  componentDidMount() {
    this.props.fetchStudio();
    this.props.fetchUser()
  }

  render() {
    if (!this.props.studio || !this.props.auth) {
      return "";
    }

    const { studio , auth, width} = this.props;
    
    return (
      <div>
        {studio.map(studio => {
          if (this.props.match.params.id === studio._id) {
            return (
              <BreadCrumb studioName={studio.studioName}
               price={studio.price} 
               image={studio.studioImage}
               />
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
                    auth ={auth.name + " "+ auth.email3}
                    width={width}
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

function mapStateToProps({ studio, auth }) {
  return { studio , auth};
}

export default connect(mapStateToProps, { fetchStudio, fetchUser })(SingleStudio);
