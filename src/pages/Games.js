import React from 'react';
import { useAuthContext } from '../context/user_context/AuthContext';
const Games = () => {
	const { logout } = useAuthContext();
	console.log(logout);
	return (
		<div>
			<h4>Games Page</h4>
		</div>
	);
};

export default Games;
