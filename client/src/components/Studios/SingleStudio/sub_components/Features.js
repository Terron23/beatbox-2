import React from "react";

const Features = ({capacity, description, equipment, services, includes}) => {
  return (
    <div>
      <div className="room-features-area d-flex flex-wrap mb-50">
      <h6>
          Included: <span>{includes.length > 0 ? includes : 'N/A'}</span>
        </h6>
        <h6>
          Capacity: <span> { capacity.length > 0 ? `Max person ${capacity}` : 'Contact Owner'}</span>
        </h6>
        <h6>
          Equipment: <span>{equipment.length > 0 ? equipment: 'Contact Owner'}</span>
        </h6>
       
        <h6>
        Services: <span><span>{services.length > 0 ? services : 'N/A'}</span></span>
        </h6>
      </div>

      <p>
       {description}
      </p>

      {/* <ul>
        <li>
          <i className="fa fa-check"></i> Mauris molestie lectus in irdiet
          auctor.
        </li>
        <li>
          <i className="fa fa-check"></i> Dictum purus at blandit molestie.
        </li>
        <li>
          <i className="fa fa-check"></i> Neque non fermentum suscipit.
        </li>
        <li>
          <i className="fa fa-check"></i> Donec id dui ac massa malesuada.
        </li>
        <li>
          <i className="fa fa-check"></i> In sit amet sapien quis orci maximus.
        </li>
        <li>
          <i className="fa fa-check"></i> Vestibulum rutrum diam vel eros
          tristique.
        </li>
      </ul> */}
    </div>
  );
};

export default Features;
