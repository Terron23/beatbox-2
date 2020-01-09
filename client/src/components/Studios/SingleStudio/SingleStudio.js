import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleStudio, fetchUser } from "../../../actions";
import Wrapper from "./sub_components/Wrapper";
import Carousel from "./sub_components/Carousel";
import Features from "./sub_components/Features";
import Ameneties from "./sub_components/Ameneties";
import Reviews from "./sub_components/Reviews";
import BreadCrumb from "./sub_components/BreadCrumb";
import SingleStudioSideFilter from "./sub_components/SingleStudioSideFilter";
import MobileBook from "./sub_components/SingleStudioMobileFilter";
import Loading from "../../Reusable/Loading/Loading";
import "./css/single.css";

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
  width,
  handleClose,
  handleShow,
  setShow,
  studioForm,
  addForm,

}) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-8">
          { <Carousel  img={image} thumbnails={thumbnails} width={width} /> }
          <Features
            capacity={guest}
            description={description}
            equipment={equipment}
            services={services}
            includes={includes}
          />
          <Ameneties services={services} contact={auth} />
          {/* <Reviews /> */}
        </div>
        <div className="col-12 col-lg-4 web-search">
      
        <SingleStudioSideFilter  id={id}  />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-8 mobile-search">
          <MobileBook price={price} studioName={studioName}
            setShow={setShow}
            handleClose={handleClose}
            handleShow={handleShow}
            studioForm={studioForm}
          >         
        <div className="col-12 col-lg-4">
       
     
        <SingleStudioSideFilter  id={id} handleClose={handleClose} />
        </div>
          </MobileBook>
        </div>
      </div>
    </Wrapper>
  );
};

class SingleStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
    }
  }
  componentDidMount() {
    this.props.fetchSingleStudio(this.props.match.params.id);
    this.props.fetchUser();
  }

  handleClose = (e) => {
    e.preventDefault()
    this.setState({ setShow: false });
  }
  handleShow = (e) => {
    e.preventDefault();
    this.setState({ setShow: true });
  };





  render() {
    if (!this.props.studio) {
      return <Loading />;
    }

    const { studio, auth } = this.props;
    const { setShow } = this.state
    console.log(studio)
    return (
      <div>
        {studio.map(studio => {
          if (this.props.match.params.id == studio._id) {
            return (
              <BreadCrumb
                studioName={studio.studio_name}
                price={studio.studio_price}
                
                studiotype={studio.studio_type}
                thumbnails={Object.values(studio.studio_images)}
              />
            );
          }
        })}

        <div className="container">
          <div className="row">
            {studio.map(studio => {
              if (this.props.match.params.id == studio._id) {
                return (
                  <Studios
                    studioName={studio.studio_name}
                    price={studio.studio_price}
                    rules={studio.rules}
                    guest={studio.guest_allowed}
                    id={studio._id}
                    
                 
                    thumbnails={Object.values(studio.studio_images)}
                    equipment={studio.equipment}
                    description={studio.description}
                    services={studio.services}
                    includes={studio.includes}
                    auth={auth.name + " " + auth.email}
                    setShow={setShow}
                    handleClose={this.handleClose}
                    handleShow={this.handleShow}
                  
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
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchSingleStudio, fetchUser })(
  SingleStudio
);
