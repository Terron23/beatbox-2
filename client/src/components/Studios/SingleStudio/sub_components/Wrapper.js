import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="row">
      <div class="roberto-rooms-area section-padding-50-0">
        <div class="container">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
