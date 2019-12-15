import React, { Component } from "react";
import TimeDropDown from "../../../Reusable/TimedropDown/TimeDropDown";
import FormAttr from "./FormAttr";
import StudioHuntDatePicker from '../../../Reusable/DatePicker/StudioHuntDatePicker';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import { withRouter } from 'react-router';



const StudioTemplate =({addForm})=>{
 return (
 <div>
   <FormAttr label="Check In Date">
   <StudioHuntDatePicker  
        type="text"
        classNames="input-small form-control startDate"
        id="singleDatepicker"
        name="singleDatepicker"
        placeholder="All Available Dates"
        autoComplete="off"
        selectRange={false} 
       calendarClass={"startDate"} 
       required={true}
    />   
   </FormAttr>

   <div className="row">
<div className="col-6">
   <FormAttr label="Time In" >
     <TimeDropDown  name="timeIn" id='timein' required={true} />
   </FormAttr>
   </div>
   <div className="col-6">
   <FormAttr label="Time Out" >
     <TimeDropDown  name="timeOut" id='timeout' required={true} />
   </FormAttr>
   <p className="add-time" onClick={addForm}>+Add Selected time</p>
   </div>

   </div>
 </div>)
}



class SingleStudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      startDate: "",
      studioForm: [],
    };
  }



  handleSubmit =(e)=>{
    e.preventDefault();
    let {id}=this.props
  this.props.history.push(`/payment/${id}`);

  }



  addForm =(e)=>{
    e.preventDefault()
    let timeIn = document.getElementById("timein").value;
    let timeOut=document.getElementById("timeout").value;
    let singleDatePicker = document.getElementById("singleDatepicker").value;

    let values = [
      {
    "timeIn" : timeIn, 
    "timeOut": timeOut, 
    "singleDatePicker": singleDatePicker
  }]
  
  let form = [...this.state.studioForm, ...values];
 
   this.setState({studioForm : form})

    // document.getElementById("timein").value="";
    // document.getElementById("timeout").value="";
    // document.getElementById("singleDatepicker").value="";
 
  }

  render() {
    let { id , hide} = this.props;
    return (
      <div className={`col-12 col-lg-4 ${hide ? "web-search":""}`}>
        <div className="selected-date-times">
          <ListGroup>
            <p>Selected Schedule:</p>

     {this.state.studioForm.length < 1 ? <ListGroupItem className="text-muted select-book-time"> Please Choose Date And Time you would like to book.
     </ListGroupItem>
       :
       this.state.studioForm.map((sched, i)=>{
       
       return <ListGroupItem key={i} className="text-muted select-book-time"> Date: {sched.singleDatePicker} <br/>Time In: {sched.timeIn} {" "}
       Time Out: {sched.timeOut}</ListGroupItem>
     })}
        </ListGroup>
        <hr />
        </div>
        <div className="hotel-reservation--area mb-100">
        <form onSubmit={this.handleSubmit}>
        <StudioTemplate addForm={this.addForm} handleSubmit={this.handleSubmit} addform={this.addForm}/>
      {this.state.studioForm < 1 ? "": 
       <button type="submit" className="btn roberto-btn w-100">
                Reserve 
              </button>
      }
              </form> 
             
      </div>
     </div>
    );
  }
}

export default withRouter(SingleStudioSideFilter);
