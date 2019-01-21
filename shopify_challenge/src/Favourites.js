import React, { PureComponent } from "react";
import "./Favourites.css";

class Favourites extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }

        //Bind function
        this.getString = this.getString.bind(this);
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

    //Display favourited items
    render() {
        return (
            <div className="fav">
                <h1>Favourites</h1>

                {/* Loop through favourites list and display each item */}
                {this.props.favs_list.map((item, index) =>

                    <div className="resultsDiv" key={index}>
                        <div className="leftDiv">
                            <button className="star-button">
                                <i className="fa fa-star" id="greenStar"></i>
                            </button>
                            {item.title}
                        </div>
                        <div className="rightDiv">
                            <li>{this.getString(item.body)}</li>
                        </div>
                    </div>

                )}
            </div>

        );
    }
}
export default Favourites;