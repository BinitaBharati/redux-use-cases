import { createStore } from "redux";

const initialState = { 
  loggedInUserEmail: "NA",//used by navbar component
  inputEmail: ""//used by modal component  
};

function rootReducer(state = initialState, action) {
  if (action.type === "SET_MODAL_INPUT_EMAIL") {
	return {
				loggedInUserEmail: state.loggedInUserEmail,
				inputEmail: action.inputEmail
			}
  } else if (action.type === "SET_NAVBAR_USER_EMAIL") {
	  return {
				loggedInUserEmail: action.loggedInUserEmail,
				inputEmail: state.inputEmail
			}
  } 
  return state;
};

//Define store
export const store = createStore(rootReducer);

//Define actions
export const setModalInputEmail = (inputEmail) => {
  console.log('setModalInputEmail: entered with '+inputEmail);
  return { type: "SET_MODAL_INPUT_EMAIL", inputEmail }
};

export const setNavBarUserEmail = (loggedInUserEmail) => {
  console.log('setNavBarUserEmail: entered ');
  return { type: "SET_NAVBAR_USER_EMAIL", loggedInUserEmail }
};
