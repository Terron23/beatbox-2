import React from "react";

const Button =({id,  divClass, buttonClass, type, text} )=>  {

    return (
        <div className={divClass}>
        <button className={buttonClass} type={type} id={id}>
         {text}
        </button>
      </div>
   
    );
  }


export default Button;
