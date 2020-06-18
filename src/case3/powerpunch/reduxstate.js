import { createStore } from "redux";

const initialState = {rows : [{id: 1, email: 'andy1@xyz.com', name: 'Andy', age: '32', country: 'USA', disabled: true},
						  {id: 2, email: 'vivarose@xyz.com', name: 'Vivien', age: '23', country: 'India', disabled: true}]};
						  
function extractRowId(inputId) {
	  return parseInt(inputId.substring(inputId.indexOf('-') + 1));
}

function rootReducer(state = initialState, action) {
  var rowId = null;
  if (action.targetId) {
	  rowId = extractRowId(action.targetId);
  }
  if (action.type === "EDIT_ROW") {
	return {
				rows: state.rows.map((eachRow, rowIndex) => 
				{
					if(eachRow.id === rowId) {
						eachRow.disabled = false;				
					} 
					return eachRow;			
				})
			}
  } else if (action.type === "DELETE_ROW"){
	  return {
				rows: state.rows.filter((item) => 
				{
					if (item.id === rowId) {
						return false;
					} 
					return true;
			
				})
			}
  } else if (action.type === "ADD_EMPTY_ROW"){
	  var lastRowId = state.rows[state.rows.length - 1].id;
	  return {
				rows: state.rows.concat([{id: lastRowId + 1, email: '', name: '', age: '', country: '', disabled: false, empty: true}])
			}
  } else if (action.type === "SAVE_ROW"){
	  return {
				rows: state.rows.map((eachRow, rowIndex) => 
				{
					if(eachRow.id === rowId) {
						eachRow.disabled = true;
						eachRow.empty = undefined;
					} 
					return eachRow;			
				})
			}
  } else if (action.type === "HANDLE_INPUT_CHANGE"){
	  return {
				rows: state.rows.map((eachRow, rowIndex) => 
				{
					if(eachRow.id === rowId) {
						//handle multiple input types
						//decipher the exact input field through its target id.
						if(action.targetId.startsWith('email')) {
							eachRow.email = action.targetValue;
						} else if(action.targetId.startsWith('name')) {
							eachRow.name = action.targetValue;
						} else if(action.targetId.startsWith('age')) {
							eachRow.age = action.targetValue;
						} else if(action.targetId.startsWith('country')) {
							eachRow.country = action.targetValue;
						}
					} 
					return eachRow;			
				})}
  }
  return state;
};

//Define store
export const store = createStore(rootReducer);

//Define actions
export const editRow = (targetId) => {
  console.log('editRow: entered with targetId = '+targetId);
  return { type: "EDIT_ROW", targetId }
};

export const deleteRow = (targetId) => {
  console.log('delRow: entered with targetId = '+targetId);
  return { type: "DELETE_ROW", targetId }
};

export const addEmptyRow = () => {
  console.log('addEmptyRow: entered');
  return { type: "ADD_EMPTY_ROW"}
};

export const saveRow = (targetId) => {
  console.log('saveRow: entered with targetId = '+targetId);
  return { type: "SAVE_ROW", targetId }
};

export const handleInputChange = (targetId, targetValue) => {
  console.log('handleInputChange: entered with targetId = '+targetId+ ', targetValue = '+targetValue);
  return { type: "HANDLE_INPUT_CHANGE", targetId , targetValue}
};