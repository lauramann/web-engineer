import React, { PureComponent } from "react";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <h1>Toronto Waste Lookup</h1>
      </header>
    );
  }
}
export default Header;