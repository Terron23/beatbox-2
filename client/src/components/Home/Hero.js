import React, { Component } from 'react';
import Schedule from '../Schedule'
import Typist from 'react-typist';
import Navbar from './Nav/Nav'
import TopNav from './Nav/TopNav'
import bg1 from '../../images/01.jpg'
import bg2 from '../../images/02.jpg'
import bg3 from '../../images/bg-img/59.jpg'
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 1,
    rewind: true,
    autoplay: true,
    autoplaySpeed: 300,
  loop: true,
};

const Herobg =({bg})=>{
    return(<div className="single-welcome-slide bg-img bg-overlay animateOut animateIn" style={{"backgroundImage":`url(${bg})`}}>
            
    <div className="welcome-content h-100">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
              
                <div className="col-12">
                    <div className="welcome-text text-center">
                        <h6 data-animation="fadeInUp" data-delay="200ms">Find Book Go</h6>
                        <h2 data-animation="fadeInUp" data-delay="500ms">Studio Hunt</h2>
                        <a href="/search-studio" className="btn roberto-btn btn-2" data-animation="fadeInUp" data-delay="800ms">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default class Hero extends Component {

  render() {

    return (
        <section className="welcome-area">
        <div className="welcome-slides">
      
<OwlCarousel options={options}>
       <Herobg bg={bg1}/>
       <Herobg bg={bg2}/>
       <Herobg bg={bg3}/>
            </OwlCarousel>
        </div>
    </section>
  
     

    );
  }
}



const styles ={
background:{
    backgroundImage: `url(${bg1})`
}
}