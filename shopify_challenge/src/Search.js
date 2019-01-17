import React, { PureComponent } from "react";
import "./Search.css";
import Results from "./Results";

class Search extends PureComponent {
    
    constructor(props) {
        super(props);
        this.results_array = [];
    this.data_array = [];
        //Create our state variables
        this.state = { value: '', data: [], results_arr: [], submitted: false, title: ''};

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
        let copy = [];
        console.log('A name was submitted: ' + this.state.value);
        fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
            .then(response => response.json())
            .then(data => {
                this.data_array[0] = data;
                this.setState({ data: data });
                for (var i = 0; i < this.state.data.length - 1; i++) {
            if (this.state.data[i].keywords.includes(this.state.value)) {
                console.log(this.state.data[i])
                copy.push(this.state.data[i])
                console.log(copy.length)
                this.setState({title: this.state.results_arr[0].title})
            }
        }
        console.log(this.state.title)
        return <Results results={this.state.title} />
                // console.log(this.state.dataSet)
            })
            // console.log(data_array);
        // .then(data => {
        //     this.setState({ data: data, title });
        //     console.log(data);
        //     return <Results results={this.state.data} />
        // })
            .catch(err => console.error(this.props.url, err.toString()));
        event.preventDefault();
            console.log(this.data_array);

        
        // console.log(this.state.data)

        this.setState({ submitted: true, results_arr: copy });
        this.setState(prevState => ({
            results_arr: [...prevState.results_arr, copy]
          }));
        //   console.log("results length: " + this.state.results_arr.length);
        // console.log(copy.length)
        // console.log(copy)
        // console.log(this.state.results_arr);
    }

    renderResults() {
        // console.log(this.state.results_arr[0])
        return <Results results={this.state.title} />
         } 

    render() {
        return (
            <div>
            <div className="search">
                <form>
                    <input type="text" className="input" value={this.state.value} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" /> */}
                    <button onClick={this.handleSubmit}>
                        <i className="fa fa-search fa-flip-horizontal" id="searchIcon"></i>
                    </button>
                </form>
                {this.state.submitted && this.renderResults()}
            </div>
            {/* <Results results={this.state.results_arr.length}/> */}
            {/* <Results example="foo"/> */}

            </div>
        );
        
    }
}
export default Search;