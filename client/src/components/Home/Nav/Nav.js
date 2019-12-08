import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";

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

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width);
  };
  
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

          <Link to="/userprofile">{this.props.auth.name}'s' Profile</Link>,
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
            style={width > 1000 ? styles.navStyles : styles.navPad}
            className="justify-content-between"
            id="robertoNav"
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
                <Link onMouseOver={this.handleFade} 
                onMouseLeave={this.handleFade}
                style={ !fade ? styles.bookStyles: styles.navFocus} to="/search-studio">
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

const styles = {
  bookStyles: {
    padding: "0 30px",
    backgroundColor: "#1cc3b2",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    color: "#ffffff",
    fontSize: "16px",
    padding: "30px"
  },
  navStyles: {
    height: "80px",
    padding: "0"
  },
  navPad: {
    height: "auto",
    padding: "20"
  },
  navFocus:{
    backgroundColor: "#2a303b",
    color: "#ffffff",
    height: "80px",
    lineHeight: "80px",
    padding: "30px"
  }
  
};

function mapStateToProps({ auth }) {
  //State from reducers/index.js file  gets passed to header component as props
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
