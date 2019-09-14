import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLocation, fetchStudio} from '../../actions';
import StudioSearchTemplate from './sub_components/StudioSearchTemplate';
import StudioSearchHeader from './sub_components/StudioSearchHeader';
import StudioSideFilter from './sub_components/StudioSideFilter';
import './css/studio.css';





class StudioSearch extends Component {
  constructor(props){
    super(props);
this.state = {

  filterStudioType: "All",
  filterGuest: 0,
  zip: null,
  miles: '',
  time: "",
  day: "",
  availibility:[],
  guest: "",
  state: "",
location: this.props.match.params.location === 'All' ? '': this.props.match.params.location || '',
  reveal: true,
  filterArr: "",
  longLat: [], 
  studioType: this.props.match.params.search || '',
  guest:0,
  startDate: '',
  applyDate: '',
  startTime: '',
}

  }

  componentDidMount(){
 
    this.props.fetchLocation()
    this.props.fetchStudio()
 
      
  }


  handleChangeStart=(date)=> {
  
    this.setState({
      startDate: date
    });

  } 

featureType =()=>{
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let  filterArr=[...this.props.studio]
console.log(days[3])
let search = filterArr 
.filter(studio=> this.state.location === '' ? studio.city: studio.city.toLowerCase().match(this.state.location.toLowerCase())  || studio.postalCode.toLowerCase()===this.state.location.toLowerCase())
.filter(studio =>(this.state.studioType==='' ? studio.studioType: studio.studioType ===this.state.studioType))
// .filter((studio)=> this.state.applyDate === '' ? studio.availibility : studio.availibility
// .filter(studio=>studio.day.toLowerCase() === days[new Date(this.state.applyDate).getDay()].toLowerCase()) !='')
// .filter((studio)=> this.state.applyDate === '' ? studio.availibility : studio.availibility
// .filter(studio=>this.state.startDate==='' ? studio.startDate: this.state.startDate === studio.startDate) !='')
.filter((studio)=> this.state.applyDate === '' ? studio.availibility : studio.availibility
.filter(studio=>studio.day === days[new Date(this.state.applyDate).getDay()]) !='')
.map((studio)=>{

                return (
                <StudioSearchTemplate
                key={studio._id} 
                studioImage={studio.studioImage}
                studioName={studio.studioName}
                price={studio.price} 
                _id={studio._id} 
                studioType={studio.studioType}
                city={studio.city}
                studioType={studio.studioType}
                availibility={studio.availibility}
                startDate={this.state.startDate}
                handleChangeStart={this.handleChangeStart}
                />) })
                // .filter(studio =>(studio.availibility.startDate.getDay() === this.state.startDate))
              
   return search


    }

 



handleAvailibility = (e) =>{
  e.preventDefault();
  let days = ["Sunday"]

let location = e.target.location.value;
let studioType = e.target.studioType.value
// let guest = e.target.guest.value
let applyDate = e.target.startDate.value
this.setState({location, studioType,  applyDate})
}

handleChange =(e)=>{
  this.setState({search: e.target.search.value})
}



handlePrice =()=>{
  let  filterArr=[...this.props.studio]
  let price=filterArr.map(studio =>{
    return studio.price
    }).sort();

     return price
}

handleDropDown =(options)=>{
  let  filterArr=[...this.props.studio]
 let data =[];
  if (options === 'studioType'){
 
  let studioType=filterArr
  .map(studio =>{

    return (data.push(studio.studioType))
    })


     return [...new Set(data)]
  }
  let group=filterArr.map(studio =>{
    
    return data.push(studio.guest)
    })
 return [...new Set(group)]
     
  
}

  render() {
    if(!this.props.studio || !this.props.locate){
      return 'Loading...'
    }
 let {location, startDate, studioType} = this.state;

    return (
<section>
  <div className="header-area">

<StudioSearchHeader />
</div>

      <div className="roberto-rooms-area section-padding-100-0">
        
                 
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
                   
            

                {this.featureType()}
                  
                    <nav className="roberto-pagination wow fadeInUp mb-100" data-wow-delay="1000ms">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next <i className="fa fa-angle-right"></i></a></li>
                        </ul>
                    </nav>
                </div>

             <StudioSideFilter location={location} 
             submit={this.handleAvailibility} priceLow={this.handlePrice()[0]} 
             priceHigh={this.handlePrice().pop()}
            studioType={studioType}
            group={this.handleDropDown()}
            startDate={startDate}
            handleChangeStart={this.handleChangeStart}
             />
          
          
            </div>
        </div>
    </div>
    </section>
    );
  }
}



function mapStateToProps({locate, studio}) {
  return { locate , studio};
}

export default connect(mapStateToProps, {  fetchLocation, fetchStudio })(StudioSearch);



