import React from 'react';

const Reviews =({reviews, studioName, reviewerImage, reviewDate, rating, reviewDesc})=>{
    return (<div className="room-review-area mb-100">
    <h4>{studioName} Review</h4>

    <div className="single-room-review-area d-flex align-items-center">
        <div className="reviwer-thumbnail">
            <img src="img/bg-img/53.jpg" alt=""/>
        </div>
        <div className="reviwer-content">
            <div className="reviwer-title-rating d-flex align-items-center justify-content-between">
                <div className="reviwer-title">
                    <span>27 Aug 2019</span>
                    <h6>Brandon Kelley</h6>
                </div>
                <div className="reviwer-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
        </div>
    </div>



</div>

    )
}

export default Reviews;