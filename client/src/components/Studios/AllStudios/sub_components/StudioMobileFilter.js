import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";




class StudioMobileFilter extends Component {
  


  render() {
    let { id , children, studioName, price, handleClose, handleShow, setShow} = this.props;
    return (
     <center> 
        
       <a className={`btn roberto-btn ${setShow? "d-none" :""}`} onClick={handleShow}>Search</a>
       <a className={`btn roberto-btn ${!setShow ? "d-none" :""}`} onClick={handleClose}>Close</a>
       <div className={`col-12 ${!setShow ? "d-none": ""}`} >
         
         
          {children}
        
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
         
       
      
     
      </div>
      </center>
    );
  }
}

export default StudioMobileFilter;
