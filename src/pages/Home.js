import React from 'react';
import { Stack, Box } from '@mui/material';
import Right_Sidebar from '../components/Right_Sidebar';
const Home = () => {
	return (
		<Stack direction="row" gap={2} alignItems="center">
			<Box flexGrow={1}>
				<h2>You have Reached Home</h2>
			</Box>
			<Right_Sidebar />
		</Stack>
	);
};

export default Home;
