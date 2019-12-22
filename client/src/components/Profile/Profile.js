import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./sub_components/Tabs";
import { fetchStudio, fetchUser } from "../../actions";
import axios from "axios";
import ListStudioForm from "../Reusable/Forms/ListStudio/ListStudio";
import "./css/profile.css";

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      social: "",
      view: "d-none"
    };
  }

  componentDidMount() {
    this.props.fetchStudio();
  }

  handleStudioListed = () => {
    // let {title, handleSubmit, contactVal, studioNameVal,
    //   priceVal, venueVal, emailVal, phoneVal , ad1Val, ad2Val, regionVal, cityVal,
    //   postalVal, buttonText, handleFiles, classProp} = this.props
    return this.props.studio.map(studio => {
      if (studio.user_fk == this.props.auth._id) {
        return (
          <ListStudioForm
            contactVal={studio.contact_name}
            phoneVal={studio.contact_phone}
            venueVal={studio.venue}
            ad1Val={studio.address1}
            ad2Val={studio.address2}
            postalVal={studio.postal_code}
            regionVal={studio.state}
            cityVal={studio.city}
            emailVal={studio.contact_email}
            studioNameVal={studio.studio_name}
            priceVal={studio.studio_price}
            search={studio.studio_type_fk}
            idVal={studio._id}
            buttonText="Edit & Save"
            title={`Edit ${studio.studio_name}`}
            handleSubmit={e => this.handleSubmit(e, "studios")}
          />
        );
      }
    });
  };

  handleUploads = () => {
    // let {title, handleSubmit, contactVal, studioNameVal,
    //   priceVal, venueVal, emailVal, phoneVal , ad1Val, ad2Val, regionVal, cityVal,
    //   postalVal, buttonText, handleFiles, classProp} = this.props
    alert("uploads")
    return (
      <div className="row">
        {this.props.studio.map(studio => {
          if (studio.user_fk == this.props.auth._id) {
            return Object.values(studio.studio_images).map(img => {
              return (
                <div className="col-md-4">
                  <img src={img} className="img-fluid"/>
                </div>
              );
            });
          }
        })}
      </div>
    );
  };

  handleSubmit = async (e, form) => {
    e.preventDefault();
    let username;
    let email;
    let twitter;
    let instagram;
    let facebook;

    try {
      if (form === "users") {
        username = e.target.username.value;
        email = e.target.email.value;
        twitter = e.target.twitter.value;
        instagram = e.target.instagram.value;
        facebook = e.target.facebook.value;

        const res = axios.post("/api/v2/update_user", {
          username,
          email,
          twitter,
          instagram,
          facebook
        });

        if (res.ok) {
          console.log("It Works");
        }
      }

      if (form === "studios") {
        let name = e.target.name.value;
        let address1 = e.target.address1.value;
        let address2 = e.target.address2.value;
        let postalCode = e.target.postalCode.value;
        let city = e.target.city.value;
        let region = e.target.region.value;
        let email = e.target.email.value;
        let phone = e.target.phone.value;
        let venue = e.target.venue.value;
        let studioName = e.target.studioName.value;
        let price = Number(e.target.price.value);
        let rules = "";
        let guest = 0;
        let studioType = e.target.studioType.value;
        let studioid = Number(e.target.studioid.value);

        const res = axios.put("/api/v2/put-studio-info", {
          name,
          email,
          phone,
          venue,
          address1,
          address2,
          postalCode,
          city,
          region,
          studioName,
          price,
          rules,
          guest,
          studioType,
          studioid
        });
        if (res.ok) {
          console.log("It Works");
        }
      }
    } catch (err) {
      throw err;
    }
  };

  render() {
    if (!this.props.studio || !this.props.auth) {
      return "";
    }
    return (
      <div className="container" style={{ marginTop: "150px" }}>
        <Tabs showStudioForm={this.handleStudioListed()} showUploads={this.handleUploads()}/>
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  //State from reducers/index.js file  gets passed to header component as props
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchStudio, fetchUser })(Profile);
