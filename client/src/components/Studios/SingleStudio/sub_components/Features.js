import React from "react";

const Features = ({capacity, description, equipment, services}) => {
  return (
    <div>
      <div className="room-features-area d-flex flex-wrap mb-50">
        {/* <h6>
          Size: <span>350-425sqf</span>
        </h6> */}
        <h6>
          Capacity: <span>Max persion {capacity}</span>
        </h6>
        <h6>
          Equipment: <span>{equipment}</span>
        </h6>
        <h6>
          Services: <span>{services}</span>
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
