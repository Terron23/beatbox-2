import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/testimonial.css'


const Heading =({children})=> (<section class="roberto-testimonials-area section-padding-100-0">
<div class="container">{children}</div></section>)



const TestimonialTemplate =({img, description, name, title})=>{
    return(<div class="item">
    <div class="row align-items-center">
    <div class="col-md-6">
        <div class="testimonial-thumbnail  mb-100">
            <img src={img} alt="" />
            
        </div>
    </div>

    <div class="col-md-6">
   
        <div class="section-heading">
            <h6>Testimonials</h6>
            <h2>Our Users Love Us</h2>
        </div>
      
        <div class="testimonial-slides  mb-100">

          
            <div class="single-testimonial-slide">
                <h5>{description}</h5>
                <div class="rating-title">
                    <div class="rating">
                        <i class="icon_star"></i>
                        <i class="icon_star"></i>
                        <i class="icon_star"></i>
                        <i class="icon_star"></i>
                        <i class="icon_star"></i>
                    </div>
                    <h6>{name}<span>- {title}</span></h6>
                </div>
            </div>

        </div>
    </div>
    </div>
    </div>)
}

export default class Testimonials extends Component {

  render() {

    return (
       <Heading>
            
                <OwlCarousel  items="1" className="owl-theme"
    loop
    margin={10}
    nav>
                <div className="item">
                    <TestimonialTemplate description={"Studio Hunt is awesome! I scheduled a sip & paint class for my best friends party and also use it to shoot some of my best photography work. Hands down this app is second to none."}
                name="Rebecca Nunce"
                title="Photographer"
                img="img/bg-img/10.jpg"
                /></div>
               <div className="item">
                    <TestimonialTemplate description={"I just love this app. As a recording artist who travels a lot its so refreshing to be able to find top quality studios in every city I go to."}
                name="J Got Bars"
                title="Rapper"
                img="img/bg-img/11.jpg"
                /></div>
                </OwlCarousel>
           
           
                </Heading>
       
     

    );
  }
}



