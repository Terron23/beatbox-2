import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../.././../actions";
import Title from "./../../assets/Title";
import Input from "./../../assets/Input";
import StudioDropZone from "./sub_components/Dropzone"
import './css/style.css'

const Wrapper = ({ children, }) => (
  <div className="container-fluid site-section">
    <div className="container">
      <Title header="Add Up to 10 Images" />
    
        <fieldset style={{"padding":"25px"}}>{children}</fieldset>
   
    </div>
  </div>
);



class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studioname: this.props.match.params.studioName,
      studioid: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.props.fetchUser();
 
  }



render() {
    if (!this.props.auth) {
      return "";
    }
    console.log(this.props.history)
    const {studioname, studioid } = this.state;
    return (
      <Wrapper>
<StudioDropZone 
studioid={studioid} 
studioname={studioname}
history = {this.props.history}
/>

     
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
