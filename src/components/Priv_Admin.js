import React from 'react';

import { useAdminContext } from '../context/user_context/AdminContext';
import { Navigate, useLocation } from 'react-router-dom';
const Priv_Admin = ({ children }) => {
	const { admin } = useAdminContext();
	if (!admin) {
		return <Navigate to="/admin_login" />;
	}
	return children;
};
export default Priv_Admin;
