import { createStore } from "redux";

const initialState = { 
  clickNumber: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === "INC_CLICK_COUNT") {
	return {
				clickNumber: state.clickNumber + 1
			}
  } 
  return state;
};

//Define store
export const store = createStore(rootReducer);

//Define actions
export const incClickCount = () => {
  console.log('incClickCount: entered');
  return { type: "INC_CLICK_COUNT"}
};
