import React, { useContext, useReducer } from 'react';
import MainProvider from '../contexts_/main_context';
import { main_reducer } from '../reducers/main_reducers';
const MainContext = ({ children }) => {
	const initialState = {
		auth: false,
		istheme: false,
		currentuser: { email: '' },
		modalerror: null,
		loading: false,
		modalsuccess: null,
		ismodal: false,
	};
	const [main, setMainContext] = useReducer(
		main_reducer,
		initialState,
	);
	let value = { main, setMainContext };
	return (
		<MainProvider.Provider value={value}>
			{children}
		</MainProvider.Provider>
	);
};

export default MainContext;

export const useMainContext = () => {
	const context = useContext(MainProvider);
	if (!context) {
		throw new Error('UseMainContext can only be used in children');
	}
	return context;
};
