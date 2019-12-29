import React, { Component } from "react";
import TimeDropDown from "../../../Reusable/TimedropDown/TimeDropDown";
import FormAttr from "./FormAttr";
import StudioHuntDatePicker from "../../../Reusable/DatePicker/StudioHuntDatePicker";
import AlertMessage from "../../../Reusable/Alert/Alert";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { withRouter } from "react-router";

const StudioTemplate = ({
  addForm,
  studioForm,
  startDate,
  handleChangeStartProps,
  revealProps,
  closeSelectBtn,
  handleRevealProp,
  handleTime,
  addField,
  calError,
  timeOutErr,
}) => {
  return (
    <div>
      <ListGroup className="select-book-time-group">
        <p>Selected Schedule:</p>
        {studioForm.length < 1 ? (
          <ListGroupItem className="text-muted select-book-time">
            Please Choose Date And Time you will like to reserve.
          </ListGroupItem>
        ) : (
          studioForm.map((sched, i) => {
            return (
              <ListGroupItem
                key={sched.singleDatePicker}
                className="text-muted select-book-time"
                id={`temp_${i}`}
              >
                <span
                  onClick={() => closeSelectBtn(`close-select-time-btn${i}`)}
                  className="pull-right add-time"
                >
                  x
                </span>
                Date: {sched.singleDatePicker} <br />
                Time In: {sched.timeIn} Time Out: {sched.timeOut}
              </ListGroupItem>
            );
          })
        )}
      </ListGroup>
      <FormAttr label="Check In Date">
        {calError}
        <StudioHuntDatePicker
          type="text"
          classNames="input-small form-control startDate"
          id="singleDatepicker"
          name="singleDatepicker"
          placeholder=""
          autoComplete="off"
          selectRange={false}
          calendarClass={"startDate"}
          required={false}
          stateText={startDate}
          handleChangeStartProps={handleChangeStartProps}
          revealProps={revealProps}
          handleRevealProp={handleRevealProp}
          viewAll={false}
        />
      </FormAttr>

      <div className="row">
        <div className="col-6">
          <FormAttr label="Time In">
            <TimeDropDown
              name="timeIn"
              id="timein"
              handleChange={e => handleTime(e, "timein")}
            />
          </FormAttr>
        </div>
        <div className="col-6">
          <FormAttr label="Time Out">
            <TimeDropDown
              name="timeOut"
              id="timeout"
              handleChange={e => handleTime(e, "timeout")}
            />
          </FormAttr>
        </div>
        
      </div>
      <div className="row col-12">
        <p className="error text-center">{timeOutErr}</p>
        </div>
      
        <p className="add-time" onClick={addForm}>
            +{addField}
          </p>

    </div>
  );
};
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri",
  "Sat",
];
const date = days[new Date().getDay()] +" "+month[new Date().getMonth()] +" "+ String(new Date().getDate()).padStart(2, '0')+" "+new Date().getFullYear();
class SingleStudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      startDate: date,
      studioForm: [],
      clearCal: false,
      reveal: false,
      timeIn: "",
      timeOut: "",
      addField: "Add Date & Time",
      hide: "d-none",
      charge: "",
      calError: "",
      timeInErr:"",
      timeOutErr:"",
    };
  }

  closeSelectBtn = id => {
    let form = this.state.studioForm;
    form.splice(id, 1);

    this.setState({
      studioForm: form,
      addField: form.length < 1 ? "Add Date & Time" : this.state.addField
    });
  };

  handleTimeDifference = (timeIn, timeOut, date) => {
    let timeInMath = timeIn
      .substring(0, timeIn.length - 2)
      .replace(/" "/g, "")
      .replace(":", "");
    let timeOutMath = timeOut
      .substring(0, timeOut.length - 2)
      .replace(/" "/g, "")
      .replace(":", "");
    let price = timeOutMath - timeInMath;
    console.log(date)
    if(date < Date.now()){
      this.setState({calError: "Date Should be Greater or Equal to Today!"})
      return false;
    }
    if (
      price < 100 ||
      (timeIn.slice(-2) === "PM" && timeOut.slice(-2) === "AM")
    ) {
      this.setState({timeOutErr: "Book Time Minumum 1 Hour"})
      return false;
    }
    else{
      this.setState({charge:price})
    }
  };

  addForm = e => {
    let timeIn = this.state.timeIn;
    let timeOut = this.state.timeOut;
    let startDate = this.state.startDate;
    let obj = {
      timeIn: timeIn,
      timeOut: timeOut,
      singleDatePicker: startDate.toString().substring(0, 15)
    };
   
    const timeDiff =this.handleTimeDifference(timeIn, timeOut, startDate)
    if(timeDiff===false){
      return;
    }

    let values = [obj];

    let form = [...this.state.studioForm, ...values];


    let error = Object.values(obj);
    let noError = 0;

    for (let i = 0; i < error.length; i++) {
      if (error[i] === "") {
        noError = 1;
        alert("Please Fill in All Values");
        break;
      }
    }
    if (noError < 1) {
      this.setState({
        studioForm: form,
        startDate: "",
        timeIn: "",
        timeOut: "",
        addField: "Add More Date & Times",
        calError:"",
        timeOutErr: ""
      });
      this.myFormRef.reset();
    } else {
      noError = 0;
    }
  };

  handleChangeStartProps = date => {
    this.setState({
      startDate: date,
      reveal: false
    });
  };

  handleTime = (e, id) => {
    if (id === "timein") {
      this.setState({ timeIn: e.target.value });
    } else {
      this.setState({ timeOut: e.target.value });
    }
  };

  handleReveal = () => {
    if (this.state.reveal) {
      this.setState({ reveal: false });
    } else {
      this.setState({ reveal: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let { id } = this.props;
    let { studioForm } = this.state;

    if (studioForm.length < 1) {
      alert("Please fill out the form.");
    } else {
      let queryString = "";
      studioForm.map(q => {
        queryString +=
          "Time In=" +
          q.timeIn +
          "?Time Out=" +
          q.timeOut +
          "?Date=" +
          q.singleDatePicker +
          "?";
      });

      this.props.history.push(`/payment/${id}?${queryString.slice(0, -1)}`);
    }
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ hide: "d-none" });
  };

  render() {
    let { studioForm, startDate, reveal, addField, hide , timeInErr, timeOutErr, calError} = this.state;
    return (
      <div className="hotel-reservation--area mb-100">
       
        <form onSubmit={this.handleSubmit} ref={el => (this.myFormRef = el)}>
          <StudioTemplate
            addForm={this.addForm}
            handleSubmit={this.handleSubmit}
            addForm={this.addForm}
            studioForm={studioForm}
            startDate={startDate}
            handleChangeStartProps={this.handleChangeStartProps}
            handleRevealProp={this.handleReveal}
            revealProps={reveal}
            closeSelectBtn={this.closeSelectBtn}
            handleTime={this.handleTime}
            addField={addField}
            calError={calError}
            timeInErr={timeInErr}
            timeOutErr={timeOutErr}
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
