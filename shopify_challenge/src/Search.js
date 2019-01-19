import React, { PureComponent } from "react";
import "./Search.css";
import Results from "./Results";

class Search extends PureComponent {

    constructor(props) {
        super(props);
        this.results_array = [];
        this.empty_string = '';

        //Create our state variables
        this.state = { value: '', submitted: false};

        //Bind functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Function to set value to input value
    handleChange(event) {
        
        this.setState({ value: event.target.value });
        // console.log(this.state.value.length)
        // console.log(this.state.value.length)
        
    }

    //Function to handle submit
    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);

        for (var i = 0; i < this.props.data.length - 1; i++) {
            if (this.props.data[i].keywords.includes(this.state.value)) {
                console.log(this.props.data[i])
                this.results_array.push(this.props.data[i])
                console.log(this.results_array.length)
            }
        }

        event.preventDefault();
        this.setState({ submitted: true });
    }

    renderResults() {
            return <Results results={this.results_array} />
        
    }

    render() {
        return (
            <div>
                <div className="search">
                    <form>
                        <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
                        {/* <input type="submit" value="Submit" /> */}
                        <button onClick={this.handleSubmit} className="search-button">
                            <i className="fa fa-search fa-flip-horizontal" id="searchIcon"></i>
                        </button>
                    </form>
                    {this.state.submitted && this.renderResults()}
                </div>

            </div>
        );

    }
}
export default Search;