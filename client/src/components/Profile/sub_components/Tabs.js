import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view1: "d-none",
      view2: "d-none",
      view3: "d-none",
      view4: "d-none"
    };
  }

  handleView = (e, id) => {
    e.preventDefault();
    if (id === "studios") {
      this.setState({
        view1: "active",
        view2: "d-none",
        view3: "d-none",
        view4: "d-none"
      });
    } else if (id === "visited") {
      this.setState({
        view2: "active",
        view1: "d-none",
        view3: "d-none",
        view4: "d-none"
      });
    } else if (id === "profile") {
      this.setState({
        view3: "active",
        view1: "d-none",
        view2: "d-none",
        view4: "d-none"
      });
    } else if (id === "uploads") {
      this.setState({
        view4: "active",
        view1: "d-none",
        view2: "d-none",
        view3: "d-none"
      });
    }
  };

  render() {
    let { view1, view2, view3, view4 } = this.state;
    let { studios, userForm, booked } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <a
              href=""
              className="is-active"
              onClick={e => this.handleView(e, "studios")}
            >
              Your Studios
            </a>
          </div>
          <div className="col-md-3">
            <a
              href=""
              className="is-active"
              onClick={e => this.handleView(e, "visited")}
            >
              Studios You Visited
            </a>
          </div>
          <div className="col-md-3">
            <a
              href=""
              className="is-active"
              onClick={e => this.handleView(e, "profile")}
            >
              Profile
            </a>
          </div>

          <div className="col-md-3">
            <a
              href=""
              className="is-active"
              onClick={e => this.handleView(e, "uploads")}
            >
              Uploads
            </a>
          </div>
        </div>
        <hr />
        <div className={view1}>{studios}</div>

        
        <div className={view2}>
      
        </div>
        <div className={view3}>
          {userForm}
        </div>

        <div className={view4}>


        </div>
      </div>
    );
  }
}

export default Tabs;
