export const toggleDialog = (status) => {
	return {
		type: "TOGGLEDIALOG",
		payload: {
			status,
		},
	};
};
