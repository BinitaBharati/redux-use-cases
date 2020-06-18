import React, { Component } from "react";
//Importing jquery and bootstrap js, as they are required to invoke $('#loginPopUp').modal('show')
import $ from 'jquery';//jquery installed through `npm install --save jquery`
import 'bootstrap/dist/js/bootstrap.bundle'//bootstrap installed through `npm install --save bootstrap`
import { connect } from "react-redux";


class NavigationBar extends Component {
	
	constructor() {
	//Save logged in user details in state.
    super();
	
    this.handleLogInClick = this.handleLogInClick.bind(this);
    
  }
  
   handleLogInClick(event) {
	      event.preventDefault();
		  console.log('handleLogInClick: entered ');
		  $('#loginPopUp').modal('show');
		  			
  }
  
   
	render() {
		var loggedInUserEmail1 = this.props.loggedInUserEmail1;
		console.log('NavBar: render loggedInUserEmail = '+loggedInUserEmail1);
		if (loggedInUserEmail1 === "NA") {
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
						<a href="/dumb/">Welcome {loggedInUserEmail1}</a> |
					</nav>
					);
		}
		

	}
}

const mapStateToProps = state => {
 console.log('navbar: mapStateToProps entered with '+JSON.stringify(state));
  return {
    loggedInUserEmail1: state.loggedInUserEmail
  };
};


export default connect(mapStateToProps, null)(NavigationBar);