import React, { useState } from 'react';
import ProductTable from '../ProductTable/productTable';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useForm from "../useForm";
import axios from "axios";

const ReviewsModal = (props) => {
    const {values, handleChange, handleSubmit} = useForm(submitReview);
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function submitReview() {
        let review = {...values};
        try {
            await axios.post('https://localhost:44394/api/reviews/create/', review);
            setSubmitted(true);
            setTimeout(() => {setShow(false); setSubmitted(false)}, 500);
        }
        catch(err){
            alert(err);
            return
        }
    }
    async function getReviews() {
        try {
            await axios.get(`https://localhost:44394/api/reviews/`);
        }
        catch(err){
            alert(err);
            return
        }

    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Reviews
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="reviews" onSubmit={handleSubmit}>
                        <Form.Control type="text" placeholder="Enter review for this product" onChange={handleChange} value={values.description} required={true}/>
                    </Form>
                    //Insert Reviews for product here
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {submitted ? <h2>Review Submitted</h2>: <Button type="submit">Submit</Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReviewsModal;