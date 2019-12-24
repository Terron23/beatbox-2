import React from "react";
import {Alert} from "react-bootstrap"
import './css/alert.css'


const AlertMessage =({alertText, variant, hide, handleClose} )=> {

return (
    <Alert variant={variant} className={hide} >
       {alertText} <span onClick={handleClose} className="close-btn pull-right">x</span>
    </Alert>
   
    );
  
}

export default AlertMessage;
