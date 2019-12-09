import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";




class MobileBook extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    let { id , children, studioName, price, handleClose, handleShow, setShow} = this.props;
 
    return (
      <div className="col-12 fixed-bottom" 
      style={{backgroundColor: "#0e2737", padding:"20px"}} >
       <Modal show={setShow} onHide={handleClose} 
       dialogClassName="modal-full modal-content"
      bsClass="my-modal">
          <Modal.Header >
          <a className="btn btn-secondary" onClick={handleClose}>
              close
            </a>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="mobile-form-pop-up">
     <span className="d-flex justify-content-center pop-up-text">{studioName} ${price}.00 per hour</span>
      <a className="btn btn-block roberto-btn" onClick={handleShow}>Reserve Studio Time</a>
     </div>
      </div>
    );
  }
}

export default MobileBook;
