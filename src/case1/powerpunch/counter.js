import React, { Component } from "react";
import { connect } from "react-redux";
import {incClickCount} from "./reduxstate";

class Counter extends Component {
	
	constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick(event) {
		console.log('handleButtonClick: entered');
		this.props.setClickCountPropAction();
		
  }
  
  
	render() {
		return (
				<div>
					<button type="button" onClick={this.handleButtonClick}>Click!!</button>
					<h2>{this.props.clickNumberProp}</h2>
				</div>);
	}
}

const mapStateToProps = state => {
  return {
    clickNumberProp: state.clickNumber
  };
};

const mapDispatchToProps = {
  setClickCountPropAction: incClickCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);