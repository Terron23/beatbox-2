import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";




class MobileBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
    };
  }

handleClose = () => {
    this.setState({setShow:false});
}
handleShow = () => {
    this.setState({setShow:true});
};



  render() {
    let { id , children, studioName, price} = this.props;
    let { startDate, setShow } = this.state;
    return (
      <div className="col-12 fixed-bottom" 
      style={{backgroundColor: "#0e2737", padding:"20px"}} >
       <Modal show={setShow} onHide={this.handleClose} 
       dialogClassName="modal-full modal-content"
      bsClass="my-modal">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="mobile-form-pop-up">
     <span className="d-flex justify-content-center pop-up-text">{studioName} ${price}.00 per hour</span>
      <a className="btn btn-block roberto-btn" onClick={this.handleShow}>Reserve Studio Time</a>
     </div>
      </div>
    );
  }
}

export default MobileBook;
