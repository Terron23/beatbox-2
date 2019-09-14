import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import { fetchUser } from '../actions';
import { Link } from 'react-router-dom';
import Availibility from './Availibility'
import Title from './assets/Title'
import DropDown from './assets/DropDown'
import Input from './assets/Input'
import TimeDropDown from './assets/TimeDropDown'



class ListStudio extends Component {
constructor(props){
super(props);
this.state ={
    files: null,
    url: null,
    alert: "d-none",
    dates: [],
    from: [],
    formControl: null,
    studioName:"",
    region: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
    venue: ['Home', 'Business', 'Online'],
    studiotype: ['Recording - Music', 'Recording - Podcast/Radio', 'Art', 'Film', 'Yoga', 'Spa', 'Photography'],
    dates: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
   
}
}


componentDidMount(){
    this.props.fetchUser()
}


handleFiles = (event) => {
   console.log(event.target.files[0])

  this.setState({files : event.target.files[0]})
}





handleSubmit = (event) => {
event.preventDefault();


//console.log(files[0])
let name = event.target.name1.value
let address1 = event.target.address1.value
let address2 =  event.target.address2.value
let postalCode = event.target.postalCode.value
let city = event.target.city.value
let region = event.target.region.value
let email= event.target.email.value
let phone = event.target.phone.value
let venue = event.target.venue.value
let studioName =  event.target.studioName.value
let price =  event.target.price.value
let rules = ""
let guest = 0
let studioType = event.target.studioType.value
// let hoursOfOperation = event.target.hoursOfOperation.value
let files = this.state.files
let studioImage; 


const formData = new FormData();
formData.append('file', files)
formData.append('upload_preset', 'nyv0ihyq')

axios.post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)
.then(cloudResponse=>{
    let studioImage = cloudResponse.data.url;
    axios.post('/api/post-listing', 
        {studioName, price, rules, name, 
        email,address1, address2, postalCode, city, region, phone, 
        venue,  studioImage, guest, studioType}).
        then(res=>{
           this.props.history.push(`/availibility/${studioName}/${res.data}`)
        })
        console.log(cloudResponse.data)

    
}).catch(err=>console.log(err))
}

handleStudioTypes =()=>this.state.studiotype.map(types=><option>{types}</option>);


handleVenue =()=>this.state.venue.map((types , i) => <option key={i}>{types}</option>)


handleDropDown =()=> this.state.dates.map((types , i) => <option key={i}>{types}</option>)




handleClick =(e)=>{
    e.preventDefault()
    if(this.state.alert === 'd-none'){
    this.setState({alert: "alert alert-success"});
    }
    else{
        this.setState({alert: "d-none"});
    }
}

handleRegion =()=>{
    return this.state.region.map((zip,i)=>{
   return <option key={i}>{zip}</option>
     })
   }

  render() {
      if (!this.props.auth) {
          return ''
      }
      const { auth } = this.props
      const { alert , studioName} = this.state
    return (
    <div className="container-fluid site-section">
    <div className={`text-center fixed-top ${alert}`}>
    <span onClick={this.handleClick}>X</span>
    <p>New Studio has been added</p>
    </div>
  
    <div className="container">
   <Title header="Add Your Studio" />
    	 <form id="myForm" className="form-horizontal col-md-6" onSubmit={this.handleSubmit}>
        
            <fieldset>
            <Input name="name1" type="text" label="Contact Name"  placeholder="Enter Full Name Here" />
            <Input name="studioName" label='Studio Name' type="text" placeholder="Enter the Name of Your Studio" />
            <Input name="price" label='Price' type="number" placeholder="Enter your prices" />
            <DropDown options={this.handleStudioTypes} name="studioType" label="Studio Type" placeholder="Enter Studio Type"/>
             <DropDown options={this.handleVenue} name="venue" type="text" label="Venue"  placeholder="Enter Venue"/>
            
        
           
          <Input name="email" type="email" label="Bussiness Email"  placeholder="Email" />
          <Input name="phone" type="phone" label="Bussiness Phone Number"  placeholder="Enter Phone Number" />
          <Input name="address1" type="text" label="Address1"  placeholder="Enter Street Address" />
          <Input name="address2" type="text" label="Address2"  placeholder="Enter Street Address" />
          <Input name="city" type="text" label="City"  placeholder="Enter Street City" />
          <DropDown options={this.handleRegion} name="region" type="text" label="State"  placeholder="Enter State"/>
          <Input name="postalCode" type="text" label="Zip Code"  placeholder="Enter Zip Code" />

          <Input name="file" type="file" label="AddImages"  placeholder="Upload Photos" handleChange={this.handleFiles} required/>

                
{this.state.formControl}
<hr />

   <div className="form-group row">
   
<button className="btn btn-secondary" type="submit">Save & Continue</button>
</div>
</fieldset>
        </form>

      </div>
      </div>
    );
  }
}




function mapStateToProps({ studio, auth }) {
    return { studio, auth };
  }
  
  export default connect(mapStateToProps, { fetchUser })(ListStudio);
