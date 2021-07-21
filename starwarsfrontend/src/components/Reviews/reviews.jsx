import React, { useState } from 'react';
import ProductTable from '../ProductTable/productTable';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ReviewsModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Reviews
        </Button>
        <Modal show={show} onHide={handleClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Reviews</Modal.Title>
          </Modal.Header>

          <Modal.Body>
             <Form className="reviews">
             <Form.Label>Reviews</Form.Label>
             <Form.Control type="text" placeholder="Enter review for this product"/>
             </Form>
            
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>

        </Modal>
      </>
    );
}
//   render(<ReviewsModal />);

export default ReviewsModal;