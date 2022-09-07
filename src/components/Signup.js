import React, { useRef } from 'react';
import { Box, FormControl, Paper, TextField } from '@mui/material';
const Signup = () => {
	return (
		<Box
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Paper component="form">
				<FormControl>
					<TextField
						inputref={email}
						name="email"
						label="Email Address"
					/>
				</FormControl>
			</Paper>
		</Box>
	);
};

export default Signup;
