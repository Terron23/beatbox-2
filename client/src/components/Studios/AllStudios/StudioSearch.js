import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocation, fetchStudio, fetchStudioType } from "../../../actions";
import StudioSearchTemplate from "./sub_components/StudioSearchTemplate";
import StudioSearchHeader from "./sub_components/StudioSearchHeader";
import StudioSideFilter from "./sub_components/StudioSideFilter";
import StudioMobileFilter from "./sub_components/StudioMobileFilter";
import ModalMobile from "./sub_components/Modal";
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
      reveal: true,
      filterArr: "",
      longLat: [],
      studioType: this.props.match.params.search || "",
      guest: 0,
      startDate: !this.props.match.params.startdate
        ? ""
        : new Date(this.props.match.params.startdate || "11/23/2045"),
      applyDate: "",
      startTime: "",
      setShow: false
    };
  }

  componentDidMount() {
    this.props.fetchLocation();
    this.props.fetchStudio();
    this.props.fetchStudioType();
  }

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
    document.getElementById("startDate").focus();
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
            studio.postalCode.toLowerCase() ===
              this.state.location.toLowerCase()
      )
      .filter(studio =>
        this.state.studioType === ""
          ? studio.studioType
          : studio.studioType === this.state.studioType
      )
      // .filter((studio)=> this.state.applyDate === '' ? studio.availibility : studio.availibility
      // .filter(studio=>studio.day.toLowerCase() === days[new Date(this.state.applyDate).getDay()].toLowerCase()) !='')
      // .filter((studio)=> this.state.applyDate === '' ? studio.availibility : studio.availibility
      // .filter(studio=>this.state.startDate==='' ? studio.startDate: this.state.startDate === studio.startDate) !='')
      .filter(studio =>
        this.state.applyDate === ""
          ? studio.availibility
          : studio.availibility.filter(
              studio =>
                studio.day === days[new Date(this.state.applyDate).getDay()]
            ) != ""
      )
      .map(studio => {
        console.log(this.props)
        return (
          <StudioSearchTemplate
            key={studio._id}
            studioImage={studio.studioImage}
            studioName={studio.studioName}
            price={studio.price}
            _id={studio._id}
            studioType={studio.studioType}
            city={studio.city}
            studioType={studio.studioType}
            availibility={studio.availibility}
            startDate={this.state.startDate}
            handleChangeStart={this.handleChangeStart}
          />
        );
      });

    return search;
  };

  handleAvailibility = e => {
    e.preventDefault();
  
    let location = e.target.location.value;
    let studioType = e.target.studioType.value;
    // let guest = e.target.guest.value
    let applyDate = this.state.startDate;
    this.setState({ location, studioType, applyDate });
    this.handleClose()
  };

  handleChange = e => {
    this.setState({ search: e.target.search.value });
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

  handleDropDown = options => {
    let filterArr = [...this.props.studio];
    let data = [];
    if (options === "studioType") {
      let studioType = filterArr.map(studio => {
        return data.push(studio.studioType);
      });

      return [...new Set(data)];
    }
    let group = filterArr.map(studio => {
      return data.push(studio.guest);
    });
    return [...new Set(group)];
  };
  handleClose = () => this.setState({setShow:false});
  handleShow = (e) => {
    e.preventDefault()
    if(!this.state.setShow){
      this.setState({setShow:true})
    }
    else{
      this.setState({setShow:false})
    }
  
  }

  render() {
    if (!this.props.studio || !this.props.locate) {
      return "Loading...";
    }
    let { location, startDate, studioType , setShow} = this.state;
    let {width} = this.props;
    return (
      <section>
       {width > 1000 ? 
          <div className={`header-area`}>
          <StudioSearchHeader />
          </div> 
          : 
          <div className="mobile-filter">
         <hr />
          <StudioMobileFilter>
          <StudioSideFilter
                location={location}
                submit={this.handleAvailibility}
                priceLow={this.handlePrice()[0]}
                priceHigh={this.handlePrice().pop()}
                search={studioType}
                group={this.handleDropDown()}
                startDate={startDate}
                handleChangeStart={this.handleChangeStart}
                width={this.props.width}
               
              />
          </StudioMobileFilter>
          
          </div>
}
     
        <div className="roberto-rooms-area section-padding-100-0">
          <div className="container">
            <div className="row">
            
              <div className="col-12 col-lg-8">
              {this.featureType()}</div>

              <StudioSideFilter
                location={location}
                submit={this.handleAvailibility}
                priceLow={this.handlePrice()[0]}
                priceHigh={this.handlePrice().pop()}
                search={studioType}
                group={this.handleDropDown()}
                startDate={startDate}
                handleChangeStart={this.handleChangeStart}
                width={this.props.width}
                hide={"d-none"}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ locate, studio , type}) {
  return { locate, studio, type };
}

export default connect(mapStateToProps, { fetchLocation, fetchStudio, fetchStudioType })(
  StudioSearch
);
