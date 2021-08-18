import combineReducers from "../utils/combineReducers";
import taskReducer, { taskInitialState } from "./taskReducer";
import dialogReducer, { dialogInitialState } from "./dialogReducer";

export const rootInitialState = {
	task: taskInitialState,
	dialog: dialogInitialState,
};

export default combineReducers({
	task: taskReducer,
	dialog: dialogReducer,
});
