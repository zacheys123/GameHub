import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
	breakpoints: {
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
	},
});
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
);
