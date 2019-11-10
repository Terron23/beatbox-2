import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../../../actions";
import DropDown from "../../assets/DropDown";
import Title from "../../assets/Title";
import TimeDropDown from "../../assets/TimeDropDown";

class Availibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: "d-none",
      dates: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      error1: "",
      error2: "",
      dateArr: [],
      timeSlot: [],
      reveal: false
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handDays = () => {
    return this.state.dates.map((days, i) => {
      return <option key={i}>{days}</option>;
    });
  };

  handleDates = e => {
    e.preventDefault();
    let timeSlot = [...this.state.timeSlot];

    timeSlot.push([
      <center>
        <form
          key={timeSlot.length + 1}
          className="col-md-12"
          onSubmit={this.handleTime}
        >
          <div className="row ">
            <DropDown
              options={this.handDays}
              name="days"
              label="Days of the Week"
              col="col-4"
            />
            <TimeDropDown name="starttime" label="Open" col="4" />
            <TimeDropDown name="endtime" label="Close" col="4" />
          </div>
          <div className="col-4">
            <br />
            <button className="btn btn-primary" type="submit">
              Add Time
            </button>
          </div>
        </form>
      </center>
    ]);

    this.setState({ timeSlot });
  };

  handleTime = event => {
    event.preventDefault();
    let day = event.target.days.value;
    let endtime = event.target.endtime.value;
    let starttime = event.target.starttime.value;

    let dateArr = this.state.dateArr;

    dateArr.push({ starttime, endtime, day });
    this.setState({ dateArr, reveal: true });
  };

  handleSchedule = () => {
    return this.state.dateArr.map(s => {
      return <div>{`${s.day}: ${s.starttime} - ${s.endtime}`}</div>;
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let studioname = this.props.match.params.studioName;
    let studioid = this.props.match.params.id;
    let schedule = this.state.dateArr;
    

    axios
      .post("/api/post-listing-time", { schedule, studioname, studioid })
      .then(res => {
       this.props.history.push("/design");
      });
  };

  render() {
    if (!this.props.auth) {
      return "";
    }

    return (
      <div className="container" style={{ padding: "50px" }}>
        <Title header="Hours of Availibility" margin={0} />

        {this.state.timeSlot}
        {this.handleSchedule()}

        <button className="btn btn-primary" onClick={this.handleDates}>
          Add Hours of Operation
        </button>
        {this.state.reveal ? (
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit Schedule
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Availibility);
