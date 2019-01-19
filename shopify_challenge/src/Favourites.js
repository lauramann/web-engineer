import React, { PureComponent } from "react";
// import "./Results.css";

class Favourites extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
       }
        this.handleClick = this.handleClick.bind(this);

    }

    render() {
        return (
            <p>FAvourites</p>

        );
    }
}
export default Favourites;