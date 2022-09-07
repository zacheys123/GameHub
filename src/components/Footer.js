import React from 'react';
import { Stack, Box, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg';
import useStyles from '../css/header';
import '../css/Global.css';
import { useMainContext } from '../context/user_context/MainContext';
import { ToggleOn, ToggleOff } from '@mui/icons-material';
const Footer = () => {
	const {
		main: { istheme, currentuser },
		setMainContext,
	} = useMainContext();

	return <h1>Footer</h1>;
};

export default Footer;
