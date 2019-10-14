import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import Availibility from "./Availibility";
import Title from "./assets/Title";
import DropDown from "./assets/DropDown";
import Input from "./../../assets/Input";
import TimeDropDown from "./assets/TimeDropDown";

class ListStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      url: null,
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleFiles = event => {
   this.setState({ files: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();

    let files = this.state.files;
    let studioImage;
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "nyv0ihyq");

    axios
      .post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)
      .then(cloudResponse => {
        let studioImage = cloudResponse.data.url;
        axios
          .post("/api/post-listing", {
           studioImage
          })
          .then(res => {
            this.props.history.push(`/availibility/${studioName}/${res.data}`);
          });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.props.auth) {
      return "";
    }
    const { auth } = this.props;
    const { alert, studioName } = this.state;
    return (
      <div className="container-fluid site-section">

        <div className="container">
          <Title header="Add Your Studio" />
          <form
            id="myForm"
            className="form-horizontal col-md-6"
            onSubmit={this.handleSubmit}
          >
            <fieldset>
               <Input
                name="file"
                type="file"
                label="AddImages"
                placeholder="Upload Photos"
                handleChange={this.handleFiles}
                multiple
                required
              />

          
              <hr />

              <div className="form-group row">
                <button className="btn btn-secondary" type="submit">
                  Save & Continue
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(ListStudio);
