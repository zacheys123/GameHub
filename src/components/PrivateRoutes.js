import React from 'react';

import { useAuthContext } from '../context/user_context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoutes = ({ children }) => {
	const location = useLocation();
	const { currentUser } = useAuthContext();
	if (!currentUser) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return children;
};
export default PrivateRoutes;
