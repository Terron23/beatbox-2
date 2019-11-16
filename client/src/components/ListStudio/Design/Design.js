import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../.././../actions";
import Title from "./../../assets/Title";
import Input from "./../../assets/Input";
import StudioDropZone from "./sub_components/Dropzone"

const Wrapper = ({ children, submit }) => (
  <div className="container-fluid site-section">
    <div className="container">
      <Title header="Add Studio Up to 10 Images" />
      <form id="myForm" className="form-horizontal col-md-12" onSubmit={submit}>
        <fieldset>{children}</fieldset>
      </form>
    </div>
  </div>
);

const ButtonWrapper = ({ children, onClick }) => (
  <div className="form-group row">
    <button className="btn btn-secondary" onClick={onClick}>
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
      images: [],
      studioname: this.props.match.params.studioName,
      studioid: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    console.log(this.props, "props")
  }

  handleFiles = event => {
    this.setState({ files: [...this.state.files, ...event.target.files] });
  };

  addInput = e => {
    e.preventDefault();
    let arr = [];
    let len = this.state.images.length;
    if (this.state.images.length < 11) {
      arr.push(
        <div className="col-md-4">
          <Input
            name={"file" + len}
            type="file"
            label={len < 1 ? "Main Image" : "Image " + len}
            placeholder="Upload Photos"
            handleChange={this.handleFiles}
            style={{ width: "300px" }}
            required="true"
            classProp="form-style-8"
          />
        </div>
      );
    }

    this.setState({ images: [...this.state.images, ...arr] });
  };

  handleImageInput = () => {
    return this.state.images.map((value, i) => {
      return value;
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let file = this.state.files;
    let studioname = this.props.match.params.studioName;
    let studioid = this.props.match.params.id;
    file.forEach((files, i) => {
      let formData = new FormData();
      formData.append("file", files);
      formData.append("upload_preset", "nyv0ihyq");
      formData.append("folder", studioname+'_'+studioid);
      formData.append("public_id", files.name.split('.')[0]+'_'+studioname+'_'+studioid);
      console.log(formData, file)
      axios
        .post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)
        .then(cloudResponse => {
          let studioImageSecondary = cloudResponse.data.url;
          axios
            .post("/api/post-images", {
              studioid, studioname,
              studioImageSecondary
            })
            .then(res => {
              if(i === file.length-1){
                this.props.history.push(`/availibility/${studioname}/${studioid}`);
              }
              console.log(res.data)
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
    const { alert, studioName, images, studioname, studioid } = this.state;
    return (
      <Wrapper submit={this.handleSubmit}>
        <div className="row">{this.handleImageInput()}</div>
<StudioDropZone 
studioid={studioid} 
studioname={studioname}
classProp="form-style-8"
history = {this.props.history}
/>
        <hr />
        {/* {<ButtonWrapper onClick={this.addInput}>Add More Images</ButtonWrapper> }

        <button type="submit" className="btn btn-secondary">
          Save & Continue
        </button> */}
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
