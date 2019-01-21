import React, { PureComponent } from "react";
import "./Results.css";
import Favourites from "./Favourites";

class Results extends PureComponent {
    constructor(props) {
        super(props);

        //Set state variables
        this.state = {
            btn: 'greyStar',
            index: 0,
            favourites: [],
        }
        //Bind functions
        this.getString = this.getString.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //Function to handle when a user clicks a star
    //Recieves index of item in results as parameter
    //Changes colour of star to green
    handleClick(key) {
        //Add item to favourites by referencing index
        this.state.favourites.push(this.props.results[key]);
        this.forceUpdate();
        this.setState({ btn: 'greenStar' })
    }

    //Function to clean up body text from JSON
    //Searches for html code and replaces is
    //Returns cleaner code
    getString(str) {
        str = str.replace(/;/g, "");
        str = str.replace(/&/g, "");
        str = str.replace(/\/gt/g, "")
        str = str.replace(/ltligt/g, "")
        str = str.replace(/ltulgt/g, "")
        str = str.replace(/ltbgt/g, "")
        str = str.replace(/lt\/bgtltgt/g, "")
        str = str.replace(/ampnbsp/g, " ")
        str = str.replace(/\/stronggt.ampnbsplt/g, ".")
        str = str.replace(/\/stronggtlt/g, "")
        str = str.replace(/\/li/g, "")
        str = str.replace(/\&.*?\;/ig, "")
        return str
    }

    //Display results and call Favourites component
    //Pass favourited items to Favourites component as props
    render() {
        return (
            <div>
                {/* If nothing has been submitted, display search message, otherwise error message */}
                {this.props.submitted === false ? <p>Search for an item</p> :
                    this.props.results.length < 1 ? <div><p>No items found</p></div> :

                    // Loop through favourites list and display each item 
                        this.listItems = this.props.results.map((item, index) =>

                            <div className="resultsDiv" key={index}>
                                <div className="leftDiv">
                                    <button onClick={() => this.handleClick(index)} className="star-button">
                                        <i className="fa fa-star" id={this.state.btn}></i>
                                    </button>
                                    {item.title}
                                </div>
                                <div className="rightDiv">
                                    <li>{this.getString(item.body)}</li>
                                </div>
                            </div>

                        )}
                        {/* If there are favourited items, display list */}
                {this.state.favourites.length > 0 ?
                    <Favourites favs_list={this.state.favourites} /> : <p></p>}
            </div>
        );

    }
}
export default Results;