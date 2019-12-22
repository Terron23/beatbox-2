import React, { Component } from "react";
import SearchCriteria from "../../../Reusable/SearchCriteria/SearchCriteria";
import FormAttr from "./FormAttr";
import StudioHuntDatePicker from '../../../Reusable/DatePicker/StudioHuntDatePicker'

class StudioSideFilter extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let {
      submit,
      location,
      search,
      hide,
      revealCal,
    } = this.props;
  
    return (
      <div className={`col-12 col-lg-4 ${hide}`}>
        <div className={`hotel-reservation--area mb-100`}>
          <form onSubmit={submit}>
            <FormAttr label="Location">
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
                col="col-12"
              />
            </FormAttr>
            <FormAttr label="Check In Date">

            <StudioHuntDatePicker 
              type="text"
              classNames="input-small form-control startDate"
              id="search-id"
              name="startDate"
              placeholder="All Available Dates"
              autoComplete="off"
            
          selectRange={false} 
          revealCal={revealCal}
          calendarClass={"startDate"} 
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
