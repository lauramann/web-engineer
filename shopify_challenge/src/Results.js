import React, { PureComponent } from "react";
import "./Results.css";

class Results extends PureComponent {
    constructor(props) {
        super(props);

        //Create our state variables
        this.state = { value: '', data: '' };


    }

    //Function to set value to input value
    getResults() {
        console.log(this.props.results)
    }

    render() {
        return (
            <p>{this.props.results[0].keywords}</p>
        );
    }
}
export default Results;