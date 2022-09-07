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
const Signup = () => {
	const [button, setbutton] = useState(false);
	const {
		main: { modalerror, loading, ismodal, modalsuccess },
		setMainContext,
	} = useMainContext();

	const { signup, currentUser } = useAuthContext();

	const [email, setEmail] = useState('');
	const [password, setpassword] = useState('');
	const [cpassword, setcpassword] = useState('');
	const navigate = useNavigate();
	const handlesubmit = async (ev) => {
		ev.preventDefault();
		if (password !== cpassword) {
			setMainContext({
				type: 'INPUT_ERROR',
				payload: {
					modalerror: 'passwords do not match',
					ismodal: ismodal,
				},
			});
			navigate('/signup');
		}

		try {
			await signup(email, password);
			setEmail('');
			setpassword('');
			setcpassword('');
			setMainContext({
				type: 'UPDATE_AUTH',
				payload: {
					loading: loading,
					modalsuccess: 'Successfully registered 💃 ',
					currentuser: currentUser.email,
				},
			});

			navigate('/login');
		} catch (error) {
			setMainContext({
				type: 'ERROR',
				payload: {
					loading: loading,
					modalerror: 'Failed to Create Account',
				},
			});
			navigate('/signup');
		}
	};
	const changebutton = (ev) => {
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (
			email?.match(regex) &&
			email?.length > 5 &&
			password?.length > 6 &&
			cpassword?.length > 6
		) {
			setbutton(true);
		} else {
			setbutton(false);
		}
	};
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: '65vh' }}
		>
			<Paper className="w-100 px-3 mt-5" sx={{ maxWidth: '450px' }}>
				{!ismodal && <Modal />}
				<h2 align="center">Sign up</h2>
				<form action="" autoComplete="off" onSubmit={handlesubmit}>
					<TextField
						name="email"
						variant="outlined"
						label="Email Address"
						style={{ width: '100%', margin: '1.4rem auto' }}
						value={email}
						onChange={(ev) => setEmail(ev.target.value)}
						onKeyUp={changebutton}
					/>{' '}
					<TextField
						name="pass"
						variant="outlined"
						label="Password"
						style={{ width: '100%', margin: '1.4rem auto' }}
						value={password}
						onChange={(ev) => setpassword(ev.target.value)}
						onKeyUp={changebutton}
					/>
					<TextField
						name="cpass"
						variant="outlined"
						label="Confirm Password"
						style={{ width: '100%', margin: '1.4rem auto' }}
						value={cpassword}
						onChange={(ev) => setcpassword(ev.target.value)}
						onKeyUp={changebutton}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						{button && (
							<Button
								type="submit"
								disabled={loading}
								style={{ width: '60%', margin: '1.4rem auto' }}
								variant="contained"
							>
								Sign up
							</Button>
						)}
						<h5>
							Already signed in??<Link to="/login">Login</Link>{' '}
						</h5>
					</Box>
				</form>
			</Paper>
		</Container>
	);
};
export default Signup;
