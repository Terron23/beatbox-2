import React, { Component } from 'react';

import {connect} from 'react-redux';
import {fetchLocation, fetchStudio} from '../../actions';
import Nav from '../Home/Nav/Nav';
import TopNav from '../Home/Nav/TopNav';
import NavSearch from '../Home/Nav/NavSearch';
import StudioSearchTemplate from './sub_components/StudioSearchTemplate';
import Header from './sub_components/header';
import StudioSideFilter from './sub_components/StudioSideFilter'






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
search: '',//this.props.match.params.search.replace(/[^a-z0-9+]+/gi, ' '),
location: '',//this.props.match.params.location.replace(/[^a-z0-9+]+/gi, ' '),
  reveal: true,
  filterArr: "",
  longLat: [], 
  studioType: '',
  guest:0,
  startDate: '',
  applyDate: '',
}

  }

  componentDidMount(){
    let longLat =[]
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
let test = [...filterArr]
console.log("test", test.filter(studio => studio.availibility.filter(studio=>studio.day.includes('Sunday'))))
let search = filterArr 
.filter(studio=> this.state.location === ''? studio.city: studio.city.toLowerCase().match(this.state.location.toLowerCase())  || studio.postalCode.toLowerCase()===this.state.location.toLowerCase())
.filter(studio =>(this.state.studioType==='' ? studio.studioType: studio.studioType ===this.state.studioType))
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

 

handleTime =(e)=>{

  this.setState({time: e.target.value})
  
  
  }




handleAvailibility = (e) =>{
  e.preventDefault();
let location = e.target.location.value;
let studioType = e.target.studioType.value
let guest = e.target.guest.value
let applyDate = e.target.startDate.value
console.log(applyDate)
this.setState({location, studioType, guest, applyDate})
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

console.log("data", [...new Set(data)])
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
 let {location, startDate} = this.state;

    return (
<section>
  <div className="header-area">
<NavSearch />
  <TopNav />
<Nav />
<Header />
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
            studioType={this.handleDropDown('studioType')}
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



