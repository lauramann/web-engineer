import React, { PureComponent } from "react";
import "./Results.css";
import Favourites from "./Favourites";

class Results extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            btn: 'greyStar',
            index: 0,
            favourites: [],
            results: []
        }

        this.reg = /\&.*?\;/ig;
        this.star = '#26995C';
        this.getString = this.getString.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        // let btnId = this.state.grey ? "greyStar" : "greenStar";
    }

    handleClick(key) {
        console.log(this.state.favourites.length)
        console.log(key);
        this.state.favourites.push(this.props.results[key]);
        this.forceUpdate();
        console.log(this.props.results[key].title)
        this.setState({ btn: 'greenStar' })
        console.log(this.state.btn)
    }

    handleMouseOver() {
        this.setState({ btn: 'greenStar' })
    }

    getString(str) {
        return str.replace(this.reg, '\n')

    }

    render() {
        return (
            <div>
                {this.props.results.length < 1 ? <div><p>No items found</p></div> :

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
                    {this.state.favourites.length > 0 ? 
                    <Favourites favs_list={this.state.favourites} /> : <p></p> }
            </div>
        );

    }
}
export default Results;