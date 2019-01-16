import React, { PureComponent } from "react";
import "./Search.css";
import Results from "./Results";

class Search extends PureComponent {
    constructor(props) {
        super(props);

        //Create our state variables
        this.state = { value: '', data: '', results_arr: [] };

        //Bind functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Function to set value to input value
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //Function to handle submit
    //Fetches data from json
    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
                for (var i = 0; i < this.state.data.length - 1; i++) {
                    if (this.state.data[i].keywords.includes(this.state.value)) {
                        console.log(this.state.data[i])
                        this.state.results_arr.push(this.state.data[i])
                        console.log(this.state.results_arr.length)
                    }
                }
                // for(var m=0;m<this.state.results_arr.length-1;m++) {
                //     console.log(this.state.results_arr[m])
                // }
            })
            .catch(err => console.error(this.props.url, err.toString()))
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <div className="search">
                <form>
                    <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>
                        <i className="fa fa-search fa-flip-horizontal" id="searchIcon"></i>
                    </button>
                </form>
            </div>
            {/* <Results results={this.state.results_arr}/> */}
            </div>
        );
    }
}
export default Search;