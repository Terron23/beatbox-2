import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../../../actions";
import DropDown from "../../assets/DropDown";
import Title from "../../assets/Title";
import TimeDropDown from "../../assets/TimeDropDown";
import './css/style.css'

class Availibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: "d-none",
      timeSlot: [],
      dateArr: [], 
      days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

 

  handleDates = e => {
let timeSlot=[];
let days = this.state.days;
  for(let i=0; i< 7; i++){
    timeSlot.push(
   
      <td className="col-2" key={i}>
       <TimeDropDown id={`${days[i]}_starttime`} 
       name={`${days[i]}_starttime`} 
       label="Open" 
       classProp="form-style-8 time_slot" required={true}/>

        <TimeDropDown id={`${days[i]}_endtime`}
         name={`${days[i]}_endtime`} 
         label="Close" 
         classProp="form-style-8 time_slot"  required={true}/>
        </td>
       )
  }
return timeSlot;

  };


  handleSubmit = event => {
   
    event.preventDefault();
    let studioname = this.props.match.params.studioName;
    let studioid = this.props.match.params.id;
    let schedule = this.state.dateArr;
    let {days} = this.state
    let day;
    let starttime;
    let endtime;

   for(let i = 0; i<7; i++){
     starttime= document.getElementById(`${days[i]}_starttime`).value || '';
     endtime=document.getElementById(`${days[i]}_endtime`).value || '';
     day = days[i]
     if(starttime !== '' && endtime !== ''){
     schedule.push({ starttime, endtime, day });
     }
   }
  

    axios
      .post("/api/post-listing-time", { schedule, studioname, studioid })
      .then(res => {
        this.props.history.push(`/details/${studioname}/${studioid}`);
      });
  };

  render() {
    if (!this.props.auth) {
      return "";
    }

    return (
      <div className="container" >
        <Title header="Hours of Availibility"  />
   <table className="table table-xl table-responsive table-avail table-bordered">
    <thead>
      <tr className="d-flex ">
        <th className="col-2">Sunday</th>
        <th className="col-2">Monday</th>
        <th className="col-2">Tuesday</th>
        <th className="col-2">Wednesday</th>
        <th className="col-2">Thursday</th>
        <th className="col-2">Friday</th>
        <th className="col-2">Saturday</th>
      </tr>
     
      <tr className="d-flex">
        
      {this.handleDates()}
      </tr>
      </thead>
  </table>
  <div className="form-group row">
                <button className="btn roberto-btn w-100" onClick={this.handleSubmit}>
                  Save & Continue
                </button>
              </div>
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchUser })(Availibility);
