import React, { PureComponent } from "react";
import "./Search.css";

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {value: '', data: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.loadData = this.loadData.bind(this);
      }

    //   loadData() {
	// 	fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
	// 		.then(response => response.json())
	// 		.then(data => {
    //             this.setState({data: data })
    //             // console.log(this.state.data[26])
	// 	})
    //         .catch(err => console.error(this.props.url, err.toString()))
    //         return data;
	// }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
			.then(response => response.json())
			.then(data => {
                this.setState({data: data })
                for(var i=0;i<this.state.data.length-1;i++) {
                    if(this.state.data[i].keywords.includes(this.state.value)) {
                        console.log(this.state.data[i])
                    }
                }
		})
            .catch(err => console.error(this.props.url, err.toString()))
        // data = this.loadData();
        // console.log(data[1])
        event.preventDefault();
      }

  render() {
    return (
        <div className="search">
        <form>
        <input type="text" className="input" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>
        <i className="fa fa-search fa-flip-horizontal" id="searchIcon"></i>
        </button>
        </form>
        </div>
    );
  }
}
export default Header;