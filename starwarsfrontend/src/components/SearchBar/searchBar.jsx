import React, {Component} from 'react';
import HomePage from '../HomePage/homepage';

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
            <form className="search-bar"  onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="searchQuery" className="search-form" placeholder="Search"
                    onChange={this.handleChange} value={this.searchQuery} />
                    <button className="btn btn-primary" type="submit">Submit </button>
            </form>
            </div>
        )
    }
}   

export default SearchBar;