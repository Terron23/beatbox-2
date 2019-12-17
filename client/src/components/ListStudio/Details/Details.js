import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser, fetchStudioType } from "../../../actions";
import Title from "../../assets/Title"
import Input from "../../assets/Input";
import TextArea from "../../assets/TextArea";
import MultiSelect from "../../Reusable/MultiSelect/MultiSelect";
import '../AddStudioForm/css/style.css'


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
    let include = event.target.include.value;
    let studioname= this.props.match.params.studioName;
    let studioid= this.props.match.params.id;


 
        axios
          .put("/api/post-details", {
            capacity,
            equipment,
            services,
            description,
            studioname,
            include,
            studioid
          })
          .then(res => {
            this.props.history.push(`/view-studio/${studioid}`);
          })
      .catch(err => console.log(err));
  };

handleOptions =()=>{
return ['Audio', 'Engineering', 'Production', 'Coaching', 'Free Wifi', 'Drinks', 'Food', 'Television']
.map((op, i)=><option selected="true" key={i}>{op}</option>)
}

  

  render() {
    if (!this.props.auth || !this.props.studiotype) {
      return "Loading...";
    }
    return (
      <div className="container-fluid site-section">
        <div className="container">
          <Title header="Add Studio Details" />
            <div className="row">
          <div
            className="col-md-2"
          ></div>
          <form
            id="myForm"
            className="form-horizontal col-md-8 "
            onSubmit={this.handleSubmit}
          >
            <fieldset>
            <TextArea
                name="description"
                type="textarea"
                label="Studio Description"
                placeholder="Enter Studio's Description "
                classProp="form-style-1"
              />

              <Input
                name="capacity"
                type="text"
                label="Capacity"
                placeholder="Enter Number of People Allowed. Enter 0 if Undecided."
                classProp="form-style-1"
              />
              <Input
                name="equipment"
                label="Add Equipment"
                type="text"
                placeholder="Please list Any Notable Equipment You May Use."
                classProp="form-style-1"
              />


              <MultiSelect
              options={['Parking', 'Lounge', 'Wi-Fi', 'Bathroom', 'Food & Beverages', 'Air & Heating']}
              label={'Amenities'}
              id={'services'}
              placeholder="Parking, Drinks, Wifi"
              custom={true}
              other_id="amen"
              text_id="amen_select"
              />

              <MultiSelect
              options={['Audio Engineer', 'Instructor', 'Assistant', 'Host']}
              label={'Include In Booking'}
              id={'include'}
              placeholder="Add Any Special Features or Resources Included with your Venue"
              custom={true}
              other_id="incl"
              text_id="incl_select"
                            />
            
              <hr />

              <div className="form-group">
                <button className="btn roberto-btn w-100" 
                type="submit">
                  Save & Continue
                </button>
              </div>
            </fieldset>
          </form>

          <div
            className="col-md-2"
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
