import React, { PureComponent } from "react";

class Tester extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }
    }

    render() {
        return (
                <h1>Testing</h1>

        );
    }
}
export default Tester;