import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchStudioReviews} from "../../../actions";



const ReviewContainer =(image, contact_name, username, time_stamp, review, rating )=>{
  return (<div>
  <div className="reviwer-thumbnail">
   {/* {contact_name} */}
    {/* <img src={image} alt="" /> */}
  </div>

  <div className="reviwer-content">
    <div className="reviwer-title-rating d-flex align-items-center justify-content-between">
      <div className="reviwer-title">
{/* <span>{time_stamp}</span> */}
<h6>{username}</h6>
      </div>
      <div className="reviwer-rating">
        {/* {new Array(rating).map(star=><i className="fa fa-star"></i>)}  */}
        
      </div>
    </div>
    <p>
     {review}
    </p>
  </div>
  </div>);
}

class  Reviews extends Component {
constructor(props){
  super(props);

  this.state ={
    reviewState: [],
  }
}

  componentDidMount() {
    this.props.fetchStudioReviews(this.props.param);
    
  
  }

  render(){
    if(this.props.reviews.length < 1 || !this.props.reviews){
      return "Loading..."
    }
    let {
      reviews,
    } = this.props;
    let {reviewState} = this.state;
  return (
    <div className="room-review-area mb-100">
      <h4>Reviews</h4>

      <div className="single-room-review-area d-flex align-items-center">
      
{ reviews.length < 1 || Object.values(reviews[0]).length < 1  ? <h4>No Reviews At this time</h4> :
      reviews.map(r=>{
   return (
   <div>
    <div className="reviwer-thumbnail">
   { r.contact_name} 
   { <img src={r.image} alt="" />} 
  </div>

  <div className="reviwer-content">
    <div className="reviwer-title-rating d-flex align-items-center justify-content-between">
      <div className="reviwer-title">
<span>{r.time_stamp}</span> 
<h6>{r.username}</h6>
      </div>
      <div className="reviwer-rating">
        {new Array(r.rating).map(star=><i className="fa fa-star"></i>)} 
        
      </div>
    </div>
    <p>
     {r.review}
    </p>
  </div>
  </div>)
      })
      }
      </div>
      </div>
  )
    }
};

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps, {
  fetchStudioReviews
})(Reviews);


