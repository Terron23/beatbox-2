import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser, fetchStudioType } from "../../../actions";
import Title from "../../assets/Title"
import DropDown from "../../assets/DropDown";
import SearchCriteria from "./sub_component/SearchCriteria";
import Input from "../../assets/Input";
import './css/style.css';

class ListStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
      url: null,
      alert: "d-none",
      from: [],
      formControl: null,
      studioName: "",
      region: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      venue: ["Home", "Business", "Online"],
    
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchStudioType()
  }

  handleFiles = event => {
    console.log(event.target.files[0]);

    this.setState({ files: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();

    let name = event.target.name1.value;
    let address1 = event.target.address1.value;
    let address2 = event.target.address2.value;
    let postalCode = event.target.postalCode.value;
    let city = event.target.city.value;
    let region = event.target.region.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let venue = event.target.venue.value;
    let studioName = event.target.studioName.value;
    let price = event.target.price.value;
    let rules = "";
    let guest = 0;
    let studioType = event.target.studioType.value;
    let files = this.state.files;

    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "nyv0ihyq");
    // formData.append("public_id", files.name.split('.')[0]+'_'+studioname+'_'+studioid);

    axios
      .post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)
      .then(cloudResponse => {
        let studioImage = cloudResponse.data.url;
        axios
          .post("/api/post-listing", {
            studioName,
            price,
            rules,
            name,
            email,
            address1,
            address2,
            postalCode,
            city,
            region,
            phone,
            venue,
            studioImage,
            guest,
            studioType
          })
          .then(res => {
            this.props.history.push(`/design/${studioName}/${res.data}`);
          });
      })
      .catch(err => console.log(err));
  };

  handleStudioTypes = () =>
    this.props.studiotype.map(types => <option key={types._id} value={types.studioType}>{types.studioType}</option>);

  handleVenue = () =>
    this.state.venue.map((types, i) => <option key={i}>{types}</option>);

  

  handleClick = e => {
    e.preventDefault();
    if (this.state.alert === "d-none") {
      this.setState({ alert: "alert alert-success" });
    } else {
      this.setState({ alert: "d-none" });
    }
  };

  handleRegion = () => {
    return this.state.region.map((zip, i) => {
      return <option key={i}>{zip}</option>;
    });
  };

  render() {
    if (!this.props.auth || !this.props.studiotype) {
      return "Loading";
    }
    return (
      <div className="container-fluid site-section">
        <div className="container">
          <Title header="Add Your Studio" />
            <div className="row">
          <div
            className="col-md-2"
            onSubmit={this.handleSubmit}
          ></div>
          <form
            id="myForm"
            className="form-horizontal col-md-8 "
            onSubmit={this.handleSubmit}
          >
            <fieldset>
              <Input
                name="name1"
                type="text"
                label="Contact Name"
                placeholder="Enter Full Name Here"
                classProp="form-style-8"
              />
              <Input
                name="studioName"
                label="Studio Name"
                type="text"
                placeholder="Enter the Name of Your Studio"
                classProp="form-style-8"
              />
              <Input
                name="price"
                label="Price Per Hour"
                type="number"
                placeholder="Enter your prices"
                classProp="form-style-8"
              />
              <DropDown
                options={this.handleStudioTypes}
                name="studioType"
                label="Studio Type"
                placeholder="Enter Studio Type"
                classProp="form-style-8"
              />
              <DropDown
                options={this.handleVenue}
                name="venue"
                type="text"
                label="Venue"
                placeholder="Enter Venue"
                classProp="form-style-8"
              />

              <Input
                name="email"
                type="email"
                label="Bussiness Email"
                placeholder="Email"
                classProp="form-style-8"
              />
              <Input
                name="phone"
                type="phone"
                label="Bussiness Phone Number"
                placeholder="Enter Phone Number"
                classProp="form-style-8"
              />
              <Input
                name="address1"
                type="text"
                label="Address1"
                placeholder="Enter Street Address"
                classProp="form-style-8"
              />
              <Input
                name="address2"
                type="text"
                label="Address2"
                placeholder="Enter Street Address"
                classProp="form-style-8"
              />
              <Input
                name="city"
                type="text"
                label="City"
                placeholder="Enter Street City"
                classProp="form-style-8"
              />
              <DropDown
                options={this.handleRegion}
                name="region"
                type="text"
                label="State"
                placeholder="Enter State"
                classProp="form-style-8"
              />
              <Input
                name="postalCode"
                type="text"
                label="Zip Code"
                placeholder="Enter Zip Code"
                classProp="form-style-8"
              />

              <Input
                name="file"
                type="file"
                label="Add Main Studio Image"
                placeholder="Upload Photo"
                handleChange={this.handleFiles}
                multiple={true}
                required
                classProp="form-style-8"
              />

              {this.state.formControl}
              <hr />

              <div className="form-group row">
                <button className="btn roberto-btn w-100" type="submit">
                  Save & Continue
                </button>
              </div>
            </fieldset>
          </form>

          <div
            className="col-md-2"
          
          >
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ studiotype, auth }) {
  return { studiotype, auth };
}

export default connect(mapStateToProps, { fetchUser, fetchStudioType })(ListStudio);
