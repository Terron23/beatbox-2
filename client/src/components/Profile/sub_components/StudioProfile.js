import React from "react";

const StudioProfile = ({
  handleSubmit,
  name,
  phone,
  venue,
  address1,
  address2,
  postalCode,
  region,
  city,
  email,
  isListed,
  studioName,
  guest,
  price,
  rules,
  hoursOfOperation,
  studioType,
  studioid
}) => {
  return (
  
      <div>
        <form onSubmit={e => handleSubmit(e, "studio")}>
          test
      </form>
    </div>
  );
};

export default StudioProfile;
