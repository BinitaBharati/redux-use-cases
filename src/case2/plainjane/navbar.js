import React, { Component } from "react";
//Importing jquery and bootstrap js, as they are required to invoke $('#loginPopUp').modal('show')
import $ from 'jquery';//jquery installed through `npm install --save jquery`
import 'bootstrap/dist/js/bootstrap.bundle'//bootstrap installed through `npm install --save bootstrap`


class NavigationBar extends Component {
	
	constructor() {
	//Save logged in user details in state.
    super();
	
	this.state = {
		loggedInUserEmail: "NA" 
    };
    this.handleLogInClick = this.handleLogInClick.bind(this);
    
  }
  
   handleLogInClick(event) {
	      event.preventDefault();
		  console.log('handleLogInClick: entered ');
		  $('#loginPopUp').modal('show');
		  
			
  }
  
   
	render() {
		if (this.state.loggedInUserEmail === "NA") {
			return (
					 <nav>
						<a href="/home/">Home</a> |
						<a href="/dumb/"><button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#loginPopUp" onClick={this.handleLogInClick}>Log In</button></a> |
					</nav>
					);
		} 
		else {
			return (
					 <nav>
						<a href="/home/">Home</a> |
						<a href="/dumb/">Welcome {this.state.loggedInUserEmail}</a> |
					</nav>
					);
		}
		

	}
}

export default NavigationBar;