import React, { Component } from "react";
import TimeDropDown from "../../../assets/TimeDropDown";
import FormAttr from "./FormAttr";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

class SingleStudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      startDate: ""
    };
  }

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    let { id } = this.props;
    let { startDate } = this.state;
    return (
      <div className="col-12 col-lg-4">
        <div className="hotel-reservation--area mb-100">
          <form onSubmit={this.submit}>
            <FormAttr label="Check In Date">
              <DatePicker
                selected={startDate}
                onChange={this.handleChangeStart}
                className="form-control"
                name="startDate"
                autoComplete="off"
              />
            </FormAttr>

            <FormAttr label>
              <TimeDropDown col="6" label="Time In" name="timeIn" id='timein' />

              <TimeDropDown col="6" label="Time Out" name="timeOut" id='timein' />
            </FormAttr>

            <div className="form-group">
              <Link to={`/payment/${id}`} className="btn roberto-btn w-100">
                Book
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SingleStudioSideFilter;
