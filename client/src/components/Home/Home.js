import React, { Component } from "react";
import FeaturedStudios from "./FeaturedStudios";
import { connect } from "react-redux";
import { fetchLocation, fetchStudio } from "../.././actions";
import About from "./About";
import StudioType from "./StudioType";
import City from "./City";
import PostStudio from "./PostStudio";
import Hero from "./Hero/Hero";
import Schedule from "./Schedule";

class Home extends Component {
  componentDidMount() {
    this.props.fetchLocation();
    this.props.fetchStudio();
  }

  handleSubmit = e => {
    e.preventDefault();
    let search = e.target.search.value === "" ? "All" : e.target.search.value;
    let location =
      e.target.location.value === "" ? "All" : e.target.location.value;
    this.props.history.push("/search-studio/" + search + "/" + location);
  };

  render() {
    if (!this.props.locate || !this.props.studio) {
      return "";
    }

    let { locate, history } = this.props;
    return (
      <div>
        <Hero />
        <Schedule
          locate={locate.city}
          history={history}
          handleSubmit={this.handleSubmit}
        />
        <About />
        <FeaturedStudios />
        <PostStudio />
       
        <StudioType />
        <City />
      </div>
    );
  }
}

function mapStateToProps({ locate, studio }) {
  return { locate, studio };
}

export default connect(mapStateToProps, { fetchLocation, fetchStudio })(Home);
