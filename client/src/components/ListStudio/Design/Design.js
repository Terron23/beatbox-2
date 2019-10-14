import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import Title from "./assets/Title";
import Input from "./../../assets/Input";

const Wrapper = ({ children }) => (
  <div className="container-fluid site-section">
    <div className="container">
      <Title header="Add Studio Up to 8 Images" />
      <form
        id="myForm"
        className="form-horizontal col-md-6"
        onSubmit={this.handleSubmit}
      >
        <fieldset>{children}</fieldset>
      </form>
    </div>
  </div>
);


const ButtonWrapper = ({ children }) => (
  <div className="form-group row">
  <button className="btn btn-secondary" type="submit">
    {children}
   </button>
   </div>
);

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      url: null,
      images: []
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleFiles = event => {
    this.setState({ files: [...this.state.files, ...event.target.files] });
  };

  addInput(){
let arr = []
let i = 0
    if(arr.length < 11){
      i++
      arr.push(<Input
        name={"file"+i}
        type="file"
        label="AddImages"
        placeholder="Upload Photos"
        handleChange={this.handleFiles}
        multiple
        required
      />)
    }

    this.setState({images:arr})
  }


  handleSubmit = event => {
    event.preventDefault();

    let file = this.state.files;
    let studioImage;

    file.forEach(files => {
      let formData = new FormData();
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
              this.props.history.push(
                `/availibility/`
              );
            });
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    if (!this.props.auth) {
      return "";
    }
    const { auth } = this.props;
    const { alert, studioName } = this.state;
    return (
      <Wrapper>
        <div className="col-md-8">
        <Input
          name="file"
          type="file"
          label="AddImages"
          placeholder="Upload Photos"
          handleChange={this.handleFiles}
          multiple
          required
        /></div>

<div className="col-md-4"> <button onClick={this.addInput}>Add More Images</button></div>

        <hr />

        <ButtonWrapper>
            Save & Continue
          </ButtonWrapper>
       
      </Wrapper>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Design);
