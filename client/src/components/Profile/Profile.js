import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./sub_components/Tabs";
import { fetchStudio, fetchUser } from "../../actions";
import axios from "axios";
import ListStudioForm from "../Reusable/Forms/ListStudio/ListStudio";
import Input from '../Reusable/FormElements/Input/Input'
import AlertMessage from '../Reusable/Alert/Alert'
import {Accordion, Button, Card} from "react-bootstrap"
import "./css/profile.css";

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      social: "",
      view: "d-none",
      variant: "success",
      alertClass:"d-none",
     alertText:""
    };
  }

  componentDidMount() {
    this.props.fetchStudio();
  }

  handleStudioListed = () => {
    // let {title, handleSubmit, contactVal, studioNameVal,
    //   priceVal, venueVal, emailVal, phoneVal , ad1Val, ad2Val, regionVal, cityVal,
    //   postalVal, buttonText, handleFiles, classProp} = this.props
    return this.props.studio.map((studio, i) => {
      if (studio.user_fk == this.props.auth._id) {
        return (<Accordion>
          <Card>
    <Card.Header>
     <Accordion.Toggle as={Button} className="col-md-4 offset-md-4" variant="link" eventKey={i}>

        {studio.studio_name}
      </Accordion.Toggle>
      </Card.Header>
      </Card>
      <Accordion.Collapse eventKey={i}>
          <ListStudioForm
            contactVal={studio.contact_name}
            phoneVal={studio.contact_phone}
            venueVal={studio.studio_venue}
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
            showTitle={false}
            handleSubmit={e => this.handleSubmit(e, "studios")}
          />
          </Accordion.Collapse>
          </Accordion>
        );
      }
    });
  };

  handleUploads = () => {
  return (
      <div className="row">
        {this.props.studio.map(studio => {
          if (studio.user_fk == this.props.auth._id) {
            return Object.values(studio.studio_images).map(img => {
              return (
                <div className="col-md-4">
                  <img src={img} className="img-uploads"/>
              <p>{studio.studio_name}</p>
              <p><button className="btn btn-danger">Delete</button></p>
                </div>
              );
            });
          }
        })}
      </div>
    );
  };


handleClose=() =>{
this.setState({alertClass:"d-none"})
}
  handleProfile = () => {
    let auth = this.props.auth
    // {name, placeholder, id, value,  label, classProp, type,  autoComplete, 
    //   required, multiple, handleChange}
 return (<form className="col-md-6 offset-md-3" onSubmit={(e)=>this.handleSubmit(e, 'profile')}>
    <Input 
    value={auth.contact_name} 
    id="user_contact" 
    name="username" 
    label="Profile Name"
    placeholder="Add /Edit profile name."
    autoComplete="off"
    />
      <Input value={auth.username} 
      id="user_name" 
      name="name" 
      label="Profile User Name"
      placeholder="Add/Edit user name."
      autoComplete="off"
      />
      <Input value={auth.email} 
        id="user_email" 
        name="email" 
        label="User Email"
        placeholder="Add/Edit User Email."
        autoComplete="off"
      />
      {!auth.social ?
     <div>
     <Input value="" 
        id="instagram" 
        name="instagram" 
        label="Instagram"
        placeholder="Add Instagram URL"
        autoComplete="off"
      />
      <Input value="" 
      id="faceBook" 
      name="facebook" 
      label="Facebook"
      placeholder="Add Facebook URL"
      autoComplete="off"
    />
      <Input value="" 
      id="twitter" 
      name="twitter" 
      label="Twitter"
      placeholder="Add twitter URL"
      autoComplete="off"
    />
   </div>
      
      :
      Object.entries(auth.social).map(s=>{
        return <Input value="" 
        id={s[0]} 
        name={s[0]} 
        label={s[0]}
        placeholder=""
        autoComplete="off"
        value={s[1]}
      />
      })
      }
    <button type="submit" className="btn roberto-btn w-100">Update/Edit User Info</button>
      </form>)
 
  };

  handleSubmit = async (e, form) => {
    e.preventDefault();
  

      if (form === "profile") {
        let username = e.target.username.value;
        let email = e.target.email.value;
        let twitter = e.target.twitter.value;
        let instagram = e.target.instagram.value;
        let facebook = e.target.facebook.value;
        let userid = this.props.auth._id
        let socialObj = {twitter:twitter, instagram:instagram, facebook: facebook}
        const res = axios.put("/api/v2/update-user", {
          username,
          email,
          social: socialObj,
          userid
        }).then(res=>{
         
          this.setState({variant:"success", alertClass:"", 
          alertText:'User Profile Updated Successfully'})
        }).catch(err=>{
          this.setState({variant:"danger", alertClass:"col-md-4 offset-md-3", 
          alertText:'Something went wrong. Please try again.'})
        })
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
        }).then(res=>{
         
          this.setState({variant:"success", alertClass:"", 
          alertText:'Studio Info Updated Successfully'})
        }).catch(err=>{
          this.setState({variant:"danger", alertClass:"col-md-4 offset-md-3", 
          alertText:'Something went wrong. Please try again.'})
        })

      }
    
  }

  render() {
    if (!this.props.studio || !this.props.auth) {
      return "";
    }
    let  {variant, alertClass, alertText, showAlert} = this.state
    return (
      <div className="container" style={{ marginTop: "50px" }}>
     <AlertMessage variant={variant} alertText={alertText} hide={alertClass} 
     showAlert={showAlert} handleClose={this.handleClose}/>

        <Tabs showStudioForm={this.handleStudioListed()} showUploads={this.handleUploads()} 
        showProfile={this.handleProfile()}/>
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
 
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchStudio, fetchUser })(Profile);
