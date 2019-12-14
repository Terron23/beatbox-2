import React, { Component } from "react";
import TimeDropDown from "../../../Reusable/TimedropDown/TimeDropDown";
import FormAttr from "./FormAttr";
import { Link } from "react-router-dom";
import StudioHuntDatePicker from '../../../Reusable/DatePicker/StudioHuntDatePicker';



const StudioTemplate =({handleChangeStart, handleReveal, startDate, revealCal})=>{
 return (
 <form>
   <FormAttr label="Check In Date">
   <StudioHuntDatePicker  
        type="text"
        classNames="input-small form-control startDate"
        id="startDate"
        name="startDate"
        placeholder="All Available Dates"
        autoComplete="off"
        handleReveal={handleReveal}
        selectRange={false} 
       calendarClass={"startDate"} 
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
   </div>
   </div>
 </form>)
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
   
  }

  showStudioForm=()=>{
 return this.state.studioForm.concat(
 <StudioTemplate addForm={this.addForm} />).map(s=>s);
  }

  addForm =()=>{
    let form =  <StudioTemplate addForm={this.addForm} />
    this.setState({studioForm:this.state.studioForm.concat(form)})
  }

  render() {
    let { id , hide} = this.props;
    return (
      <div className={`col-12 col-lg-4 ${hide ? "web-search":""}`}>
        <div className="hotel-reservation--area mb-100">
       {this.showStudioForm()}
        <Link to={`/payment/${id}`} className="btn roberto-btn w-100">
                Reserve 
              </Link>
              </div>
      </div>
    );
  }
}

export default SingleStudioSideFilter;
