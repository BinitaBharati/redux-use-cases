import React, { Component } from "react";

class Counter extends Component {
	
	constructor() {
    super();
	
	this.state = {
      clickNumber: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick(event) {
		console.log('handleButtonClick: entered');
		this.setState({ clickNumber : this.state.clickNumber + 1 }, () => {
		console.log('setStateCompletedCallBack: Asynchronous setting of state is completed. The current clickNumber now is '+this.state.clickNumber);
	});
		
  }
  
  
	render() {
		return (
				<div>
					<button type="button" onClick={this.handleButtonClick}>Click!!</button>
					<h2>{this.state.clickNumber}</h2>
				</div>);
	}
}

export default Counter;