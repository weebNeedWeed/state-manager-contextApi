export const taskInitialState = {
	listTask: [],
};

const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADDTASK":
			const newList = [...state.listTask];
			newList.push(action.payload.taskName);

			return {
				...state,
				listTask: newList,
			};
		default:
			return state;
	}
};

export default taskReducer;
