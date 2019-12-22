import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./sub_components/Tabs";
import { fetchStudio, fetchUser } from "../../actions";
import axios from "axios";
import StudioProfile from "./sub_components/StudioProfile";


class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      social: "",
      view: "d-none",
    };
  }



  handleStudioListed = () => {
    let { studio } = this.props;
    return studio.map(studio => {
      return (
        <div>
          <StudioProfile
            name={studio.contact_name}
            phone={studio.phone}
            venue={studio.venue}
            address1={studio.address1}
            address2={studio.address2}
            postalcode={studio.postal_code}
            region={studio.region}
            city={studio.city}
            email={studio.email}
            isListed={studio.isListed}
            studioName={studio.studio_name}
            guest={studio.guest}
            price={studio.studio_price}
            rules={studio.rules}
            studioType={studio.studio_type}
            studioid={studio._id}
          />
          <hr />
        </div>
      );
    });
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
        const res = axios.post("/api/update_user", {
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
    } catch (err) {
      throw err;
    }
  };

 

  render() {
    if (!this.props.studio || !this.props.auth) {
      return "";
    }
    let { studio, auth } = this.props;
    let { view} = this.state;
    return (
      <div className="container" style={{ marginTop: "150px" }}>
    <Tabs studios={this.handleStudioListed} />
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  //State from reducers/index.js file  gets passed to header component as props
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchStudio, fetchUser })(Profile);
