import React, { Component } from "react";
import SearchCriteria from "./SearchCriteria";
import FormAttr from "./FormAttr";
// import Calendar from 'react-calendar';

class StudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  reveal = e => {
    e.preventDefault();
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
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
    let { active } = this.state;
    return (
      <div className="col-12 col-lg-4">
        <div className="hotel-reservation--area mb-100">
          <form onSubmit={submit}>
            <FormAttr Kob label="Location">
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
             {/* <Calendar selectRange={false} onChange={handleChangeStart} /> */}
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
