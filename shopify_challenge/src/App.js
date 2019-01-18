import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
			.then(response => response.json())
			.then(data => {
        this.setState({data: data })
        console.log("worked")
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }

  render() {
    return (
      <div>
        <Header />
        <Search data={this.state.data}/>
      </div>
    );
  }
}
export default App;
