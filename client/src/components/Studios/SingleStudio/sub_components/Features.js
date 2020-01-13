import React from "react";
import {Row, Col} from 'react-bootstrap'

const Features = ({capacity, description, equipment, services, includes}) => {
  return (
    <div>
      <div className="room-features-area d-flex flex-wrap mb-50 row">
      <h6>
          Included: <span>{includes.length > 0 ? includes : 'N/A'}</span>
        </h6>
        <h6>
          Capacity: <span> { capacity.length > 0 ? `Max person ${capacity}` : 'Contact Owner'}</span>
        </h6>
        <h6>
          Equipment: <span>{equipment.length > 0 ? equipment: 'Contact Owner'}</span>
        </h6>
      
      </div>

     

    </div>
  );
};

export default Features;
