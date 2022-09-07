import React, { useState, useEffect } from 'react';
import {
	Box,
	Container,
	Paper,
	TextField,
	FormControl,
	Button,
} from '@mui/material';
import { auth } from '../config/fire';
import { useMainContext } from '../context/user_context/MainContext';
import { useAuthContext } from '../context/user_context/AuthContext';
import { Signup_func } from '../context/action_creators/signup';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
const Login = () => {
	const {
		main: { loading, ismodal, modalerror, modalsuccess },
		setMainContext,
	} = useMainContext();

	const { login } = useAuthContext();

	const [email, setEmail] = useState('');
	const [password, setpassword] = useState('');
	const navigate = useNavigate();
	const handlesubmit = async (ev) => {
		ev.preventDefault();
		if (!email.length < 1 || !password.length < 1) {
			try {
				setMainContext({
					type: 'LOGIN',
					payload: { loading: loading, modalsuccess: 'welcome' },
				});
				setEmail('');
				setpassword('');

				await login(email, password);
				navigate('/home');
			} catch (error) {
				setMainContext({
					type: 'LOGIN_ERROR',
					payload: { loading: loading, modalerror: modalerror },
				});
				navigate('/login');
			}
		} else {
			console.log(modalerror);
			setMainContext({
				type: 'EMPTY_ERROR',
				payload: { ismodal: ismodal, modalerror: modalerror },
			});
		}
	};
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: '70vh' }}
		>
			<Paper
				className="w-100 px-3 py-5 mt-5"
				sx={{ maxWidth: '450px', background: 'white' }}
			>
				{!ismodal && <Modal />}
				<h2 align="center">Sign in</h2>
				<form action="" autoComplete="off" onSubmit={handlesubmit}>
					{' '}
					<TextField
						name="email"
						variant="outlined"
						label="Email Address"
						style={{ width: '100%', margin: '1.4rem auto' }}
						value={email}
						onChange={(ev) => setEmail(ev.target.value)}
					/>{' '}
					<TextField
						name="pass"
						variant="outlined"
						label="Password"
						style={{ width: '100%', margin: '1.4rem auto' }}
						value={password}
						onChange={(ev) => setpassword(ev.target.value)}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Button
							type="submit"
							style={{ width: '60%', margin: '1.4rem auto' }}
							variant="contained"
						>
							Login
						</Button>
						<h5>
							Need an account??<Link to="/signup">Register</Link>{' '}
						</h5>
					</Box>
				</form>
			</Paper>
		</Container>
	);
};
export default Login;
