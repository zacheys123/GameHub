import React from 'react';
import { Stack, Box, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg';
import useStyles from '../css/header';
import '../css/Global.css';
import { useMainContext } from '../context/user_context/MainContext';
import { ToggleOn, ToggleOff } from '@mui/icons-material';

const Theme = () => {
	const {
		main: { istheme, currentuser },
		setMainContext,
	} = useMainContext();
	return (
		<Stack>
			<div>
				{istheme ? (
					<Box>
						<ToggleOff
							sx={{
								fontSize: {
									sx: '.7rem',
									sm: '3rem',
									color: 'black',
									cursor: 'pointer',
								},
							}}
							onClick={() =>
								setMainContext({
									type: 'UPDATE_THEME',
									payload: istheme,
								})
							}
						/>
						<h6>dark mode</h6>
					</Box>
				) : (
					<Box>
						<ToggleOn
							sx={{
								fontSize: {
									sx: '.7rem',
									sm: '3rem',
									color: 'blue',
									cursor: 'pointer',
								},
							}}
							onClick={() =>
								setMainContext({
									type: 'UPDATE_THEME',
									payload: istheme,
								})
							}
						/>
						<h6>light mode</h6>
					</Box>
				)}
			</div>
		</Stack>
	);
};

export default Theme;
