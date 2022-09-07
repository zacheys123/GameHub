import 'firebase/firestore';
import firebase from 'firebase/compat/app';
const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_firebase_key,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
});

export default app;
