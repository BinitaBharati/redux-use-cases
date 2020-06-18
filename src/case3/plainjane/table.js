import React, { Component } from 'react';

class Table extends Component {
	
	constructor(props) {
    super(props);	
	this.state = {rows : [{id: 1, email: 'andy1@xyz.com', name: 'Andy', age: '32', country: 'USA', disabled: true},
						  {id: 2, email: 'vivarose@xyz.com', name: 'Vivien', age: '23', country: 'India', disabled: true}]};
	this.editRow = this.editRow.bind(this);
	this.deleteRow = this.deleteRow.bind(this);
	this.addEmptyRow = this.addEmptyRow.bind(this);
	this.saveRow = this.saveRow.bind(this);
	this.extractRowId = this.extractRowId.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);

  }
  
   extractRowId(inputId) {
	  return parseInt(inputId.substring(inputId.indexOf('-') + 1));
}
  
  editRow(event) {
		var rowId = this.extractRowId(event.target.id);
		this.setState({rows: 
		this.state.rows.map((eachRow, rowIndex) => {
			if(eachRow.id === rowId) {
				console.log('huhu');
				eachRow.disabled = false;				
			} 
			return eachRow;			
		})}, () => {
			console.log('editRow: inside setState async calback.Current state =  '+JSON.stringify(this.state));
		});
		
  }
  
  deleteRow(event) {
		var rowId = this.extractRowId(event.target.id);
		this.setState({rows: 
		this.state.rows.filter((item) => {
			if (item.id === rowId) {
				return false;
			} 
			return true;
			
		})});	
		
		
  }
  
  addEmptyRow(event) {
		var lastRowId = this.state.rows[this.state.rows.length - 1].id;
		this.setState({rows: this.state.rows.concat([{
		id: lastRowId + 1, email: '', name: '', age: '', country: '', disabled: false, empty: true}])});		
		
  }
  
  saveRow(event) {
		var rowId = this.extractRowId(event.target.id);	
		this.setState({rows: 
		this.state.rows.map((eachRow, rowIndex) => {
			if(eachRow.id === rowId) {
				eachRow.disabled = true;
				eachRow.empty = undefined;
			} 
			return eachRow;			
		})});		
  }
  
  handleInputChange(event) {
		var rowId = this.extractRowId(event.target.id);	
		this.setState({rows: 
		this.state.rows.map((eachRow, rowIndex) => {
			if(eachRow.id === rowId) {
				//handle multiple input types
				//decipher the exact input field through its target id.
				if(event.target.id.startsWith('email')) {
					eachRow.email = event.target.value;
				} else if(event.target.id.startsWith('name')) {
					eachRow.name = event.target.value;
				} else if(event.target.id.startsWith('age')) {
					eachRow.age = event.target.value;
				} else if(event.target.id.startsWith('country')) {
					eachRow.country = event.target.value;
				}
			} 
			return eachRow;			
		})});		
		
  }
  
	
	render() {
		return (
		<div>
		<table>
		  <thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Country</th>
			 </tr>
		   </thead>
		   <tbody>
			 {this.state.rows.map((item, idx) => {
				 if(item.disabled) {
					 return (<tr id={item.id} key={item.id}>
							<td><input type="text" id={"email-" + item.id} value={item.email} disabled readOnly/></td>
							<td><input type="text" id={"name-" + item.id} value={item.name} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"age-" + item.id} value={item.age} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"country-" + item.id} value={item.country} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><button id={"editrow-"+ item.id} type="button" onClick={this.editRow}>Edit</button></td>
							<td><button id={"delrow-"+ item.id} type="button" onClick={this.deleteRow}>Delete</button></td>
						</tr>);//returning JSX
				 } else {
					 if(item.empty){
						 return (<tr id={item.id} key={item.id}>
							<td><input type="text" id={"email-" + item.id} value={item.email} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"name-" + item.id} value={item.name} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"age-" + item.id} value={item.age} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"country-" + item.id} value={item.country} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><button id={"saveRow-"+ item.id} type="button" onClick={this.saveRow}>Save</button></td>
							<td><button id={"delrow-"+ item.id} type="button" onClick={this.deleteRow}>Delete</button></td>
						</tr>);//returning JSX
					 } else {
						 return (<tr id={item.id} key={item.id}>
							<td><input type="text" id={"email-" + item.id} value={item.email} disabled readOnly/></td>
							<td><input type="text" id={"name-" + item.id} value={item.name} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"age-" + item.id} value={item.age} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><input type="text" id={"country-" + item.id} value={item.country} disabled={item.disabled} onChange={this.handleInputChange}/></td>
							<td><button id={"saveRow-"+ item.id} type="button" onClick={this.saveRow}>Save</button></td>
							<td><button id={"delrow-"+ item.id} type="button" onClick={this.deleteRow}>Delete</button></td>
						</tr>);//returning JSX
					 }
					 
				 }
				 
			 })}
		   </tbody> 
		</table>
		<button type="button" onClick={this.addEmptyRow}>Add</button>		
		</div>
	)};

}

export default Table;
