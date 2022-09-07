import React from 'react';
import { Stack, Box, Button, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo2.jpg';
import useStyles from '../css/header';
import '../css/Global.css';
import { ToggleOn, ToggleOff } from '@mui/icons-material';
import { useMainContext } from '../context/user_context/MainContext';
import { useAuthContext } from '../context/user_context/AuthContext';
import Theme from './Theme';

const Header = () => {
	const {
		main: { istheme, currentuser },
		setMainContext,
	} = useMainContext();
	const { logout } = useAuthContext();
	const navigate = useNavigate();
	const classes = useStyles();
	let source = currentuser?.email
		? currentuser?.email.split('')[0].toUpperCase()
		: '';

	const handleLogout = async () => {
		try {
			await logout();
			setMainContext({
				type: 'LOGOUT_SUCCESS',
				payload: { modalsuccess: 'You are logged Out' },
			});
			navigate('/login');
			console.log(logout);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			style={{ marginTop: '.5rem' }}
		>
			<Stack direction="row" alignItems="center" flex={9}>
				<Stack
					flex={1}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginLeft: '2.3rem',
					}}
				>
					<Link to="/home">
						<img
							src={logo}
							alt=""
							style={{
								height: '55px',
								width: '50px',
								borderRadius: '50%',
							}}
						/>
					</Link>

					<h2
						className={classes.navbrand}
						style={{ color: 'darkgreen' }}
					>
						Game<span style={{ color: 'red' }}>Hub ⚽ </span>{' '}
					</h2>
				</Stack>
				<Box className={classes.nav}>
					<Link
						className={currentuser ? classes.item : classes.disabled}
						to="/home"
					>
						<Button variant="outlined" size="small">
							Hub
						</Button>
					</Link>
					<Link
						className={currentuser ? classes.item : classes.disabled}
						to="/games"
					>
						{' '}
						<Button variant="outlined" size="small">
							Game
						</Button>
					</Link>
					<Link
						className={currentuser ? classes.item : classes.disabled}
						to="/summary"
					>
						{' '}
						<Button variant="outlined" size="small">
							Summary
						</Button>
					</Link>
					<Link
						className={currentuser ? classes.item : classes.none}
						to="Logout"
					>
						{' '}
						<Button
							onClick={handleLogout}
							variant="outlined"
							size="small"
						>
							Logout
						</Button>
					</Link>{' '}
					<Box className={classes.theming}>
						<Theme />
					</Box>
				</Box>
			</Stack>
			<Stack className={currentuser ? classes.avatar : classes.none}>
				{source}
			</Stack>
		</Stack>
	);
};

export default Header;
