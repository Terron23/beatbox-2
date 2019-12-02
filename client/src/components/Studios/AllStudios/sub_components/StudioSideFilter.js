import React, { Component } from "react";
import SearchCriteria from "./SearchCriteria";
import FormAttr from "./FormAttr";
import Calendar from 'react-calendar';

class StudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      revealCal: false,
    };
  }

  handleReveal = e => {
    e.preventDefault();
    if (this.state.revealCal === false) {
      this.setState({ revealCal: true });
    } else {
      this.setState({ revealCal: false });
    }
  };

  render() {
    let {
      children,
      submit,
      priceLow,
      priceHigh,
      location,
      search,
      group,
      startDate,
      handleChangeStart,
      id
    } = this.props;
    let { active, revealCal } = this.state;
    return (
      <div className="col-12 col-lg-4">
        <div className="hotel-reservation--area mb-100">
          <form onSubmit={submit}>
            <FormAttr  label="Location">
              <input
                type="text"
                defaultValue={location}
                className="input-small form-control"
                id="location"
                name="location"
                placeholder="City or Zip"
                autoComplete="off"
              />
            </FormAttr>

            <FormAttr>
              <SearchCriteria
                title="Studio Type"
                search={search}
                name="studioType"
                col="12"
              />
            </FormAttr>
            <FormAttr label="Check In Date">
            <input
                type="text"
               value={startDate.toString().substring(0, 15)}
                className="input-small form-control"
                id="startDate"
                name="startDate"
                placeholder="All Available Dates"
                autoComplete="off"
                onClick={this.handleReveal}
                
              
              />
              
          <Calendar selectRange={false} 
          onChange={handleChangeStart} 
          className={revealCal ? "" : "d-none"} 
          /> 
       
            </FormAttr>

            <div className="form-group mb-30">
              <div className="row no-gutters"></div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn roberto-btn w-100">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StudioSideFilter;
