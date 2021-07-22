import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

class ReviewsModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            description: 'Enter your review here',
            rating: 0,
            productId: 0,
            reviews: [],
            postReview: [],
            filteredReview: [],
            show: false,
            submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.getReviews();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let string = this.state.rating;
        let number = parseInt(string);
        const review = {
            description: this.state.description,
            rating: number,
            productId: this.props.productid,

        }
        this.submitReview(review);
        this.setState({
            description: '',
            rating: 0,
            productId: this.props.productid,
        }); 
    }
    submitReview = async (review) => {
        try {
         let response = await axios.post('https://localhost:44394/api/reviews/create/', review);
            this.setState({
                postReview: response.data,
            });
        }
        catch(err){
            alert(err);
            return
        }
    }
    getReviews = async () => {
        try {
          let response = await axios.get(`https://localhost:44394/api/reviews/reviews`);
          this.setState({
            reviews: response.data,
        });
        console.log(this.state.reviews)
        }
        catch(err){
            alert(err);
            return
        }
    }
    handleClose = () => {
        this.setState({
          show: false,
        });
      };

      handleShow = () => {
          this.filterReviews();
        this.setState({
          show: true,
        });
      };

     filterReviews = () => {
        let filtered = this.state.reviews.filter(review => review.productId === this.props.productid);
        console.log(filtered);
        this.setState({
            filteredReview: filtered,
        })
     }

    render(){
        let fReviews = this.state.filteredReview.map((review) => {
            return <tr key={review.reviewId}>
                <td>{review.description}</td>
                <td>{review.rating}</td>
            </tr>
        })
        return(
                <>
            <Button variant="primary" onClick={this.handleShow}>
                Reviews
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="reviews" onSubmit={this.handleSubmit}>
                        <Form.Control type="text" name='description' value={this.state.description} onChange={this.handleChange} required={true}/>
                        <Form.Label>Rate this product 1-5</Form.Label>
                        <Form.Control type="number" name='rating' onChange={this.handleChange} defaultValue={this.state.rating} required={true}/>
                        <Button type="submit">Submit</Button>
                    </Form>
                    //Insert Reviews for product here
                    <Table className="reviewTable">
                      <thead>
                        <tr>
                          <th>Reviews</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fReviews}
                      </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
        )
    }
}
export default ReviewsModal;      
