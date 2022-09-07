import React, { useEffect, useState } from 'react';
import MainContext from './context/user_context/MainContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './admin/Admin';
import Layout from './layout/Layout';
import { Home, FullGames_Sum, Games, Signup, Login } from './pages';
import { useAuthContext } from './context/user_context/AuthContext';
import AuthContext from './context/user_context/AuthContext';
import AdminContext from './context/user_context/AdminContext';
import './App.css';
import Error404 from './pages/Error404';
import PrivateRoutes from './components/PrivateRoutes';
import LandingPage from './pages/LandingPage';
import Priv_Admin from './components/Priv_Admin';
const App = () => {
	const navigate = useNavigate();
	const spinner = document.getElementById('spinner');
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		if (spinner) {
			setTimeout(() => {
				spinner.style.display = 'none';
				setLoader(false);
				navigate('/start');
			}, 200000000);
		}
	}, []);
	return (
		<>
			{!loader ? (
				<MainContext>
					<AuthContext>
						<Layout>
							<Routes>
								<Route
									path="/start"
									element={
										<PrivateRoutes>
											{' '}
											<LandingPage />
										</PrivateRoutes>
									}
								/>
								<Route
									exact
									path="/summary"
									element={
										<PrivateRoutes>
											<FullGames_Sum />
										</PrivateRoutes>
									}
								/>
								<Route
									exact
									path="/games"
									element={
										<PrivateRoutes>
											<Games />
										</PrivateRoutes>
									}
								/>
								<Route
									exact
									path="/admin"
									element={
										<AdminContext>
											<Priv_Admin>
												<Admin />
											</Priv_Admin>
										</AdminContext>
									}
								/>

								<Route
									exact
									path="/home"
									element={
										<PrivateRoutes>
											<Home />
										</PrivateRoutes>
									}
								/>

								<Route path="/signup" element={<Signup />} />
								<Route path="/login" element={<Login />} />
							</Routes>
						</Layout>
					</AuthContext>
				</MainContext>
			) : (
				''
			)}
		</>
	);
};

export default App;
