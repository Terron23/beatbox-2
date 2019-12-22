import React, { Component } from "react";
import TimeDropDown from "../../../Reusable/TimedropDown/TimeDropDown";
import FormAttr from "./FormAttr";
import StudioHuntDatePicker from '../../../Reusable/DatePicker/StudioHuntDatePicker';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { withRouter } from 'react-router';



const StudioTemplate =({addForm, studioForm, 
  startDate, handleChangeStartProps, 
  revealProps, 
  closeSelectBtn,
  handleRevealProp,
  handleTime,
  addField
})=>{
 return (
 <div>
     <ListGroup className="select-book-time-group">
            <p>Selected Schedule:</p>
            {studioForm.length < 1 ? 
            <ListGroupItem className="text-muted select-book-time"> 
            Please Choose Date And Time you will like to reserve. 
            </ListGroupItem>
              :
              studioForm.map((sched, i) => {
                return <ListGroupItem key={sched.singleDatePicker} 
                className="text-muted select-book-time"
                id={`temp_${i}`}
                > 
                <span onClick={()=>closeSelectBtn(`close-select-time-btn${i}`)}
                className="pull-right add-time"
                >
                  x
                </span>
                Date: {sched.singleDatePicker} <br />Time In: {sched.timeIn} {" "}
                  Time Out: {sched.timeOut}</ListGroupItem>
              })}
          </ListGroup>
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
       required={false}
       stateText={startDate}
       handleChangeStartProps={handleChangeStartProps}
       revealProps={revealProps}
       handleRevealProp={handleRevealProp}
       
    />   
   </FormAttr>

   <div className="row">
<div className="col-6">
   <FormAttr label="Time In" >
     <TimeDropDown  name="timeIn" id='timein'  handleChange={(e)=>handleTime(e, 'timein')} />
   </FormAttr>
   </div>
   <div className="col-6">
   <FormAttr label="Time Out" >
     <TimeDropDown  name="timeOut" id='timeout'  handleChange={(e)=>handleTime(e, 'timeout')} />
   </FormAttr>
   <p className="add-time" onClick={addForm}>+{addField}</p>
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
      studioForm:[],
      clearCal:false,
      reveal: false,
      timeIn: "",
      timeOut: "",
      addField: "Add Date & Time"
    };
  }

  closeSelectBtn=(id)=>{
   let form= this.state.studioForm;
   form.splice(id, 1);

   this.setState({studioForm:form, addField: form.length < 1 ? 'Add Date & Time' : this.state.addField})
  }

  addForm = (e) => {

    let timeIn = this.state.timeIn;
    let timeOut = this.state.timeOut;
    let startDate = this.state.startDate
    let obj =    {
      "timeIn": timeIn,
      "timeOut": timeOut,
      "singleDatePicker": startDate.toString().substring(0, 15)
    }
    let values = [obj]
    
    let form = [...this.state.studioForm, ...values];

  let error = Object.values(obj);
  let noError = 0;
  for(let i=0; i<error.length; i++){
    if(error[i]===""){
      noError=1;
      alert("Please Fill In All Values");
      break;
    }
  }
if(noError < 1){
    this.setState({ studioForm: form , 
    startDate:"", 
    timeIn:"", 
    timeOut:"",
     addField: "Add More Date & Times"})
    this.myFormRef.reset();
    }
  else{
    noError=0;
  }
  }

  handleChangeStartProps = date => {
    this.setState({
      startDate: date,
      reveal:false,
    });
  };


handleTime =(e, id)=>{
if(id==='timein'){
  this.setState({timeIn:e.target.value})
}
else{
  this.setState({timeOut:e.target.value})
}
  }


  handleReveal =()=>{
   

    if(this.state.reveal){
      this.setState({reveal:false})
    }
    else{
      this.setState({reveal:true})
    }
      }

  handleSubmit =(e)=>{
    e.preventDefault();
    let {id}=this.props;
    let {studioForm}=this.state;
    let queryString =""   
   studioForm.map(q=>{
     queryString+="timeIn="+q.timeIn+"?timeout="+q.timeOut+"?singleDatePicker="+q.singleDatePicker+"?";
   })
  

  this.props.history.push(`/payment/${id}?${queryString.slice(0, -1)}`);
   
  }




  render() {
    let { studioForm,startDate, reveal, addField } = this.state;
    return (
        <div className="hotel-reservation--area mb-100">
        <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>

        <StudioTemplate 
        addForm={this.addForm} 
        handleSubmit={this.handleSubmit} 
        addForm={this.addForm} studioForm={studioForm} 
        startDate={startDate}
        handleChangeStartProps={this.handleChangeStartProps}
        handleRevealProp={this.handleReveal}
        revealProps={reveal}
        closeSelectBtn={this.closeSelectBtn}
        handleTime={this.handleTime}
        addField={addField}
        />
    
       <button type="submit" className="btn roberto-btn w-100">
                Reserve 
              </button>
      
              </form> 
             
    
     </div>
    );
  }
}

export default withRouter(SingleStudioSideFilter);
