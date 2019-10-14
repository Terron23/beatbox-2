import React, { Component } from 'react';
import TimeDropDown from '../../../assets/TimeDropDown';
import FormAttr from './FormAttr'
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";


class SingleStudioSideFilter extends Component{
    constructor(props){
        super(props);
      this.state={
        active: false,
        startDate: '',
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



   render(){  
       let {children,  priceLow, priceHigh, location, studioType, group, id} = this.props;
       let {active, handleChangeStart, startDate} =this.state;
       console.log("hello", this.props)
       return(      
        <div className="col-12 col-lg-4">      
<div className="hotel-reservation--area mb-100">
    <form onSubmit={this.submit}>
                    
   <FormAttr label="Check In Date">

        <DatePicker 
        selected={startDate}
        onChange={handleChangeStart}
        className="form-control" 
        name="startDate" 
        autoComplete="off"
        />           
        </FormAttr>

        <FormAttr label>

        <TimeDropDown col="6" label="Time In" name="timeIn"/>



        <TimeDropDown col="6" label="Time Out" name="timeOut"/>

        </FormAttr>
    
        <div className="form-group">
            <Link  to={`/payment/${id}`} className="btn roberto-btn w-100">Book</Link>
        </div>
    </form>
</div>
</div>)
   }
}

export default SingleStudioSideFilter;