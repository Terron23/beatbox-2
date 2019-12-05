import React, { Component } from "react";
import TimeDropDown from "../../../assets/TimeDropDown";
import FormAttr from "./FormAttr";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
 import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";


const StudioTemplate =({handleChangeStart})=>{
 return (
 <form>
   <FormAttr label="Check In Date">
     <Calendar  
     selectRange={false} 
     onChange={handleChangeStart} 
    /> 
   </FormAttr>

   <FormAttr label>
     <TimeDropDown col="6" label="Time In" name="timeIn" id='timein' />

     <TimeDropDown col="6" label="Time Out" name="timeOut" id='timein' />
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
    alert(date)
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
 <StudioTemplate addForm={this.addForm} handleChangeStart={this.handleChangeStart} />).map(s=>s);
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
              <Link to={`/payment/${id}?startDate=${startDate.toString().substring(0,15)}`} className="btn roberto-btn w-100">
                Book 
              </Link>
              </div>
      </div>
    );
  }
}

export default SingleStudioSideFilter;
