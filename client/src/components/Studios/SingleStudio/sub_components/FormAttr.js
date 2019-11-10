import React from "react";

const FormAttr = ({ children, label }) => {
  return (
    <div className="form-group mb-30">
      <label htmlFor={label}>{label}</label>
      <div className="input-daterange" id="datepicker">
        <div className="row no-gutters">{children}</div>
      </div>
    </div>
  );
};

export default FormAttr;
