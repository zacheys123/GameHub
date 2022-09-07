import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { useMainContext } from '../context/user_context/MainContext';

import useStyles from './layout_style';
import { Box, Stack } from '@mui/material';
import { AuthPage } from '../pages/Signup';

const Layout = ({ children }) => {
	const [child, setChild] = useState();
	const getChild = (child) => {
		return setChild(child);
	};

	const {
		main: { auth },
	} = useMainContext();
	const classes = useStyles();
	return (
		<Stack className={classes.container} direction="column">
			<>
				<Box className={classes.layout_navbar}>
					<Header />
				</Box>
				<div
					style={{
						width: '90%',
						margin: 'auto',
						border: '1px solid #ccc',
					}}
				></div>
				<Box className={classes.layout_child}>{children}</Box>
				<Box className={classes.layout_footer}>
					{' '}
					<Footer />
				</Box>
			</>
		</Stack>
	);
};

export default Layout;
