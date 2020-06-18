import React, { Component } from "react";
//Importing jquery and bootstrap js, as they are required to invoke $('#loginPopUp').modal('hide')
import $ from 'jquery';//jquery installed through `npm install --save jquery`
import 'bootstrap/dist/js/bootstrap.bundle'//bootstrap installed through `npm install --save bootstrap`

class LogInModal extends Component {
	
	constructor() {
    super();
	
	this.state = {
      inputEmail: ""
    };
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
	this.handleButtonAction = this.handleButtonAction.bind(this);
  }
  
  handleInputTextChange(event) {
		console.log('handleInputTextChange: target val = '+event.target.value);
		this.setState({ inputEmail : event.target.value }, () => {
		console.log('setStateCompletedCallBack: Asynchronous setting of state is completed. The current email now is '+this.state.inputEmail);

	});
	
  }
  
  
  handleButtonAction(event) {
	      event.preventDefault();
		  console.log('handleButtonAction: entered with ');
		  $('#loginPopUp').modal('hide');
		  window.navBarRef.setState({loggedInUserEmail: this.state.inputEmail});			
  }
  
	render() {
		return (
		 <div className={this.state.showModal ? 'modal fade show' : 'modal fade'} id="loginPopUp" tabIndex="-1" role="dialog" aria-labelledby="loginPopUpCenterTitle" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="loginPopUpCenterTitle">Sign In</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form className="form-signin" id="login-form">
							<div className="form-label-group">   
								<input
									  type="email"
									  className="form-control"
									  id="inputEmail"
									  value={this.state.inputEmail}
									  onChange={this.handleInputTextChange}
									  name="inputEmail"
									  placeholder="Email address"
									  required
								  />
								<label htmlFor="inputEmail">Email</label>
							</div>
					  </form>
				</div>	 
			  <div className="modal-footer">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				<button className="btn btn-primary" type="button" onClick={this.handleButtonAction}>Sign In</button>
			  </div>
    </div>
  </div>
</div>);

	}
}

export default LogInModal;