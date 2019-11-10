import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../.././../actions";
import Title from "./../../assets/Title";
import Input from "./../../assets/Input";


const Wrapper = ({ children }) => (
  <div className="container-fluid site-section">
    <div className="container">
      <Title header="Add Studio Up to 10 Images" />
      <form
        id="myForm"
        className="form-horizontal col-md-12"
        onSubmit={this.handleSubmit}
      >
        <fieldset>{children}</fieldset>
      </form>
    </div>
  </div>
);

const ButtonWrapper = ({ children , onClick}) => (
  <div className="form-group row">
    <button className="btn btn-secondary" type="submit" onClick={onClick}>
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

  addInput = e => {
    e.preventDefault();
    let arr = [];
    let len = this.state.images.length;
    if (this.state.images.length < 11) {
  

      arr.push( <div className="col-md-2">
        <Input
          name={"file" + len}
          type="file"
          label={len < 1 ? "Main Image" : "Image "+len}
          placeholder="Upload Photos"
          handleChange={this.handleFiles}
          style={{"width": "300px"}}
          required="true"
        />
        </div>
      );
    }

    this.setState({ images: [...this.state.images, ...arr] });
  };


  handleImageInput =()=>{
    return this.state.images.map((value, i)=>{
      return value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    let file = this.state.files;

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
              this.props.history.push(`/availibility/`);
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
    const { alert, studioName, images } = this.state;
    return (
      <Wrapper>
        <div className="row">
       
       {this.handleImageInput()}
        
        </div>
 
        <hr />
        <ButtonWrapper onClick={this.addInput}>
            Add More Images
          </ButtonWrapper>

        <ButtonWrapper onSubmit={this.handleSubmit}>Save & Continue</ButtonWrapper>
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
