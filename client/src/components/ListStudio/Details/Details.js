import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser, fetchStudioType } from "../../../actions";
import Title from "../../assets/Title"
import Input from "../../assets/Input";
import TextArea from "../../assets/TextArea";


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: [],
      formControl: null,
      studioName: "",
    
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

 

  handleSubmit = event => {
    event.preventDefault();

    let capacity = event.target.capacity.value;
    let equipment = event.target.equipment.value;
    let services = event.target.services.value;
    let description = event.target.description.value;
    let studioname= this.props.match.params.studioName;
    let studioid= this.props.match.params.id;


 
        axios
          .put("/api/post-details", {
            capacity,
            equipment,
            services,
            description,
            studioname,
            studioid
          })
          .then(res => {
            this.props.history.push(`/confirmation`);
          })
      .catch(err => console.log(err));
  };



  

  render() {
    if (!this.props.auth || !this.props.studiotype) {
      return "Loading";
    }
    return (
      <div className="container-fluid site-section">
        <div className="container">
          <Title header="Add Studio Details" />
            <div className="row">
          <div
            className="col-md-2"
            onSubmit={this.handleSubmit}
          ></div>
          <form
            id="myForm"
            className="form-horizontal col-md-8 "
            onSubmit={this.handleSubmit}
          >
            <fieldset>
              <Input
                name="capacity"
                type="text"
                label="Capacity"
                placeholder="Enter Number of People Allowed"
                classProp="form-style-8"
              />
              <Input
                name="equipment"
                label="Add Equipment"
                type="text"
                placeholder="Enter Name of Equipment"
                classProp="form-style-8"
              />
              <Input
                name="services"
                type="text"
                label="Services"
                placeholder="Ex: Production, Audio Engineering, Teaching"
                classProp="form-style-8"
              />
            
           
              <TextArea
                name="description"
                type="textarea"
                label="Studio Description"
                placeholder="Enter Studio's Description "
                classProp="form-style-8"
              />
             
            
              <hr />

              <div className="form-group row">
                <button className="btn roberto-btn w-100" type="submit">
                  Save & Continue
                </button>
              </div>
            </fieldset>
          </form>

          <div
            className="col-md-2"
            onSubmit={this.handleSubmit}
          ></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ studiotype, auth }) {
  return { studiotype, auth };
}

export default connect(mapStateToProps, { fetchUser, fetchStudioType })(Details);
