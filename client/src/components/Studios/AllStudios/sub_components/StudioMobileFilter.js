import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";




class StudioMobileFilter extends Component {
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
     <center> <div className="col-4" >
       <Modal show={setShow} onHide={this.handleClose} 
       dialogClassName="modal-full modal-content"
      bsClass="my-modal">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      <a className="btn roberto-btn" onClick={this.handleShow}>Search</a>
     
      </div></center>
    );
  }
}

export default StudioMobileFilter;
