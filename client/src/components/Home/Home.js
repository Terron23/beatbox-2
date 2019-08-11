import React, { Component } from 'react';
import FeaturedStudios from './FeaturedStudios';
import Header from './Header'
import InfoBubbles from '../assets/InfoBubbles';
import BG1 from '../../images/01.jpg'
import BG2 from  '../../images/02.jpg'
import BG3 from  '../../images/03.jpg'
import {connect} from 'react-redux';
import {fetchLocation, fetchStudio} from '../.././actions';
import Image from '../assets/Image';
import CardInfo from '../assets/CardInfo';
import About from './About';
// import StudioCards from './StudioCards'
import StudioType from './StudioType';
import Testimonials from './Testimonial';
import City from './City'
import PostStudio from './PostStudio'

class Home extends Component {



  componentDidMount(){
    this.props.fetchLocation()
    this.props.fetchStudio()
  }






  handleSubmit =(e)=>{
    e.preventDefault();
    let search = e.target.search.value==="" ? 'All' :e.target.search.value
    let location = e.target.location.value===""? 'All':e.target.location.value
    this.props.history.push('/search-studio/'+search+'/'+location)
  }

  render() {
    if(!this.props.locate || !this.props.studio){
      return ''
    }
    
const classProp = 'img-fluid rounded-circle image-gallery'
const img1 = <img src={`${BG1}`} className={`${classProp}`} style={{borderRadius: '50%'}} alt='img1'/>
const img2 = <img src={`${BG2}`} className={`${classProp}`} style={{borderRadius: '50%'}} alt='img2' />
const img3 = <img src={`${BG3}`} className={`${classProp}`} style={{borderRadius: '50%'}} alt='img3'/>
    return (
      <div>
        <Header 
        handleSubmit={this.handleSubmit} 
        locate={this.props.locate.city}
        history={this.props.history}
        />

<About />
{/* <StudioCards /> */}
<FeaturedStudios />
<PostStudio />
<Testimonials />
<StudioType />
<City />

    </div>

    );
  }
}


function mapStateToProps({locate, studio}) {
  return { locate , studio};
}

export default connect(mapStateToProps, {  fetchLocation, fetchStudio })(Home);

