export const addTask = (taskName) => {
	return {
		type: "ADDTASK",
		payload: {
			taskName,
		},
	};
};
