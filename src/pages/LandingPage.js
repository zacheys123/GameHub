import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/signup');
		}, 20000);
	}, []);

	return (
		<div>
			<h1>Landing Page</h1>
		</div>
	);
};

export default LandingPage;
