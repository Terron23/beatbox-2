import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import './css/nav.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newclassNameName: "",
      isActive: "",
      width: "",
      height: "",
      fade: false,
    };
  }


  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <Link to="/post-studio">
            <i className="fa fa-plus"></i>Add Your Studio
          </Link>,
          <Link to="/sign-up">Sign Up/Login</Link>
        ].map((value, i) => {
          return <li key={i}>{value}</li>;
        });
      default:
        return [
          <Link to="/post-studio">
            <i className="fa fa-plus"></i> Add Your Studio
          </Link>,

          <Link to="/userprofile">{this.props.auth.contact_name}'s' Profile</Link>,
          <a href="/api/logout">Logout</a>
        ].map((value, i) => {
          return <Nav.Link key={i}>{value}</Nav.Link>;
        });
    }
  }

handleFade =()=>{
if(this.state.fade){
  this.setState({fade:false})
}
else{
  this.setState({fade:true})
}
}

  render() {
    let { revealSearch } = this.props;
    let { width, fade } = this.state;
    return (
      <div className={`main-header-area`}>
        <div className="container">
          <Navbar
            expand="lg"
            className="studio-nav"
          >
            <Navbar.Brand>
              <Link to="/">StudioHunt</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">{this.renderContent()}</Nav>
              <Nav.Link>
                <i className="fa fa-search" onClick={revealSearch}></i>
              </Nav.Link>
              <Nav.Link>
                <Link className="navFade"  to="/search-studio">
                  Book Now{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}



function mapStateToProps({ auth }) {
  //State from reducers/index.js file  gets passed to header component as props
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
