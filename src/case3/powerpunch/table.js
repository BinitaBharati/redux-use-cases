import React, { Component } from 'react';
import { connect } from "react-redux";
import {editRow, deleteRow, addEmptyRow, saveRow, handleInputChange} from "./reduxstate";

class Table extends Component {
	
	constructor(props) {
    super(props);	
	this.state = {rows : [{id: 1, email: 'andy1@xyz.com', name: 'Andy', age: '32', country: 'USA', disabled: true},
						  {id: 2, email: 'vivarose@xyz.com', name: 'Vivien', age: '23', country: 'India', disabled: true}]};
	this.editRow1 = this.editRow1.bind(this);
	this.deleteRow1 = this.deleteRow1.bind(this);
	this.addEmptyRow1 = this.addEmptyRow1.bind(this);
	this.saveRow1 = this.saveRow1.bind(this);
	this.extractRowId = this.extractRowId.bind(this);
	this.handleInputChange1 = this.handleInputChange1.bind(this);

  }
  
   extractRowId(inputId) {
	  return parseInt(inputId.substring(inputId.indexOf('-') + 1));
}
  
  editRow1(event) {
		this.props.editRow1(event.target.id);
  }
  
  deleteRow1(event) {
		this.props.deleteRow1(event.target.id);
  }
  
  addEmptyRow1(event) {
		this.props.addEmptyRow1();
		
  }
  
  saveRow1(event) {
		this.props.saveRow1(event.target.id);	
  }
  
  handleInputChange1(event) {
		this.props.handleInputChange1(event.target.id, event.target.value);	
		
  }
  
	
	render() {
		return (
		<div>
		<table>
		  <thead>
			<tr>
			    <th>Email</th>
				<th>Name</th>
				<th>Age</th>
				<th>Country</th>
			 </tr>
		   </thead>
		   <tbody>
			 {this.props.rows1.map((item, idx) => {
				 if(item.disabled) {
					 return (<tr id={item.id} key={item.id}>
							<td><input type="text" id={"email-" + item.id} value={item.email} disabled readOnly/></td>
							<td><input type="text" id={"name-" + item.id} value={item.name} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"age-" + item.id} value={item.age} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"country-" + item.id} value={item.country} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><button id={"editrow-"+ item.id} type="button" onClick={this.editRow1}>Edit</button></td>
							<td><button id={"delrow-"+ item.id} type="button" onClick={this.deleteRow1}>Delete</button></td>
						</tr>);//returning JSX
				 } else {
					 if(item.empty){
						 return (<tr id={item.id} key={item.id}>
							<td><input type="text" id={"email-" + item.id} value={item.email} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"name-" + item.id} value={item.name} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"age-" + item.id} value={item.age} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"country-" + item.id} value={item.country} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><button id={"saveRow-"+ item.id} type="button" onClick={this.saveRow1}>Save</button></td>
							<td><button id={"delrow-"+ item.id} type="button" onClick={this.deleteRow1}>Delete</button></td>
						</tr>);//returning JSX
					 } else {
						 return (<tr id={item.id} key={item.id}>
							<td><input type="text" id={"email-" + item.id} value={item.email} disabled readOnly/></td>
							<td><input type="text" id={"name-" + item.id} value={item.name} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"age-" + item.id} value={item.age} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><input type="text" id={"country-" + item.id} value={item.country} disabled={item.disabled} onChange={this.handleInputChange1}/></td>
							<td><button id={"saveRow-"+ item.id} type="button" onClick={this.saveRow1}>Save</button></td>
							<td><button id={"delrow-"+ item.id} type="button" onClick={this.deleteRow1}>Delete</button></td>
						</tr>);//returning JSX
					 }
					 
				 }
				 
			 })}
		   </tbody> 
		</table>
		<button type="button" onClick={this.addEmptyRow1}>Add</button>		
		</div>
	)};

}

const mapStateToProps = state => {
  return {
		rows1: state.rows
	};
};

const mapDispatchToProps = {
  editRow1: editRow,
  deleteRow1: deleteRow,
  addEmptyRow1: addEmptyRow,
  saveRow1: saveRow,
  handleInputChange1: handleInputChange
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
