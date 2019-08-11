import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import SearchCriteria from '../sub_components/SearchCriteria'
//Should come from database


class Schedule extends Component  {
constructor(props){
  super(props);
this.state={
  city: "",
  search:"",
  startDate: new Date(),
  endDate: new Date(),
}
}

handleChangeStart =(date)=> {
  this.setState({
    startDate: date
  });
}

handleChangeEnd =(date)=> {
  this.setState({
    endDate: date
  });
}
  
handleSubmit =(e)=>{
  e.preventDefault()
let search = e.target.studio.value==="" ? 'All' : e.target.studio.value
let location = e.target.location.value
let startDate = e.target.checkinDate.value
let startTime = e.target.checkinTime.value
  this.props.history.push({
    pathname: '/search-studio/'+search+'/'+location,
    search: '?startday='+startDate+'&startime='+startTime
  })
}

  render(){

    let {studioTypeFilter, time, 
      handleTime, 
      handleAvailibility, 
      block, locate, 
      classNameProp, 
      buttonTitle, 
      search, handleChange,
      handleSubmit} = this.props
console.log(this.props)
  return( 
  <section className="roberto-about-area section-padding-100-0">
  <div className="hotel-search-form-area">
      <div className="container-fluid">
          <div className="hotel-search-form">
              <form onSubmit={this.handleSubmit}>
                  <div className="row justify-content-between align-items-end">
                  <div className="col-6 col-md-2 col-lg-3">
                          <label htmlFor="checkIn">Location</label>
                          <input type="text" className="form-control" id="location" name="location" defaultValue={locate}/>
                      </div>
                      <div className="col-4 col-md-1 col-lg-2">
                          <label htmlFor="checkIn">Start Time</label>
                          
                          <DatePicker 
                           selected={this.state.startDate}
                           onChange={this.handleChangeStart}
                          id="checkin" className="form-control" name="checkinDate" />
                      </div>
                      <div className="col-3 col-md-2 col-lg-2">
                          <label htmlFor="checkOut">Start Time</label>
                          <input className="form-control" type="time" name="checkinTime" id="checkOut"/>

                       
                      </div>
                     <SearchCriteria title="studio"/>
                   
                    
                      <div className="col-8 col-md-3">
                          <button type="submit" className="form-control btn roberto-btn w-100">Check Availability</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
  </section>
)
  }
}





export default Schedule;




