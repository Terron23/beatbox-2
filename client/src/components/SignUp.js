import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./assets/Title";

const LeftSide = ({ oauth }) => {
  return (
    
      <form action="">
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
        <button type="submit" className="btn roberto-btn btn-2">
          <span style={{color:"black"}}>Submit</span>
        </button>
      </form>
  
  );
};

const RightSide = ({ oauth }) => {
  return (
    <div className="row">
   
    <div className="col-md-4">
      </div>
    <div className="col-md-4">
      <a className="btn btn-block roberto-btn btn-1" href="/auth/google">
        Login With Google
      </a>
      <a className="btn btn-block roberto-btn btn-1" href="/auth/facebook">
        Login With Facebook
      </a>
      <hr />
      <LeftSide />
    </div>
      <div className="col-md-4">
      </div>

  
      </div>
  );
};

class SignUp extends Component {
  render() {
    return (
      <div className="container-fluid signup text-center">
   
        <Title header="Sign In/Sign Up" classProp={`container`} />

        <RightSide />
    
      </div>
  
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SignUp);
