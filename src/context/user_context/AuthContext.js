import React, { useContext, useEffect, useState } from 'react';
import AuthProvider from '../contexts_/auth_context';
import { useMainContext } from './MainContext';
import {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../../config/fire';
const AuthContext = ({ children }) => {
	//
	const { setMainContext } = useMainContext();
	const [currentUser, setCurrentUser] = useState();
	const auth = getAuth(app);

	//

	//
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setMainContext({ type: 'UPDATE_USER', payload: user });
		});
		return () => unsubscribe();
	}, []);
	//

	//
	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	//

	//
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	//

	//
	function logout() {
		return signOut(auth);
	}
	//

	const value = { currentUser, signup, login, logout };
	return (
		<AuthProvider.Provider value={value}>
			{children}
		</AuthProvider.Provider>
	);
};

export default AuthContext;
export const useAuthContext = () => {
	const context = useContext(AuthProvider);
	if (!context) {
		throw new Error('could not access the context in this page');
	}
	return context;
};
