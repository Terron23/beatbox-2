import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocation, fetchStudio, fetchStudioType } from "../../../actions";
import StudioSearchTemplate from "./sub_components/StudioSearchTemplate";
import StudioSearchHeader from "./sub_components/StudioSearchHeader";
import StudioSideFilter from "./sub_components/StudioSideFilter";
import StudioMobileFilter from "./sub_components/StudioMobileFilter";
import Loading from "../../Reusable/Loading/Loading";
import Infinite from "../../Reusable/InfiniteScroll/Infinite";
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
      studioType:
        this.props.match.params.search === "All"
          ? ""
          : this.props.match.params.search || "",
      guest: 0,
      startDate: !this.props.match.params.startdate
        ? ""
        : this.props.match.params.startdate || "",
      applyDate: "",
      startTime: "",
      setShow: false,
      search: [],
      items: Array.from({ length: 20 }),
      hasMore: true,
      counter: 0
    };
  }

  componentDidMount() {
    this.props.fetchLocation();
    this.props.fetchStudio(undefined, undefined, this.state.studioType);
    window.addEventListener("load", this.featureType);
   
  }

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
    let arr = [];
    let filterArr = this.props.studio.map(studio => {
      arr.push(
        <StudioSearchTemplate
          key={studio._id}
          studioImage={Object.values(studio.studio_images)[0]}
          studioName={studio.studio_name}
          price={studio.studio_price}
          _id={studio._id}
          studioType={studio.studio_type}
          city={studio.city}
          availibility={Object.values(studio.availibility)}
          dateQuery={this.state.startDate}
        />
      );
    });

    if (arr.length < 1) {
      return arr.push(
        <div>
          <h3>Could Not Find Any Listings.</h3>
        </div>
      );
    }

    
    this.setState({ search: this.state.search.concat(arr) });
    console.log("fetcg" ,arr, this.state.search)
  };

  handleParam =(studiotype, date, state)=>{
   return `&studioType=${studiotype}&location=${date}&state=${state}`
  }
  handleAvailibility = async e => {
    e.preventDefault();
    let location = e.target.location.value;
    let studioType = e.target.studioType.value;
    let startDate = e.target.startDate.value;
    const getData = await this.props.fetchStudio(
      undefined,
      undefined,
      this.handleParam(studioType, startDate, location )
    );
    this.setState({ location, studioType, startDate, search: [] });
    this.featureType();
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

  handleReveal = () => {
    if (this.state.reveal) {
      this.setState({ reveal: false });
    } else {
      this.setState({ reveal: true });
    }
  };

  handleChangeStart = date => {
    document.getElementById("search-id").focus();
    this.setState({
      startDate: date,
      reveal: false
    });
  };

  clearCal = () => {
    this.setState({
      startDate: "",
      reveal: false
    });
  };

  fetchMoreData = async () => {
    let counter = this.state.counter + 20;
    this.setState({counter})
    const getData = await this.props.fetchStudio(
      counter,
      20,
      this.state.studioType
    );
this.featureType()
    console.log("hello", this.props.studio, counter, this.state.search.length, this.state.items.length)

    this.setState({
      items: this.state.items.concat(Array.from({ length: 20 }))
    
    });
  };

  render() {
    if (!this.props.studio || !this.props.locate) {
      return <Loading />;
    }
    let {
      location,
      startDate,
      studioType,
      setShow,
      reveal,
      search,
      items,
      hasMore
    } = this.state;

    return (
      <section>
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
              stateText={startDate}
              handleChangeStartProps={this.handleChangeStart}
              handleRevealProp={this.handleReveal}
              revealCal={reveal}
              clearCal={this.clearCal}
            />
          </StudioMobileFilter>
        </div>
        <div className="roberto-rooms-area section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className={`col-12 col-lg-8`}>
                <Infinite
                  fetchMoreData={this.fetchMoreData}
                  hasMore={hasMore}
                  items={items}
                >
                  {items.map((i, index) => search[index])}
                </Infinite>
              </div>
              {document.documentElement.clientWidth >= 1000 ? (
                <StudioSideFilter
                  location={location}
                  submit={this.handleAvailibility}
                  priceLow={this.handlePrice()[0]}
                  priceHigh={this.handlePrice().pop()}
                  search={studioType}
                  stateText={startDate}
                  startDate={startDate}
                  handleChangeStartProps={this.handleChangeStart}
                  handleRevealProp={this.handleReveal}
                  revealCal={reveal}
                  hide="web-search"
                  clearCal={this.clearCal}
                />
              ) : (
                ""
              )}
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
