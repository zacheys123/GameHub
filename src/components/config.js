import React, { useState, useEffect } from 'react';
import 'firebase/compat/auth';
import { app } from '../config/fire';
import firebase from 'firebase/compat/app';
import List from './components/List';
const App = () => {
	const [islogged, setisLogged] = useState(
		false || window.localStorage.getItem('isLogged') === 'true',
	);
	const [token, settoken] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((usercre) => {
			console.log(usercre);
			if (usercre) {
				setisLogged(true);
				usercre.getIdToken().then((data) => {
					settoken(data);
				});
			}
		});
	}, []);

	const loginwithgoogle = () => {
		firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((usercre) => {
				if (usercre) {
					window.localStorage.setItem('islogged', 'true');
					setisLogged(true);
				}
			});
	};
	return (
		<div>
			{islogged ? (
				<List token={token} />
			) : (
				<button onClick={loginwithgoogle}>login with google</button>
			)}
		</div>
	);
};

export default App;
