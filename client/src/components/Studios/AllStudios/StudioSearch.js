import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocation, fetchStudio, fetchStudioType } from "../../../actions";
import StudioSearchTemplate from "./sub_components/StudioSearchTemplate";
import StudioSearchHeader from "./sub_components/StudioSearchHeader";
import StudioSideFilter from "./sub_components/StudioSideFilter";
import StudioMobileFilter from "./sub_components/StudioMobileFilter";
import "./css/studio.css";

class StudioSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStudioType: "All",
      filterGuest: 0,
      zip: null,
      miles: "",
      time: "",
      day: "",
      availibility: [],
      guest: "",
      state: "",
      location:
        this.props.match.params.location === "All"
          ? ""
          : this.props.match.params.location || "",
      reveal: false,
      filterArr: "",
      longLat: [],
      studioType: this.props.match.params.search === "All" ? "" : this.props.match.params.search || "",
      guest: 0,
      startDate: !this.props.match.params.startdate
        ? ""
        : new Date(this.props.match.params.startdate || "11/23/2045"),
      applyDate: "",
      startTime: "",
      setShow: false,
      search: []
    };
  }

  componentDidMount() {
    this.props.fetchLocation();
    this.props.fetchStudio();
  }

  handleChangeStart = date => {
    document.getElementById("startDate").focus();
    this.setState({
      startDate: date,
      reveal: false
    });
   
  };

  featureType = () => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let filterArr = [...this.props.studio];
    let search = filterArr
      .filter(studio =>
        this.state.location === ""
          ? studio.city
          : studio.city
              .toLowerCase()
              .match(this.state.location.toLowerCase()) ||
            studio.postal_code.toLowerCase() ===
              this.state.location.toLowerCase()
      )
      .filter(studio =>
        this.state.studioType === ""
          ? studio.studio_type_fk
          : studio.studio_type_fk == this.state.studioType
      )
      .filter(studio =>
        this.state.applyDate === ""
          ? Object.values(studio.availibility)
          : Object.values(studio.availibility).filter(
              day =>
                day.toLowerCase() === days[new Date(this.state.applyDate).getDay()].toLowerCase()
            ) != ""
      )
      .map(studio => {
        return (
          <StudioSearchTemplate
            key={studio._id}
            studioImage={studio.main_image}
            studioName={studio.studio_name}
            price={studio.studio_price}
            _id={studio._id}
            studioType={studio.studio_type}
            city={studio.city}
            availibility={Object.values(studio.availibility)}
            
            />
        );
      });

    return search;
  };

  handleAvailibility = e => {
    e.preventDefault();
    let location = e.target.location.value;
    let studioType = e.target.studioType.value;
    let applyDate = e.target.startDate.value;
    this.setState({ location, studioType, applyDate });
    this.handleClose(e);
  };

  handlePrice = () => {
    let filterArr = [...this.props.studio];
    let price = filterArr
      .map(studio => {
        return studio.price;
      })
      .sort();

    return price;
  };

  

  handleClose = e => {
    e.preventDefault();
    this.setState({ setShow: false });
  };

  handleShow = e => {
    e.preventDefault();
    if (!this.state.setShow) {
      this.setState({ setShow: true });
    } else {
      this.setState({ setShow: false });
    }
  };

  handleReveal =()=>{
if(this.state.reveal){
  this.setState({reveal:false})
}
else{
  this.setState({reveal:true})
}
  }

  render() {
    if (!this.props.studio || !this.props.locate) {
      return "Loading...";
    }
    let { location, startDate, studioType, setShow, reveal } = this.state;

    return (
      <section>
        <div className={`header-area web-search`}>
          <StudioSearchHeader />
        </div>
        <div className="mobile-search">
          <hr />
          <StudioMobileFilter
            handleShow={this.handleShow}
            handleClose={this.handleClose}
            setShow={setShow}
          >
            <StudioSideFilter
              location={location}
              submit={this.handleAvailibility}
              priceLow={this.handlePrice()[0]}
              priceHigh={this.handlePrice().pop()}
              search={studioType}
             />
          </StudioMobileFilter>
        </div>
        <div className="roberto-rooms-area section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className={`col-12 col-lg-8`}>{this.featureType()}</div>

              <StudioSideFilter
                location={location}
                submit={this.handleAvailibility}
                priceLow={this.handlePrice()[0]}
                priceHigh={this.handlePrice().pop()}
                search={studioType}
                
                startDate={startDate}
                handleChangeStart={this.handleChangeStart}
                width={this.props.width}
                hide="web-search"
                revealCal={reveal}
                handleReveal={this.handleReveal}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ locate, studio, type }) {
  return { locate, studio, type };
}

export default connect(mapStateToProps, {
  fetchLocation,
  fetchStudio,
  fetchStudioType
})(StudioSearch);
