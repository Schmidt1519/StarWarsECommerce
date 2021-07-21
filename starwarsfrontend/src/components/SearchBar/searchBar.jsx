import React, {Component} from 'react';
import HomePage from '../HomePage/homepage';
import { Form, Button, Row, Col } from "react-bootstrap";

class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                searchQuery: '',
            }
    }

    handleChange = (event) => {
        this.setState({ 
            searchQuery: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.filterProductTable(this.state.searchQuery);
    }

    render() {
        return(
            <div>
            <Form.Group className="mb-3" controlId="formBasicRegister">
            <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Row>
            <Col>
            <Form.Control type="text" name="searchQuery" className="search-form" placeholder="Search for anything Star Wars"
                    onChange={this.handleChange} value={this.searchQuery} />
                    </Col>
                    <Col>
                    <Button className="btn btn-primary" type="submit">Search</Button>
                    </Col>
                    </Row>
            </Form>
            </Form.Group>
            </div>
        )
    }
}   

export default SearchBar;