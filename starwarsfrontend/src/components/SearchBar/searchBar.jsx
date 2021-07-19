import React, {Component} from 'react';
import HomePage from '../HomePage/homepage';

class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                searchQuery: '',
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            searchQuery: event.target.value
        // }, function(){
        //     let search = this.props.productTable.filter(prod => 
        //         prod.name.includes(this.state.searchQuery))
        //             this.props.filterProductsTable(search)
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