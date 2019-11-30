import React, { Component } from "react";
import TimeDropDown from "../../../assets/TimeDropDown";
import FormAttr from "./FormAttr";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
 import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";


const StudioTemplate =({addForm})=>{
 return (
 <form>
   <FormAttr label="Check In Date">
     <Calendar  selectRange={false} onChange={this.handleChangeStart} selectRange={true} /> 
   </FormAttr>

   <FormAttr label>
     <TimeDropDown col="6" label="Time In" name="timeIn" id='timein' />

     <TimeDropDown col="6" label="Time Out" name="timeOut" id='timein' />
     <span style={{"color":"#34CACA"}} onClick={addForm}>+Add More Time</span>
   </FormAttr>
 </form>)
}



class SingleStudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      startDate: "",
      studioForm: []
    };
  }

  handleChangeStart = date => {
    console.log(date)
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  showStudioForm=()=>{
 return this.state.studioForm.concat(
 <StudioTemplate addForm={this.addForm} />).map(s=>s);
  }

  addForm =()=>{
    let form =  <StudioTemplate addForm={this.addForm} />
    this.setState({studioForm:this.state.studioForm.concat(form)})
  }

  render() {
    let { id } = this.props;
    let { startDate } = this.state;
    return (
      <div className="col-12 col-lg-4">
        <div className="hotel-reservation--area mb-100">
       {this.showStudioForm()}
              <Link to={`/payment/${id}`} className="btn roberto-btn w-100">
                Book 
              </Link>
              </div>
      </div>
    );
  }
}

export default SingleStudioSideFilter;
