import React, { Component } from "react";
import Calendar from 'react-calendar';
import './css/datepick.css'
import {Popover, PopoverContent, PopoverTitle, Overlay} from 'react-bootstrap';




class StudioHuntDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state={
      reveal:false,
      startDate: ""
    }
  };

  handleReveal =()=>{
    

    if(this.state.reveal){
      this.setState({reveal:false})
    }
    else{
      this.setState({reveal:true})
    }
      }

      handleChangeStart = date => {
        let id = this.props.id
     document.getElementById(`${id}`).focus();
 
        this.setState({
          startDate: date,
          reveal: false
        });
       
      };

   
  
    
  render() {
    let {
   type,
   classNames,
   id,
   name,
   placeholder,
   autoComplete,
   selectRange,
   calendarClass,
  move,
  required=false,
  stateText,
  handleChangeStartProps,
  revealProps,
  handleRevealProp
    } = this.props;
    let {reveal, startDate}=this.state;
  
    return (<div className="studiohunt-datepicker-tag">
            <input
                type={type}
                value={ stateText ? stateText.toString().substring(0, 15): startDate.toString().substring(0, 15)}
                className={`${classNames}`}
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onClick={handleRevealProp ? handleRevealProp: this.handleReveal}
                required={required}
              />
  
          <Calendar selectRange={selectRange} 
          onChange={handleChangeStartProps ? handleChangeStartProps:this.handleChangeStart} 
          className={`${revealProps ? revealProps: reveal ? calendarClass: "d-none" } ${move ? "studiohunt-datepicker-calendar-class" : ""}`} 
          /> 
       </div>
         
    );
  }
}

export default StudioHuntDatePicker;
