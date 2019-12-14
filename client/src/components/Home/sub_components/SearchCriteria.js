import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudioType } from "../../../actions";

class SearchCriteria extends Component {
  componentDidMount() {
    this.props.fetchStudioType();
  }

  render() {
    if (!this.props.studiotype) {
      return "Loading";
    }
    let { title, name, studiotype } = this.props;
    return (
      <div className="col-6 col-md-2 col-lg-3">
        <label htmlFor={title}>{title[0].toUpperCase()+title.slice(1)}</label>
        <select name={name} id={title} className="form-control">
          <option value="">All Studios</option>
          {studiotype.map(m => (
            <option value={m.studioType}>{m.studioType}</option>
          ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ studiotype }) {
  return { studiotype };
}

export default connect(mapStateToProps, { fetchStudioType })(SearchCriteria);
