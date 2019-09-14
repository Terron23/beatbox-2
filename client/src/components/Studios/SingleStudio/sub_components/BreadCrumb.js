import React from 'react';

const BreadCrumb =({studioName, price})=>{
    return (
        <div className="breadcrumb-area bg-img bg-overlay jarallax" style={{"backgroundImage": "url(img/bg-img/16.jpg)"}}>
        <div className="container h-100">
            <div className="row h-100 align-items-end">
                <div className="col-12">
                    <div className="breadcrumb-content d-flex align-items-center justify-content-between pb-5">
                        <h2 className="room-title">{studioName}</h2>
                        <h2 className="room-price">${price} <span>/ Per hour</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BreadCrumb;