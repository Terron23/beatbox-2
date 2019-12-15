import React from "react";

const Ameneties = ({services, contact}) => {
  return (
    <div class="room-service mb-50">
      <h4>Studio Services</h4>

      <ul>
        {services.split(", ").map(s=>
        <li>
        <i className="fa fa-check"></i> {s}
        </li>)}
        
      
      </ul>
      <div >
     
      </div>
      <p><a className="btn roberto-btn btn-2 contact-btn">Contact Owner</a></p>
    </div>
  );
};

export default Ameneties;
