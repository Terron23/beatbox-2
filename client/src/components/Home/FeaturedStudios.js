import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio} from '../.././actions';
import bg1 from '../../images/bg-img/57.jpg'
import Heading from './sub_components/heading'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';



const SingleFeaturedStudio =({bg, studiotype, price, group, amenities, studioName, venue, rating, id})=>{
    return(  
        <div className="single-room-slide d-flex align-items-center">
        <div className="room-thumbnail h-100 bg-img" style={{"backgroundImage": `url(${bg}` }}></div>
        <div className="room-content">
            <h2 data-animation="fadeInUp" data-delay="100ms">{studioName}</h2>
            <small>{studiotype}</small>
            <h3 data-animation="fadeInUp" data-delay="300ms">${price}<span>/ hr</span></h3>
            <ul className="room-feature" data-animation="fadeInUp" data-delay="500ms">
                <li><span><i className="fa fa-check"></i> Capacity</span> <span>: Max person {group}</span></li>
                <li><span><i className="fa fa-check"></i> Amenities</span> <span>: {amenities}</span></li>
                <li><span><i className="fa fa-check"></i> Venue</span> <span>: {venue}</span></li>
                <li><span><i className="fa fa-check"></i> Rating</span> <span>: {rating}</span></li>
            </ul>
            <Link to={`/single-studio/${id}`} className="btn roberto-btn mt-30" data-animation="fadeInUp" data-delay="700ms">View Details</Link>
        </div>
        </div>)
}




class FeaturedStudios extends Component {


showStudio =()=>{
   return this.props.studio.sort((s1,s2)=>{
            return s2['price'] - s1['price']
    }).filter( (curr, i, arr)=>{
        return i <=2
    }).map((s)=>{
        return (<SingleFeaturedStudio 
            bg={s.studioImage} 
            studiotype={s.studioType}
            price={s.price} studioName={s.studioName}
            rating={s.rating.map(star=><i className="icon_star"></i>)}
            group={s.guest}
            id={s._id}/>)
    })
}


render(){
    if(!this.props.studio){ return ''}
 
    return(

        <section className="roberto-rooms-area">
              <Heading title="Featured Studios" color="black" subtitle="Top Rated Studios Near You"/>
        <div className="rooms-slides ">
          
          
               <OwlCarousel ref="img" items="1" className="owl-theme"
    loop
    margin={10}
    nav={false}
    dots={false}
    dotsContainer={false}
    >
          {this.showStudio()} 
           
               
               </OwlCarousel>
               <div className="owl-nav"> <div className="owl-prev" onClick={() => this.refs.img.prev()}> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Previous</div>
               <div  className="owl-next" onClick={() => this.refs.img.next()}>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </div>
               </div>
        </div>
    </section>

)
}
}



function mapStateToProps({studio}) {
    return {studio};
  }
  
  export default connect(mapStateToProps, {fetchStudio })(FeaturedStudios);



