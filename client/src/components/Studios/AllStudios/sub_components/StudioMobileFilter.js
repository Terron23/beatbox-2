import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";




class StudioMobileFilter extends Component {
  


  render() {
    let { id , children, studioName, price, handleClose, handleShow, setShow} = this.props;
    return (
     <center> <div className="col-4" >
       <Modal show={setShow} onHide={handleClose} 
       dialogClassName="modal-full modal-content"
      bsClass="my-modal">
          <Modal.Header>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      <a className="btn roberto-btn" onClick={handleShow}>Search</a>
     
      </div></center>
    );
  }
}

export default StudioMobileFilter;
