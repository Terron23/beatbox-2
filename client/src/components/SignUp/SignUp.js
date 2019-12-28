import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "../assets/Title";
import axios from 'axios';
import './css/sign-up.css';

const LeftSide = ({}) => {
  return (
    
      <div className="col-md-4 offset-md-4">
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn roberto-btn btn-2 sign-btn">
         Submit
        </button>
      </div>
  
  );
};

const RightSide = ({ }) => {
  let url = `?path=${window.location.pathname}${window.location.search}`
  return (
    <div className="row">
   
    <div className="col-md-4 offset-md-4">
      <a className="btn btn-block roberto-btn btn-1" href={`/auth/google${url}`}>
        Login With Google
      </a>
      <a className="btn btn-block roberto-btn btn-1" href={`/auth/facebook${url}`}>
        Login With Facebook
      </a>
      <hr />
      
    </div>
    </div>
  );
};

class SignUp extends Component {

 
  render() {
    return (
      <div className="container-fluid signup text-center">
   
        <Title header="Sign In/Sign Up" classProp={`container`} />
        <form>
        <RightSide />
        <LeftSide  />
        </form>
      </div>
  
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SignUp);
