import React, { PureComponent } from "react";
import "./Favourites.css";

class Favourites extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <div className="fav">
                <h1>Favourites</h1>
                {/* <p>Only show if favourites are added</p> */}
                {this.props.favs_list.length <1 ? <div><p>No favourites found</p></div> :

                    this.props.favs_list.map((item, index) =>

                        <div className="resultsDiv" key={index}>
                            <div className="leftDiv">
                                <button className="star-button">
                                    <i className="fa fa-star" id={this.state.btn}></i>
                                </button>
                                {item.title}
                            </div>
                            <div className="rightDiv">
                                <li>{item.body}</li>
                            </div>
                        </div>

                    )}
            </div>

        );
    }
}
export default Favourites;