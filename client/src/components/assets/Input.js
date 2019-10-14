import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`form-group ${this.props.classProp}`}>
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input
          type={this.props.type}
          className="form-control"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
          defaultValue={this.props.value}
          multiple = {this.props.multiple=== "true"  ? true: false}
        />
      </div>
    );
  }
}

export default Input;
