import React, { PureComponent } from "react";
import "./Results.css";

class Results extends PureComponent {
    constructor(props) {
        super(props);
        this.reg = /(;|&...|\/|nbsp|strong)/g;
        this.reg2 = /\&.*?\;/ig;
        this.reg3 = /<\/?[^>]+>/gi;
        // str = props.body.replace(/(^&|;$)/, '');

        //Create our state variables
        this.state = { value: '', data: '' };
        this.listItems = props.results.map((item) =>
            // <ul>
            <div className="resultsDiv">
                <div className="leftDiv">
                <button onClick={this.handleSubmit} className="star-button">
                            <i className="fa fa-star"id="star"></i>
                        </button>
                    {item.title}
                </div>
                <div className="rightDiv">
                <li>{this.getString(item.body)}</li>
                </div>
                </div>
            // </ul>
        );

        this.getString = this.getString.bind(this);

    }

    getString(str) {
        return str.replace(this.reg2, '')
        // return str;

    }

    render() {
        return (
            <ul>{this.listItems}</ul>
        );
    }
}
export default Results;