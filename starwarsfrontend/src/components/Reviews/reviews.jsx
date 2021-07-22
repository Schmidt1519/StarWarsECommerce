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
            Description: '',
            rating: 0,
            productId: 0,
            reviews: [],
            postReview: [],
            filteredReview: [],
            show: false,
            submitted: false,
            filterRatings: [],
            productAverage: 0,
            updateProduct: [],
            productId: 0,
            name: '',
            productDesc: '',
            price: 0,
            productAve: 0,
            category: ','
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.getReviews();
        this.ratingToList();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
      
        console.log(this.state.productAverage)
        console.log(this.props.product)
        event.preventDefault();
        let string = this.state.rating;
        let number = parseInt(string);
        const review = {
            Description: this.state.Description,
            rating: number,
            productId: this.props.productid,
        }
        

        
        this.submitReview(review);
        this.setState({
            Description: '',
            rating: this.state.productAverage,
            productId: this.props.productid,
        });
        this.ratingToList(); 
    }

    updateProduct = async (id, product) => {
        let response = await axios.put(`https://localhost:44394/api/products/rating/${id}/`, product);
        if (response === undefined){
              this.setState({
              });
          }else{
            this.setState({
                updateProduct: response.data
          });
          }
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
        this.ratingToList();
        this.setState({
          show: false,
        });
      };

    handleShow = () => {
      this.ratingToList();
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
      this.ratingToList();
    }

    ratingToList =() => {
      let ratings = this.state.filteredReview.map((rating) => 
        (rating.rating));
      this.setState({
          filterRatings: ratings,
      });
      let sum = ratings.reduce((a,v) => a = a + v,0);
      let average = sum / ratings.length;
      const product = {
        productId: this.props.product.productId,
        name: this.props.product.name,
        productDesc: this.props.product.description,
        price: this.props.product.price,
        productAve: average,
        category: this.props.product.category,
      }
      console.log(product);
      this.updateProduct(this.props.product.productId, product);
      this.setState({
          productAverage: average,
          productId: this.props.product.productId,
          name: this.props.product.name,
          productDesc: this.props.product.description,
          price: this.props.product.price,
          productAve: average,
          category: this.props.product.category,
      })
      console.log(average);
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
            <Button variant="outline-primary" onClick={this.handleShow}>
                Reviews
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="reviews" onSubmit={this.handleSubmit}>
                        <Form.Control type="text" name='Description' placeholder="Enter Your Review Here" value={this.state.Description} onChange={this.handleChange} required={true}/>
                        <Form.Label>Rate this product 1-5</Form.Label>
                        <Form.Control type="number" name='rating' onChange={this.handleChange} defaultValue={this.state.rating} required={true}/>
                        <br/>
                        <Button type="submit">Submit</Button>
                    </Form>
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
