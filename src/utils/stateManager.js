import { createContext, useReducer, useContext } from "react";
import rootReducer, { rootInitialState } from "./../reducers/rootReducer";

const myContext = createContext();
const { Provider } = myContext;

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, rootInitialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useSelector = (fn) => {
	const { state } = useContext(myContext);

	return fn(state);
};

export const useDispatch = () => {
	const { dispatch } = useContext(myContext);

	return dispatch;
};
