import React, { PureComponent } from "react";
import "./Search.css";
import Results from "./Results";

class Search extends PureComponent {

    constructor(props) {
        super(props);

        //Results array for storing results to be displayed when user submits item
        this.results_array = [];

        //Create state variables for search submission
        this.state = { value: '', submitted: false };

        //Bind functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Function to set value to input value
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //Function to handle submit
    handleSubmit(event) {
        //Empty results array from previous search
        this.results_array = [];

        //Search data retrieved for the item the user searched for
        for (var i = 0; i < this.props.data.length - 1; i++) {
            if (this.props.data[i].keywords.includes(this.state.value)) {
                //Print data to console for testing
                // console.log(this.props.data[i])

                //Push item to results array
                this.results_array.push(this.props.data[i])
            }
        }

        event.preventDefault();

        //Force page to update on new search
        this.forceUpdate();
        this.setState({ submitted: true });
    }

    renderResults() {
        //Display results component
        //Passing results array and submitted value as props
        return <Results results={this.results_array} submitted={this.state.submitted} />

    }

    //Display search field and render results
    render() {
        return (
            <div>
                <div className="search">
                    <form>
                        <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
                        <button onClick={this.handleSubmit} className="search-button">
                            <i className="fa fa-search fa-flip-horizontal" id="searchIcon"></i>
                        </button>
                    </form>
                    {this.renderResults()}
                </div>
            </div>
        );

    }
}
export default Search;