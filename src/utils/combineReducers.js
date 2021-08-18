const merge = (array1, array2) => {
	const obj = {};
	array1.forEach((element, index) => (obj[element] = array2[index]));

	return obj;
};

export default function combineReducers(reducers) {
	return (state, action) => {
		const _reducerNames = Object.keys(reducers);
		const _states = Object.keys(reducers).map((element) => {
			return reducers[element](state[element], action);
		});

		return merge(_reducerNames, _states);
	};
}
