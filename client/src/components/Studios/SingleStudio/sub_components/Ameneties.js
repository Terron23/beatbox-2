import React from "react";

const Ameneties = ({services}) => {
  return (
    <div class="room-service mb-50">
      <h4>Studio Services</h4>

      <ul>
        {services.split(", ").map(s=>
        <li>
        <i className="fa fa-check"></i> {s}
        </li>)}
        
       
      </ul>
    </div>
  );
};

export default Ameneties;
