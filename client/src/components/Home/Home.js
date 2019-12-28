import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocation, fetchStudio } from "../.././actions";
import About from "./About";
import StudioType from "./StudioType";
import FeaturedStudios from "./FeaturedStudios"
import PostStudio from "./PostStudio";
import Hero from "./Hero/Hero";
import Schedule from "./Schedule";
import Loading from "../Reusable/Loading/Loading"

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
      return <Loading />;
    }

    let { locate, history, } = this.props;
    return (
      <div>
        <Hero />
        <Schedule
          locate={locate.region}
          history={history}
          handleSubmit={this.handleSubmit}/>
         <FeaturedStudios /> 
        <PostStudio />
        <StudioType />
        <About />
      </div>
    );
  }
}

function mapStateToProps({ locate, studio }) {
  return { locate, studio };
}

export default connect(mapStateToProps, { fetchLocation, fetchStudio })(Home);
