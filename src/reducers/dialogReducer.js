export const dialogInitialState = {
	open: false,
};

const dialogReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLEDIALOG":
			return {
				...state,
				open: action.payload.status,
			};
		default:
			return state;
	}
};

export default dialogReducer;
