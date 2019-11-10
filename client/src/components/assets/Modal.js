import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
