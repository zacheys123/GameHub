import React, { useContext } from 'react';
import AdminProvider from '../contexts_/admin_context';
const AdminContext = ({ children }) => {
	return <AdminProvider.Provider>{children}</AdminProvider.Provider>;
};

export default AdminContext;

export const useAdminContext = () => {
	const context = useContext(AdminProvider);
	if (!context) {
		throw new Error('context not accessed in ths page');
	}
	return context;
};
